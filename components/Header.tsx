'use client'
import Image from "next/image";
import Logo from "@/public/images/logo.png"
import Instagram from "@/public/images/instagram-logo.svg"
import Facebook from "@/public/images/facebook-logo.svg"

export const Header = () => {
    return (
        <>
            <div className='
                h-max
                w-full
                flex
                justify-between
                px-20
                py-4
                fixed
            '
            >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <Image src={Logo} alt="Logo"></Image>
                <div className='
                    flex
                '>
                    <Image
                        src={Instagram}
                        alt='instagram'
                        width='24'
                        height='24'
                        className='mr-1'
                    />
                    <Image
                        src={Facebook}
                        alt='facebook'
                        width='24'
                        height='24'
                    />
                </div>
            </div>
        </>
    );
};
