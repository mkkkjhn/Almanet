'use client';

import {
    sendSignInLinkToEmail,
    isSignInWithEmailLink,
    signInWithEmailLink,
    signInWithRedirect,
    GoogleAuthProvider,
    FacebookAuthProvider,
    getRedirectResult
} from 'firebase/auth';
import { useRouter } from 'next/navigation';
import { useContext, useEffect, useState } from 'react';
import { AiOutlineSend } from 'react-icons/ai';
import { FaFacebookSquare } from 'react-icons/fa';
import { FcGoogle } from 'react-icons/fc';
import { Button } from '@/components/common/Button';
import { Input } from '@/components/common/Input';
import { Context } from '@/context/Context';
import { auth } from '@/firebase/firebase';
import type { dictionaryPageType } from '@/types';

export const Form = ({ page }: dictionaryPageType) => {
    const [email, setEmail] = useState('');
    const router = useRouter();
    const context = useContext(Context);
    if (!context) {
        throw new Error('Context undefined');
    }
    const { setSignInMethod } = context;

    const googleProvider = new GoogleAuthProvider();
    const fbProvider = new FacebookAuthProvider();
    const signInViaFb = () => {
        signInWithRedirect(auth, fbProvider)
            .catch((fbError) => {
                console.log(fbError);
            });
    };
    const signInViaGoogle = () => {
        signInWithRedirect(auth, googleProvider)
            .catch((googleError) => {
                console.log(googleError);
            });
    };

    const actionCodeSettings = {
        url: 'https://almanet.vercel.app/en/sign-up/first-step',
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
        getRedirectResult(auth)
            .then((result) => {
                if (result) {
                    const googleCredential = GoogleAuthProvider.credentialFromResult(result);
                    const fbCredential = FacebookAuthProvider.credentialFromResult(result);
                    setSignInMethod(googleCredential?.signInMethod as string || fbCredential?.signInMethod as string);
                    router.push('/sign-up/second-step');
                    // const token = credential?.accessToken;
                    // const { user } = result;
                }
            }).catch((error) => {
                console.log(error);
            });
    });

    return (
        <>
            <div
                className="
                    flex
                    flex-col
                    justify-center
                    items-center
                "
            >
                <div
                    className="
                        sm:mb-14
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
                            mb-4
                        "
                    >
                        {page.signUp.title}
                    </h1>
                    <p
                        className="
                            text-sm
                            font-normal
                        "
                    >
                        {page.signUp.description}
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
                        style={{ height: 'calc(100% + 24px)' }}
                        className="
                            flex
                            flex-col
                            justify-between
                            mb-9
                            w-full
                            px-12
                        "
                    >
                        <div className="mb-6">
                            <Button
                                onClick={() => signInViaFb()}
                                type="button"
                                label={page.signUp.buttonFb}
                                color={'#4193EF'}
                                appendIcon={<FaFacebookSquare size={28} style={{ marginLeft: '4px' }} />}
                            />
                        </div>
                        <Button
                            onClick={() => signInViaGoogle()}
                            type="button"
                            label={page.signUp.buttonGoogle}
                            color={'#7CD3AF'}
                            appendIcon={<FcGoogle size={28} style={{ marginLeft: '4px' }} />}
                        />
                    </div>
                    <span
                        className="
                                text-xl
                                font-normal
                                mb-8
                            "
                    >
                        {page.signUp.or}
                    </span>
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
                    <p>
                        {page.signUp.disclaimer}
                    </p>
                    <span>
                        {page.home.privatePolicy}
                    </span>
                </div>
            </div>
        </>
    );
};
