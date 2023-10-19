'use client'
import {useContext} from "react";
import { Context } from "@/context/Context";
import { FiArrowLeft } from "react-icons/fi";
import { FiArrowRight } from "react-icons/fi";

export const Controls = () => {
    const context = useContext(Context)
    if (!context) {
        throw new Error('Context undefined')
    }
    const { currentSlide, setCurrentSlide } = context;

    return (
        <>
            <div
                className="
                    flex
                    justify-between
                    px-20
                    mt-2
                    mb-4
                "
            >
                <div
                    className="
                        flex
                        items-center
                        font-semibold
                        text-xl
                        text-controls-dark-gray
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
                            1
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
                            4
                        </span>
                    </div>
                </div>
                <div
                    className="
                        flex
                        items-center
                    "
                >
                    <div
                        className="mx-0.5"
                    >
                        {currentSlide === 1 ? (
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
                    <div
                        className="mx-0.5"
                    >
                        {currentSlide === 2 ? (
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
                    <div
                        className="mx-0.5"
                    >
                        {currentSlide === 3 ? (
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
                    <div
                        className="mx-0.5"
                    >
                        {currentSlide === 4 ? (
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
                </div>
                <div
                    className="
                        flex
                        text-controls-gray
                    "
                >
                    <div
                        className="
                            h-10
                            w-10
                            flex
                            justify-center
                            items-center
                        "
                    >
                        <FiArrowLeft size={24} />
                    </div>
                    <div
                        className="
                            h-10
                            w-10
                            flex
                            justify-center
                            items-center
                        "
                    >
                        <FiArrowRight size={24} />
                    </div>
                </div>
            </div>
        </>
    );
};
