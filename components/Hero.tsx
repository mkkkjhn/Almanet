'use client';

import Image from 'next/image';
import { useRouter } from 'next/navigation';
import {
    useContext, useRef
} from 'react';
import { FiArrowLeft, FiArrowRight } from 'react-icons/fi';
import { useSwipeable } from 'react-swipeable';
import { SwitchTransition, CSSTransition } from 'react-transition-group';
import { Button } from '@/components/ui/Button';
import { Context } from '@/context/Context';
import { useControlSlides } from '@/hooks/useControlSlides';
import Slide1Desc from '@/public/images/slide-1-desc.jpg';
import Slide1Mob from '@/public/images/slide-1-mob.jpg';
import Slide2Desc from '@/public/images/slide-2-desc.jpg';
import Slide2Mob from '@/public/images/slide-2-mob.jpg';
import Slide3Desc from '@/public/images/slide-3-desc.jpg';
import Slide3Mob from '@/public/images/slide-3-mob.jpg';
import Slide4Desc from '@/public/images/slide-4-desc.jpg';
import Slide4Mob from '@/public/images/slide-4-mob.jpg';
import Slide5Desc from '@/public/images/slide-5-desc.jpg';
import Slide5Mob from '@/public/images/slide-5-mob.jpg';
import type { dictionaryPageType } from '@/types';

export const Hero = ({ page }: dictionaryPageType) => {
    const slidesDesc = [Slide1Desc, Slide2Desc, Slide3Desc, Slide4Desc, Slide5Desc];
    const slidesMob = [Slide1Mob, Slide2Mob, Slide3Mob, Slide4Mob, Slide5Mob];
    const { incrementCurrentSlide, decrementCurrentSlide } = useControlSlides();
    const titles = [
        page.home.title1,
        page.home.title2,
        page.home.title3,
        page.home.title4,
        page.home.title5
    ];
    const descriptions = [
        page.home.description1,
        page.home.description2,
        page.home.description3,
        page.home.description4,
        page.home.description5
    ];

    const router = useRouter();

    const context = useContext(Context);
    const { currentSlide, isLoading } = context;

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

    const firstDescSlideRef = useRef<HTMLDivElement>(null);
    const secondDescSlideRef = useRef<HTMLDivElement>(null);
    const thirdDescSlideRef = useRef<HTMLDivElement>(null);
    const forthDescSlideRef = useRef<HTMLDivElement>(null);
    const fifthDescSlideRef = useRef<HTMLDivElement>(null);
    const descRefs = [firstDescSlideRef, secondDescSlideRef, thirdDescSlideRef, forthDescSlideRef, fifthDescSlideRef];

    const firstMobSlideRef = useRef<HTMLDivElement>(null);
    const secondMobSlideRef = useRef<HTMLDivElement>(null);
    const thirdMobSlideRef = useRef<HTMLDivElement>(null);
    const forthMobSlideRef = useRef<HTMLDivElement>(null);
    const fifthMobSlideRef = useRef<HTMLDivElement>(null);
    const mobileRefs = [firstMobSlideRef, secondMobSlideRef, thirdMobSlideRef, forthMobSlideRef, fifthMobSlideRef];

    const firstTitleRef = useRef<HTMLDivElement>(null);
    const secondTitleRef = useRef<HTMLDivElement>(null);
    const thirdTitleRef = useRef<HTMLDivElement>(null);
    const forthTitleRef = useRef<HTMLDivElement>(null);
    const fifthTitleRef = useRef<HTMLDivElement>(null);
    const textRefs = [firstTitleRef, secondTitleRef, thirdTitleRef, forthTitleRef, fifthTitleRef];

    return (
        <>
            <div
                style={{ height: 'calc(100% - 32px)' }}
                className="
                    w-full
                    h-full
                    flex
                    items-center
                    xl:flex-row
                    flex-col
                    min-h-max
                    sm:justify-center
                    xl:justify-normal
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
                        h-full
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
                            justify-between
                        "
                    >
                        <SwitchTransition>
                            <CSSTransition
                                key={`slide_${currentSlide}`}
                                nodeRef={textRefs[currentSlide - 1]}
                                addEndListener={(done) => {
                                    textRefs[currentSlide - 1].current?.addEventListener('transitionend', done, false);
                                }}
                                classNames='text'
                            >
                                <div ref={textRefs[currentSlide - 1]}>
                                    <div
                                        className="
                                            xl:text-[56px]
                                            xl:leading-[64px]
                                            text-[40px]
                                            leading-[48px]
                                            font-extrabold
                                            sm:min-h-0
                                            min-w-[320px]
                                            min-h-[144px]
                                            sm:mb-4
                                            mb-2
                                            mt-2
                                            sm:mt-0
                                            flex
                                            items-center
                                            justify-center
                                            xl:justify-normal
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
                                        {descriptions[currentSlide - 1]}
                                    </p>
                                </div>
                            </CSSTransition>
                        </SwitchTransition>
                        <div
                            className="
                                h-max
                                w-full
                            "
                        >
                            <Button
                                state={isLoading}
                                type="button"
                                label={'Try first'}
                                onClick={() => router.push('/sign-up/first-step')}
                                color={'#00AD64'}
                                appendIcon={<FiArrowRight size={24} style={{ marginLeft: '4px' }} />}
                            />
                        </div>
                        <div
                            style={{ height: 'calc(100% - 298px)' }}
                            className="
                                flex
                                items-center
                                justify-between
                                w-full
                                min-h-[363px]
                                sm:min-h-0
                            "
                        >
                            <div
                                className="
                                    h-10
                                    w-10
                                    flex
                                    justify-center
                                    items-center
                                    cursor-pointer
                                    hover:opacity-80
                                    transition
                                    sm:hidden
                                "
                            >
                                <FiArrowLeft onClick={decrementCurrentSlide} size={24} />
                            </div>
                            <SwitchTransition mode="out-in">
                                <CSSTransition
                                    key={`adapt_mob_${currentSlide}`}
                                    nodeRef={mobileRefs[currentSlide - 1]}
                                    addEndListener={(done) => {
                                        mobileRefs[currentSlide - 1].current?.addEventListener('transitionend', done, false);
                                    }}
                                    classNames="fade"
                                >
                                    <div ref={mobileRefs[currentSlide - 1]} className="h-full">
                                        <Image
                                            {...handlerSwipe}
                                            src={slidesMob[currentSlide - 1]}
                                            alt="Mobile version"
                                            className="
                                                sm:hidden
                                                h-full
                                                w-auto
                                                border-[7px]
                                                border-slide-gray
                                                rounded-[14px]
                                                min-h-[363px]
                                            "
                                        />
                                    </div>
                                </CSSTransition>
                            </SwitchTransition>
                            <div
                                className="
                                    h-10
                                    w-10
                                    flex
                                    justify-center
                                    items-center
                                    cursor-pointer
                                    hover:opacity-80
                                    transition
                                    sm:hidden
                                "
                            >
                                <FiArrowRight onClick={incrementCurrentSlide} size={24} />
                            </div>
                        </div>
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
                            <div
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
                                    overflow-hidden
                                "
                            >
                                <SwitchTransition mode="out-in">
                                    <CSSTransition
                                        key={`slide_desc_${currentSlide}`}
                                        nodeRef={descRefs[currentSlide - 1]}
                                        addEndListener={(done) => {
                                            descRefs[currentSlide - 1].current?.addEventListener('transitionend', done, false);
                                        }}
                                        classNames="fade"
                                    >
                                        <div
                                            ref={descRefs[currentSlide - 1]}
                                            className="
                                            w-full
                                            h-full
                                        "
                                        >
                                            <Image
                                                src={slidesDesc[currentSlide - 1]}
                                                alt="Desctop version"
                                                className="
                                                w-full
                                                h-full
                                            "
                                            />
                                        </div>
                                    </CSSTransition>
                                </SwitchTransition>
                            </div>
                            <div
                                className="
                                    absolute
                                    h-[48%]
                                    w-auto
                                    -bottom-4
                                    -left-12
                                    border-[7px]
                                    border-slide-gray
                                    rounded-[14px]
                                    overflow-hidden
                                    bg-bg-main
                                "
                            >
                                <SwitchTransition mode="out-in">
                                    <CSSTransition
                                        key={`slide_mob_${currentSlide}`}
                                        nodeRef={mobileRefs[currentSlide - 1]}
                                        addEndListener={(done) => {
                                            mobileRefs[currentSlide - 1].current?.addEventListener('transitionend', done, false);
                                        }}
                                        classNames="fade"
                                    >
                                        <div
                                            ref={mobileRefs[currentSlide - 1]}
                                            className="
                                            h-full
                                            w-full
                                        "
                                        >
                                            <Image
                                                src={slidesMob[currentSlide - 1]}
                                                alt="Mobile version"
                                                className="
                                                w-full
                                                h-full
                                            "
                                            />
                                        </div>
                                    </CSSTransition>
                                </SwitchTransition>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};
