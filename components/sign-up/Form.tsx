'use client';

import * as process from 'process';
import axios from 'axios';
import {
    sendSignInLinkToEmail,
    GoogleAuthProvider,
    signInWithPopup, isSignInWithEmailLink, signInWithEmailLink
} from 'firebase/auth';
import Link from 'next/link';
import { useRouter } from 'next-nprogress-bar';
import { useContext, useEffect, useState } from 'react';
import { AiOutlineSend } from 'react-icons/ai';
import { FcGoogle } from 'react-icons/fc';
import { TbLoaderQuarter } from 'react-icons/tb';
import Button from '@/components/ui/Button';
import { Input } from '@/components/ui/Input';
import { Context } from '@/context/Context';
import { auth } from '@/services/firebase/firebase';
import type { dictionaryPageType } from '@/types';

export const Form = ({ page }: dictionaryPageType) => {
    const [email, setEmail] = useState('');
    const [isEmailSent, setIsEmailSent] = useState(false);
    const router = useRouter();
    const context = useContext(Context);
    const {
        setSignInMethod, isLoading, setIsLoading
    } = context;
    const privacyPolicyPath = '/about/privacy-policy';
    const subject = 'Welcome to Almanet – Your Gateway to the Seychelles Community!';

    const sendEmail = async (userEmail: string) => {
        const response = await axios.post('/api/send-email', {
            userEmail,
            subject
        });

        if (response.status === 200) {
            // Письмо отправлено успешно
        } else {
            // Произошла ошибка
        }
    };

    const googleProvider = new GoogleAuthProvider();
    // const fbProvider = new FacebookAuthProvider();
    // const signInViaFb = async () => {
    //     setIsLoading(true);
    //     signInWithPopup(auth, fbProvider)
    //         .then(async (result) => {
    //             const credential = GoogleAuthProvider.credentialFromResult(result);
    //             setSignInMethod(credential?.signInMethod as string);
    //             await router.push('/sign-up/second-step');
    //         }).catch((error) => {
    //             console.log(error);
    //         });
    // };

    const signInViaGoogle = async () => {
        setIsLoading(true);
        signInWithPopup(auth, googleProvider)
            .then(async (result) => {
                const credential = GoogleAuthProvider.credentialFromResult(result);
                setSignInMethod(credential?.signInMethod as string);
                const user = auth.currentUser;
                try {
                    await sendEmail(user?.email as string);
                } catch (e) {
                    console.log(e);
                }
                await router.push('/sign-up/finally');
                setIsLoading(false);
            }).catch((error) => {
                console.log(error);
            });
    };

    const actionCodeSettings = (userEmail: string) => ({
        url: `${process.env.NEXT_PUBLIC_EMAIL_REGISTRATION_REDIRECT_URL}?email=${userEmail}`,
        handleCodeInApp: true
    });
    const signInViaEmail = () => {
        console.log(actionCodeSettings(email));
        setIsLoading(true);
        sendSignInLinkToEmail(auth, email, actionCodeSettings(email))
            .then(() => {
                setIsLoading(false);
                setIsEmailSent(true);
            })
            .catch((error) => {
                console.log(error);
            });
    };

    useEffect(() => {
        if (isSignInWithEmailLink(auth, window.location.href)) {
            setIsLoading(true);
            const queryParameters = new URLSearchParams(window.location.search);
            const useEmail = queryParameters.get('email');
            if (useEmail) {
                signInWithEmailLink(auth, useEmail as string, window.location.href)
                    .then(async () => {
                        try {
                            await sendEmail(useEmail);
                        } catch (e) {
                            console.log(e);
                        }
                        router.push('/sign-up/finally');
                        setIsLoading(false);
                    })
                    .catch((error) => {
                        console.log(error);
                    });
            } else {
                setIsLoading(false);
            }
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
                            mb-8
                            sm:mb-0
                        "
                    >
                        {page.signUp.description}
                    </p>
                </div>
                {!isEmailSent ? (
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
                                sm:mb-9
                                w-full
                                px-12
                            "
                        >
                            {/* <div className="sm:mb-6"> */}
                            {/*    <Button */}
                            {/*        state={isLoading} */}
                            {/*        onClick={() => signInViaFb()} */}
                            {/*        type="button" */}
                            {/*        label={page.signUp.buttonFb} */}
                            {/*        color={'#4193EF'} */}
                            {/*        appendIcon={<FaFacebookSquare size={28} style={{ marginLeft: '4px' }} />} */}
                            {/*    /> */}
                            {/* </div> */}
                            <Button
                                state={isLoading}
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
                            {!isLoading ? (
                                <>
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
                                            {!isLoading ? (
                                                <AiOutlineSend size={24} />
                                            ) : (
                                                <TbLoaderQuarter size={24} className="animate-spin" />
                                            )}
                                        </div>
                                    ) : ''}
                                </>
                            ) : (
                                <TbLoaderQuarter size={24} className="animate-spin mx-auto" />
                            )}
                        </div>
                        <p>
                            {page.signUp.disclaimer}
                        </p>
                        <Link
                            href={privacyPolicyPath}
                        >
                            <span
                                className="
                                cursor-pointer
                                text-text-accent-blue
                                hover:opacity-70
                                transition
                            "
                            >
                                {page.privacyPolicy.title}
                            </span>
                        </Link>
                    </div>
                ) : (
                    <p
                        className="
                            w-[370px]
                            text-center
                        "
                    >Please check your email. We have sent a confirmation email to the address you provided :) </p>
                )}
            </div>
        </>
    );
};
