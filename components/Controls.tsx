'use client';

import { useContext } from 'react';
import { FiArrowLeft, FiArrowRight } from 'react-icons/fi';

import { Context } from '@/context/Context';
import { useControlSlides } from '@/hooks/useControlSlides';

export const Controls = () => {
    const context = useContext(Context);
    const { currentSlide, swiper } = context;
    const { incrementCurrentSlide, decrementCurrentSlide } = useControlSlides();

    return (
        <>
            <div
                className="
                    flex
                    sm:justify-between
                    justify-center
                    px-20
                    mt-2
                    mb-4
                    h-max
                "
            >
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
                            {currentSlide}
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
                            5
                        </span>
                    </div>
                </div>
                <div
                    className="
                        flex
                        items-center
                    "
                >
                    {[
                        1, 2, 3, 4, 5
                    ].map((num) => (
                        <div
                            className="mx-0.5"
                            key={num}
                        >
                            {currentSlide === num ? (
                                <div
                                    className="
                                bg-controls-gray
                                w-5
                                h-2
                                rounded-[40px]
                            "
                                />
                            ) : (
                                <div
                                    className="
                                w-2
                                h-2
                                rounded-full
                                bg-controls-light-gray
                            "
                                />
                            )}
                        </div>
                    ))}
                </div>
                <div
                    className="
                        sm:flex
                        text-controls-gray
                        hidden
                    "
                >
                    <div
                        style={{ opacity: currentSlide === 1 ? '.3' : '', cursor: currentSlide === 1 ? 'unset' : 'pointer' }}
                        onClick={() => swiper.autoplay.pause()}
                        aria-disabled={currentSlide === 1}
                        className="
                            h-10
                            w-10
                            flex
                            justify-center
                            items-center
                            cursor-pointer
                            hover:opacity-80
                            transition
                        "
                    >
                        <FiArrowLeft onClick={decrementCurrentSlide} size={24} />
                    </div>
                    <div
                        style={{ opacity: currentSlide === 5 ? '.3' : '', cursor: currentSlide === 5 ? 'unset' : 'pointer' }}
                        onClick={() => swiper.autoplay.pause()}
                        aria-disabled={currentSlide === 5}
                        className="
                            h-10
                            w-10
                            flex
                            justify-center
                            items-center
                            cursor-pointer
                            hover:opacity-80
                            transition
                        "
                    >
                        <FiArrowRight onClick={incrementCurrentSlide} size={24} />
                    </div>
                </div>
            </div>
        </>
    );
};
