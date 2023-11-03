'use client';

import { FaFacebookSquare } from 'react-icons/fa';
import { FcGoogle } from 'react-icons/fc';
import Button from '@/components/ui/Button';
import type { dictionaryPageType } from '@/types';

export default function Final({ page }: dictionaryPageType) {
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
                        {page.signUpFinal.title}
                    </h1>
                    <p
                        className="
                            text-sm
                            font-normal
                            text-center
                        "
                    >
                        {page.signUpFinal.description}
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
                            px-12
                        "
                    >
                        <div className="mb-6">
                            <Button
                                state={false}
                                onClick={() => ('')}
                                type="button"
                                label={page.signUpFinal.followFbButton}
                                color={'#4193EF'}
                                appendIcon={<FaFacebookSquare size={28} style={{ marginLeft: '4px' }} />}
                            />
                        </div>
                        <Button
                            state={false}
                            onClick={() => ('')}
                            type="button"
                            label={page.signUpFinal.followIgButton}
                            color={'#BF5FC1'}
                            appendIcon={<FcGoogle size={28} style={{ marginLeft: '4px' }} />}
                        />
                    </div>
                </div>
            </div>
        </>
    );
}
