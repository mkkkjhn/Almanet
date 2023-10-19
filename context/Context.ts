import { createContext } from 'react';

interface ContextType {
    slides: number[],
    setSlides: (slides: number[]) => void,
    currentSlide: number,
    setCurrentSlide: (currentSlide: number) => void,
}

export const Context = createContext<ContextType | undefined>(undefined);
