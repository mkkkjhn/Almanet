'use client';

import Image from 'next/image';
import Link from 'next/link';
import { FaInstagram, FaFacebookF } from 'react-icons/fa6';
import Logo from '@/public/images/logo.png';

export default function Header() {
    const fbLink = 'https://www.facebook.com/almanet.sc/';
    const instagramLink = 'https://instagram.com/almanet.sc?igshid=MzMyNGUyNmU2YQ==';
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
                <div className="flex items-center w-max">
                    <Link
                        target="_blank"
                        href={instagramLink}
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
                        { <FaInstagram size={15} color={'#ffffff'}/> }
                    </Link>
                    <Link
                        target="_blank"
                        href={fbLink}
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
                        { <FaFacebookF size={16} color={'#ffffff'}/> }
                    </Link>
                    {/* <div */}
                    {/*    className=" */}
                    {/*        flex */}
                    {/*        sm:mr-8 */}
                    {/*        mr-4 */}
                    {/*        justify-between */}
                    {/*    " */}
                    {/* > */}
                    {/* </div> */}
                    {/* <LocaleSwitcher currentLocale={lang} /> */}
                </div>
            </div>
        </>
    );
}
