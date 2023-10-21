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
                    h-full
                    flex
                    justify-between
                "
            >
                <div
                    className="
                        h-2/3
                        w-[40%]
                        my-auto
                        flex
                        flex-col
                    "
                >
                    <div
                        className="
                            h-full
                        "
                    >
                        <h1
                            className="
                            text-[56px]
                            font-extrabold
                            leading-[64px]
                            mb-4
                        "
                        >
                            {titles[currentSlide - 1]}
                        </h1>
                        <div
                            className="
                            h-full
                        "
                        >
                            <p
                                className="
                                text-sm
                                font-normal
                                mb-14
                            "
                            >
                                {descriptions[currentSlide -1]}
                            </p>
                            <button
                                className="
                                w-[280px]
                                h-14
                                bg-green
                                text-white
                                flex
                                justify-center
                                items-center
                                rounded-lg
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
                            sm:hidden
                        "
                        />
                        <div className="

                    "
                        />
                    </div>
                </div>
                <div
                    className="
                        h-2/3
                        w-[60%]
                        my-auto
                    "
                >
                    <div
                        className="
                            w-auto
                            h-auto
                            max-h-full
                            relative
                        "
                    >
                        <Image
                            src={slidesDesc[currentSlide - 1]}
                            alt="Desctop version"
                            className="
                                h-full
                                w-full
                                max-h-full
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
