'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { i18n } from '@/i18n.config';

interface LocaleSwitcherProps {
    currentLocale: string
}

export default function LocaleSwitcher({ currentLocale }: LocaleSwitcherProps) {
    const pathName = usePathname();

    const redirectedPathName = (locale: string) => {
        if (!pathName) return '/';
        const segments = pathName.split('/');
        segments[1] = locale;
        return segments.join('/');
    };

    return (
        <>
            <div
                className="
                    flex
                    items-center
                    font-semibold
                    text-l
                    text-controls-dark-gray
                "
            >
                <div
                    className="
                        flex
                        justify-center
                        items-center
                        h-6
                        w-6
                        mx-1
                    "
                >
                    <Link
                        href={redirectedPathName(i18n.locales[0])}
                        style={{
                            opacity: currentLocale === i18n.locales[0] ? '1' : '.4',
                            cursor: currentLocale === i18n.locales[0] ? 'unset' : 'pointer'
                        }}
                    >
                        {i18n.locales[0]}
                    </Link>
                </div>
                <div
                    className="
                            bg-controls-light-gray
                            h-[18px]
                            w-[1px]
                        "
                />
                <div
                    className="
                            flex
                            justify-center
                            items-center
                            h-6
                            w-6
                            mx-1
                        "
                >
                    <Link
                        href={redirectedPathName(i18n.locales[1])}
                        style={{
                            opacity: currentLocale === i18n.locales[1] ? '1' : '.4',
                            cursor: currentLocale === i18n.locales[1] ? 'unset' : 'pointer'
                        }}
                    >
                        {i18n.locales[1]}
                    </Link>
                </div>
            </div>
        </>
    );
}
