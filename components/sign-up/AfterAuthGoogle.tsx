'use client';

import {
    getRedirectResult, FacebookAuthProvider, signOut, signInWithRedirect
} from 'firebase/auth';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';
import { FaFacebookSquare } from 'react-icons/fa';
import { Button } from '@/components/common/Button';
import { auth } from '@/firebase/firebase';
import type { dictionaryPageType } from '@/types';

interface AfterAuthGoogle {
    page: dictionaryPageType['page']
}

export default function AfterAuthGoogle({ page }:AfterAuthGoogle) {
    const router = useRouter();
    const provider = new FacebookAuthProvider();
    const signInViaFb = () => {
        signInWithRedirect(auth, provider)
            .catch((fbError) => {
                console.log(fbError);
            });
    };

    useEffect(() => {
        getRedirectResult(auth)
            .then((result) => {
                if (result) {
                    router.push('/sign-up/finally');
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
                        {page.signUpViaGoogle.title}
                    </h1>
                    <p
                        className="
                            text-sm
                            font-normal
                        "
                    >
                        {page.signUpViaGoogle.description}
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
                        flex
                        justify-center
                        mb-6
                        w-full
                        px-12
                    "
                    >
                        <Button
                            onClick={() => signInViaFb()}
                            type="button"
                            label={page.signUpViaGoogle.buttonFb}
                            color={'#4193EF'}
                            appendIcon={<FaFacebookSquare size={28} style={{ marginLeft: '4px' }} />}
                        />
                    </div>
                    <span
                        className="cursor-pointer"
                        onClick={() => router.push('/sign-up/finally')}
                    >
                        {page.signUpViaGoogle.tieLater}
                    </span>
                </div>
            </div>
        </>
    );
}
