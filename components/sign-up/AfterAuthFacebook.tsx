'use client';

import {
    sendSignInLinkToEmail,
    isSignInWithEmailLink,
    signInWithEmailLink
} from 'firebase/auth';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import { AiOutlineSend } from 'react-icons/ai';
import { Input } from '@/components/common/Input';
import { auth } from '@/firebase/firebase';
import type { dictionaryPageType } from '@/types';

export function AfterAuthFacebook({ page }: dictionaryPageType) {
    const [email, setEmail] = useState('');
    const router = useRouter();

    const actionCodeSettings = {
        url: 'https://almanet.vercel.app/en/sign-up/second-step',
        handleCodeInApp: true
    };
    const signInViaEmail = () => {
        sendSignInLinkToEmail(auth, email, actionCodeSettings)
            .then(() => {
                window.localStorage.setItem('emailForSignIn', email);
            })
            .catch((error) => {
                console.log(error);
            });
    };

    useEffect(() => {
        if (isSignInWithEmailLink(auth, window.location.href)) {
            const useEmail = window.localStorage.getItem('emailForSignIn');
            signInWithEmailLink(auth, useEmail as string, window.location.href)
                .then((result) => {
                    window.localStorage.removeItem('emailForSignIn');
                    console.log(result);
                    router.push('/sign-up/second-step');
                })
                .catch((error) => {
                    console.log(error);
                });
        }
    });

    return (
        <>
            <div
                className="
                flex
                flex-col
                justify-center
                items-center
                w-[502px]
            "
            >
                <div
                    className="
                    sm:mb-6
                    flex
                    flex-col
                    items-center
                "
                >
                    <h1
                        className="
                            xl:text-[56px]
                            xl:leading-[64px]
                            text-[40px]
                            leading-[48px]
                            font-extrabold
                            mb-6
                            text-center
                        "
                    >
                        {page.signUpViaFacebook.title}
                    </h1>
                    <p
                        className="
                            text-sm
                            font-normal
                        "
                    >
                        {page.signUpViaFacebook.description}
                    </p>
                </div>
                <div
                    className="
                    flex
                    flex-col
                    items-center
                    w-full
                "
                >
                    <div
                        className="
                            w-full
                            relative
                            mb-6
                            px-12
                        "
                    >
                        <Input
                            id="email"
                            onChange={(event: any) => setEmail(event.target.value)}
                            value={email}
                            label={page.signUp.emailPlaceholder}
                            type="email"
                        />
                        { email.length ? (
                            <div
                                onClick={() => signInViaEmail()}
                                className="
                                cursor-pointer
                                bg-green
                                w-8
                                h-8
                                rounded
                                flex
                                justify-center
                                items-center
                                text-white
                                absolute
                                top-1/2
                                -translate-y-1/2
                                right-0
                                transition
                            "
                            >
                                <AiOutlineSend size={24} />
                            </div>
                        ) : ''}
                    </div>
                    <span>
                        {page.signUpViaFacebook.later}
                    </span>
                </div>
            </div>
        </>
    );
}
