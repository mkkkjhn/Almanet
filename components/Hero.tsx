'use client'
import { FiArrowRight } from "react-icons/fi";
import Slide1Desc from "@/public/images/slide-1-desc.jpg"
import Slide1Mob from "@/public/images/slide-1-mob.jpg"
import Image from "next/image";

export const Hero = () => {

    return (
        <>
            <div className='
                h-max
                w-full
                my-auto
                flex
                relative
            '
            >
                <div className='
                    flex
                    flex-col
                    w-[436px]
                    mx-20
                    my-28
                    relative
                '
                >
                    <h1 className='
                        mb-4
                    '
                    >
                        Seychelles` first social platform
                    </h1>
                    <p className='
                        text-sm
                        font-normal
                        leading-7
                        mb-14
                    '
                    >
                        Description description description description description description description description
                    </p>
                    <button className='
                        w-[280px]
                        h-14
                        rounded-lg
                        bg-green
                        text-white
                        flex
                        justify-center
                        items-center
                    '
                    >
                        Try first
                        <FiArrowRight size={24} className='ml-1' />
                    </button>
                    <div className='
                        absolute
                        w-[360px]
                        h-[360px]
                        transform
                        rotate-[64.09deg]
                        rounded-[95px]
                        bg-yellow
                        z-[-1]
                        top-[-126px]
                        left-[-140px]
                    '
                    />
                </div>
                <Image
                    src={Slide1Desc}
                    alt="Desctop version"
                    className="
                        absolute
                        h-[600px]
                        w-auto
                        right-0
                        -bottom-2
                        rounded-l-2xl
                        border-slide-gray-light
                        border-y-4
                        border-l-4
                    "
                />
                <Image
                    src={Slide1Mob}
                    alt="Mobile version"
                    className="
                        absolute
                        h-[320px]
                        w-auto
                        -bottom-5
                        right-[716px]
                        border-[7px]
                        border-slide-gray
                        rounded-[14px]
                    "
                />
            </div>
        </>
    );
};
