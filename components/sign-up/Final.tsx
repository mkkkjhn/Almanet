'use client';

import { useRouter } from 'next-nprogress-bar';
import { FaFacebookSquare, FaInstagram } from 'react-icons/fa';
import Button from '@/components/ui/Button';
import type { dictionaryPageType } from '@/types';

export default function Final({ page }: dictionaryPageType) {
    const fbLink = 'https://www.facebook.com/almanet.sc/';
    const instagramLink = 'https://www.instagram.com/almanet.sc/';
    const router = useRouter();

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
                            pb-4
                            sm:pb-0
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
                        <div className="sm:mb-6">
                            <Button
                                state={false}
                                onClick={() => router.push(fbLink, '_blank')}
                                type="button"
                                label={page.signUpFinal.followFbButton}
                                color={'#4193EF'}
                                appendIcon={<FaFacebookSquare size={28} style={{ marginLeft: '4px' }} />}
                            />
                        </div>
                        <Button
                            state={false}
                            onClick={() => router.push(instagramLink, '_blank')}
                            type="button"
                            label={page.signUpFinal.followIgButton}
                            color={'#BF5FC1'}
                            appendIcon={<FaInstagram size={28} style={{ marginLeft: '4px' }} />}
                        />
                    </div>
                </div>
            </div>
        </>
    );
}
