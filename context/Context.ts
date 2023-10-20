import { createContext } from 'react';

interface ContextType {
    currentSlide: number,
    setCurrentSlide: (currentSlide: number) => void,
}

export const Context = createContext<ContextType | undefined>(undefined);
