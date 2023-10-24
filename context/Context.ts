import { createContext } from 'react';

interface ContextType {
    currentSlide: number,
    setCurrentSlide: (currentSlide: number) => void,
    animationHandler: boolean,
    setAnimationHandler: (animationHandler: boolean) => void,
}

export const Context = createContext<ContextType | undefined>(undefined);
