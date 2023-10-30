'use client';

import Image from 'next/image';
import Link from 'next/link';
import { FaInstagram, FaFacebookF } from 'react-icons/fa6';
import LocaleSwitcher from '@/components/ui/LocaleSwitcher';
import { Locale } from '@/i18n.config';
import Logo from '@/public/images/logo.png';

export default function Header({
    params: { lang }
}: {
    params: { lang: Locale }
}) {
    return (
        <>
            <div
                className="
                    h-max
                    w-full
                    flex
                    justify-between
                    sm:px-20
                    px-4
                    py-4
                "
            >
                <Link href="/">
                    <Image src={Logo} alt="Logo"></Image>
                </Link>
                <div className="flex items-center">
                    <div
                        className="
                        flex
                        sm:mr-8
                        mr-4
                    "
                    >
                        <div
                            className="
                            w-6
                            h-6
                            mr-1
                            bg-controls-light-gray
                            rounded-full
                            flex
                            items-center
                            justify-center
                            cursor-pointer
                            hover:bg-green
                            transition
                        "
                        >
                            <FaInstagram size={15} color={'#ffffff'} />
                        </div>
                        <div
                            className="
                            w-6
                            h-6
                            bg-controls-light-gray
                            rounded-full
                            flex
                            items-center
                            justify-center
                            cursor-pointer
                            hover:bg-green
                            transition
                        "
                        >
                            <FaFacebookF size={16} color={'#ffffff'} />
                        </div>
                    </div>
                    <LocaleSwitcher currentLocale={lang} />
                </div>
            </div>
        </>
    );
}
