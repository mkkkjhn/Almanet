'use client';
import Image from "next/image";
import { useContext, useEffect, useState } from "react";
import { FiArrowRight } from "react-icons/fi";
import { useSwipeable } from 'react-swipeable';
import { Context } from "@/context/Context";
import Slide1Desc from "@/public/images/slide-1-desc.jpg";
import Slide1Mob from "@/public/images/slide-1-mob.jpg";
import Slide2Desc from "@/public/images/slide-2-desc.jpg";
import Slide2Mob from "@/public/images/slide-2-mob.jpg";
import Slide3Desc from "@/public/images/slide-3-desc.jpg";
import Slide3Mob from "@/public/images/slide-3-mob.jpg";
import Slide4Desc from "@/public/images/slide-4-desc.jpg";
import Slide4Mob from "@/public/images/slide-4-mob.jpg";
import Slide5Desc from "@/public/images/slide-5-desc.jpg";
import Slide5Mob from "@/public/images/slide-5-mob.jpg";

export const Hero = () => {
    const slidesDesc = [Slide1Desc, Slide2Desc, Slide3Desc, Slide4Desc, Slide5Desc];
    const slidesMob = [Slide1Mob, Slide2Mob, Slide3Mob, Slide4Mob, Slide5Mob];
    const titles = [
        'Seychelles` first social platform',
        'CreoleTrade Bulletin Board',
        'Almanet News Feed',
        'Event reviews and photo reports',
        'Partners'
    ];
    const descriptions = [
        'Track events, socialize and use the message board for your life and business.',
        'Your place to buy and sell: whether it\'s an old car or renting an apartment. Easier and faster!',
        'Discover a world of local news, talk about events in your neighborhood and share service reviews.',
        'Capture the beauty of Seychelles and share spectacular moments with our community.',
        'Order a review or report from Almanet, advertise and find your audience on our platform.'
    ];
    const [heroContainerHeight, setHeroContainerHeight] = useState({
        height: ''
    });
    const [textContainerHeight, setTextContainerHeight] = useState({
        height: 'calc(100% - 339px)'
    });
    useEffect(() => {
        const handleResize = () => {
            const isLgAndUp = window.innerWidth > 1024;
            const isXxs = window.innerWidth < 400 && window.innerHeight < 800
            setHeroContainerHeight({height: isLgAndUp ? '' : 'calc(100% - 124px)'});
            setTextContainerHeight({height: isLgAndUp ? '' : 'calc(100% - 291px)'});
            if (isXxs) setHeroContainerHeight({height: 'max-content'})

        };

        // Добавьте обработчик события при монтировании компонента
        window.addEventListener('resize', handleResize);

        // Уберите обработчик события при размонтировании компонента
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    const context = useContext(Context);
    if (!context) {
        throw new Error('Context undefined');
    }
    const { currentSlide, setCurrentSlide } = context;

    const handlerSwipe = useSwipeable({
        onSwiped: (eventData) => {
            const { dir } = eventData;
            if (dir === 'Left') {
                incrementCurrentSlide();
            } else {
                decrementCurrentSlide();
            }

        }
    });

    const incrementCurrentSlide = () => {
        if (currentSlide !== 5) {
            setCurrentSlide(currentSlide + 1);
        } else {
            setCurrentSlide(1);
        }
    };
    const decrementCurrentSlide = () => {
        if (currentSlide !== 1) {
            setCurrentSlide(currentSlide - 1);
        } else {
            setCurrentSlide(5);
        }
    };

    return (
        <>
            <div
                style={heroContainerHeight}
                className="
                    w-full
                    h-full
                    flex
                    items-center
                    xl:flex-row
                    flex-col
                "
            >
                <div
                    className="
                        sm:w-[40%]
                        mx-4
                        sm:mx-0
                        xl:px-20
                        items-center
                        xl:mb-0
                        sm:mb-8
                        h-max
                        sm:h-auto
                    "
                >
                    <div
                        className="
                            flex
                            flex-col
                            h-full
                            xl:text-start
                            text-center
                            xl:items-start
                            items-center
                            relative
                            xl:min-h-[360px]
                        "
                    >
                        <div
                            className="
                                xl:text-[56px]
                                xl:leading-[64px]
                                sm:min-h-0
                                min-w-[320px]
                                min-h-[144px]
                                text-[40px]
                                leading-[48px]
                                font-extrabold
                                sm:mb-4
                                mb-2
                                mt-2
                                sm:mt-0
                                flex
                                items-center
                                justify-center
                            "
                        >
                            <h1>
                                {titles[currentSlide - 1]}
                            </h1>
                        </div>
                        <p
                            className="
                                text-sm
                                font-normal
                                sm:mb-14
                                mb-4
                            "
                        >
                            {descriptions[currentSlide -1]}
                        </p>
                        <button
                            className="
                                xl:w-[280px]
                                w-full
                                h-14
                                bg-green
                                text-white
                                flex
                                justify-center
                                items-center
                                rounded-lg
                                sm:mb-0
                                mb-6
                            "
                        >
                            Try first
                            <FiArrowRight size={24} className='ml-1' />
                        </button>
                        <Image
                            {...handlerSwipe}
                            src={slidesMob[currentSlide -1]}
                            alt="Mobile version"
                            style={textContainerHeight}
                            className="
                                sm:hidden
                                w-auto
                                border-[7px]
                                border-slide-gray
                                rounded-[14px]
                                min-h-[363px]
                            "
                        />
                        <div
                            className="
                                absolute
                                w-[360px]
                                h-[360px]
                                sm:w-[400px]
                                sm:h-[400px]
                                transform
                                rotate-[64.09deg]
                                rounded-[95px]
                                bg-yellow
                                z-[-1]
                                sm:top-[-140px]
                                top-[14px]
                                left-[-140px]
                                sm:left-[-182px]
                                sm:hidden
                                xl:block
                            "
                        />
                    </div>
                </div>
                <div
                    className="
                        w-[60%]
                        xl:pl-12
                    "
                >
                    <div
                        className="
                            flex
                            justify-end
                        "
                    >
                        <div
                            className="
                            relative
                            w-full
                            max-w-[960px]
                            h-auto
                            sm:block
                            hidden
                        "
                        >
                            <Image
                                src={slidesDesc[currentSlide - 1]}
                                alt="Desctop version"
                                className="
                                w-full
                                h-full
                                xl:rounded-l-2xl
                                xl:rounded
                                rounded-2xl
                                border-slide-gray-light
                                xl:border-y-4
                                xl:border-l-4
                                xl:border-0
                                border-4
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
                                -left-12
                                border-[7px]
                                border-slide-gray
                                rounded-[14px]
                            "
                            />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};
