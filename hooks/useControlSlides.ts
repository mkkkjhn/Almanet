import { useContext } from 'react';
import { Context } from '@/context/Context';

export const useControlSlides = () => {
    const context = useContext(Context);
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

    return {
        incrementCurrentSlide,
        decrementCurrentSlide
    };
};
