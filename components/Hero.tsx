'use client'
import { FiArrowRight } from "react-icons/fi";
import Slide1Desc from "@/public/images/slide-1-desc.jpg"
import Slide2Desc from "@/public/images/slide-2-desc.jpg"
import Slide3Desc from "@/public/images/slide-3-desc.jpg"
import Slide4Desc from "@/public/images/slide-4-desc.jpg"
import Slide5Desc from "@/public/images/slide-5-desc.jpg"
import Slide1Mob from "@/public/images/slide-1-mob.jpg"
import Slide2Mob from "@/public/images/slide-2-mob.jpg"
import Slide3Mob from "@/public/images/slide-3-mob.jpg"
import Slide4Mob from "@/public/images/slide-4-mob.jpg"
import Slide5Mob from "@/public/images/slide-5-mob.jpg"
import Image from "next/image";
import { useContext, useEffect, useState } from "react";
import { Context } from "@/context/Context";
import { useSwipeable } from 'react-swipeable';

export const Hero = () => {
    const slidesDesc = [Slide1Desc, Slide2Desc, Slide3Desc, Slide4Desc, Slide5Desc]
    const slidesMob = [Slide1Mob, Slide2Mob, Slide3Mob, Slide4Mob, Slide5Mob]
    const titles = [
        'Seychelles\` first social platform',
        'CreoleTrade Bulletin Board',
        'Almanet News Feed',
        'Event reviews and photo reports',
        'Partners'
    ]
    const descriptions = [
        'Track events, socialize and use the message board for your life and business.',
        'Your place to buy and sell: whether it\'s an old car or renting an apartment. Easier and faster!',
        'Discover a world of local news, talk about events in your neighborhood and share service reviews.',
        'Capture the beauty of Seychelles and share spectacular moments with our community.',
        'Order a review or report from Almanet, advertise and find your audience on our platform.'
    ]
    const [heroContainerHeight, setHeroContainerHeight] = useState({
        height: ''
    });
    useEffect(() => {
        const handleResize = () => {
            const isMdAndUp = window.innerWidth > 1024;
            setHeroContainerHeight({height: isMdAndUp ? '' : 'calc(100% - 28px)'});
        };

        // Добавьте обработчик события при монтировании компонента
        window.addEventListener('resize', handleResize);

        // Уберите обработчик события при размонтировании компонента
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    const context = useContext(Context)
    if (!context) {
        throw new Error('Context undefined')
    }
    const { currentSlide, setCurrentSlide } = context;

    const handlerSwipe = useSwipeable({
        onSwiped: (eventData) => {
            const { dir } = eventData
            if (dir === 'Left') {
                incrementCurrentSlide()
            } else {
                decrementCurrentSlide()
            }

        }
    });

    const incrementCurrentSlide = () => {
        if (currentSlide !== 5) {
            setCurrentSlide(currentSlide + 1)
        } else {
            setCurrentSlide(1)
        }
    }
    const decrementCurrentSlide = () => {
        if (currentSlide !== 1) {
            setCurrentSlide(currentSlide - 1)
        } else {
            setCurrentSlide(5)
        }
    }

    return (
        <>
            <div
                style={heroContainerHeight}
                className="
                    w-full
                    lg:my-auto
                    sm:mt-72
                    flex
                    relative
                    flex-col
                "
            >
                <div className="
                    flex
                    lg:flex-col
                    sm:flex-row
                    flex-col
                    xl:w-[436px]
                    sm:w-[320px]
                    lg:mx-10
                    xl:mx-20
                    mx-4
                    sm:my-auto
                    mt-16
                    relative
                    h-full
                "
                >
                    <h1 className="
                        mb-4
                        sm:min-h-[192px]
                        text-center
                        sm:text-[56px]
                        text-[40px]
                        sm:leading-[64px]
                        leading-[48px]
                        font-extrabold
                        sm:text-start
                        min-h-[144px]
                        sm:mr-4
                        sm:min-w-[360px]
                    "
                    >
                        {titles[currentSlide - 1]}
                    </h1>
                    <div
                        className="
                            h-max
                        "
                    >
                        <p className="
                        text-sm
                        font-normal
                        leading-7
                        lg:mb-14
                        mb-4
                        text-center
                        sm:text-start
                    "
                        >
                            {descriptions[currentSlide -1]}
                        </p>
                        <button className="
                        sm:w-[280px]
                        w-full
                        h-14
                        rounded-lg
                        bg-green
                        text-white
                        flex
                        justify-center
                        items-center
                        hover:opacity-80
                        transition
                        mb-8
                        sm:mb-o
                    "
                        >
                            Try first
                            <FiArrowRight size={24} className='ml-1' />
                        </button>
                    </div>
                    <Image
                        {...handlerSwipe}
                        src={slidesMob[currentSlide -1]}
                        alt="Mobile version"
                        style={{ height: 'calc(100% - 272px)' }}
                        className="
                        w-auto
                        -bottom-5
                        right-[716px]
                        border-[7px]
                        border-slide-gray
                        rounded-[14px]
                        sm:hidden
                        mx-auto
                    "
                    />
                    <div className="
                        absolute
                        w-[360px]
                        h-[360px]
                        transform
                        rotate-[64.09deg]
                        rounded-[95px]
                        bg-yellow
                        z-[-1]
                        sm:top-[-126px]
                        top-[14px]
                        left-[-140px]
                    "
                    />
                </div>
                <div
                    className="
                        absolute
                        right-0
                        top-0
                        lg:-translate-y-[15%]
                        sm:translate-y-2/3
                        h-auto
                        w-[56%]
                        hidden
                        sm:block
                        max-w-[900px]
                    "
                >
                    <div
                        className="
                            w-full
                            h-full
                            relative
                        "
                    >
                        <Image
                            src={slidesDesc[currentSlide - 1]}
                            alt="Desctop version"
                            className="
                                h-full
                                w-full
                                rounded-l-2xl
                                border-slide-gray-light
                                border-y-4
                                border-l-4
                            "
                        />
                        <Image
                            src={slidesMob[currentSlide -1]}
                            alt="Mobile version"
                            className="
                                absolute
                                h-[48%]
                                w-auto
                                -bottom-4
                                -left-16
                                border-[7px]
                                border-slide-gray
                                rounded-[14px]
                            "
                        />
                    </div>
                </div>
            </div>
        </>
    );
};
