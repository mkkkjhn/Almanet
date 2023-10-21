'use client';
import {useContext} from "react";
import { FiArrowLeft } from "react-icons/fi";
import { FiArrowRight } from "react-icons/fi";
// eslint-disable-next-line import/extensions
import { Context } from "@/context/Context";

export const Controls = () => {
    const context = useContext(Context);
    if (!context) {
        throw new Error('Context undefined');
    }
    const { currentSlide, setCurrentSlide } = context;
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
                        1,2,3,4,5
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
