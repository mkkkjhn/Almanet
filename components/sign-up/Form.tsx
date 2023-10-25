'use client';

import { signIn } from 'next-auth/react';
import { useState } from 'react';
import { FaFacebookSquare } from 'react-icons/fa';
import { FcGoogle } from 'react-icons/fc';
import { Button } from '@/components/common/Button';
import { Input } from '@/components/common/Input';
import type { dictionaryPageType } from '@/types';

export const Form = ({ page }: dictionaryPageType) => {
    const [email, setEmail] = useState('');

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
                                type="button"
                                label={page.signUp.buttonFb}
                                color={'#4193EF'}
                                appendIcon={<FaFacebookSquare size={28} style={{ marginLeft: '4px' }} />}
                            />
                        </div>
                        <Button
                            onClick={() => signIn('google')}
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
                            mb-6
                            w-full
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
