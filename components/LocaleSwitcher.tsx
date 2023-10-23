'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { i18n } from '@/i18n.config';

export default function LocaleSwitcher() {
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
                        sm:flex
                        items-center
                        font-semibold
                        text-xl
                        text-controls-dark-gray
                        hidden
                    "
            >
                <div
                    className="
                            flex
                            justify-center
                            items-center
                            h-6
                            w-6
                        "
                >
                    <span>
                        {i18n.locales[0]}
                    </span>
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
                        "
                >
                    <span
                        className="
                            opacity-40
                        "
                    >
                        {i18n.locales[1]}
                    </span>
                </div>
            </div>
            <ul
                className="
                    flex
            "
            >
                {i18n.locales.map(locale => (
                    <li key={locale}>
                        <Link
                            href={redirectedPathName(locale)}
                            className='rounded-md bg-black px-3 py-2 text-black'
                        >
                            {locale}
                        </Link>
                    </li>
                ))}
            </ul>
        </>
    );
}
