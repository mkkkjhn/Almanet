'use client';

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
                    w-full
                    xl:w-[502px]
                    mx-4
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
                            break-normal
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
            </div>
        </>
    );
}
