import { createContext } from 'react';

interface ContextType {
    currentSlide: number,
    setCurrentSlide: (currentSlide: number) => void,
    animationHandler: boolean,
    setAnimationHandler: (animationHandler: boolean) => void,
    signInMethod: string,
    setSignInMethod: (signInMethod: string) => void
}
const defaultState = {
    currentSlide: 1,
    setCurrentSlide: () => null,
    animationHandler: false,
    setAnimationHandler: () => null,
    signInMethod: 'google.com',
    setSignInMethod: () => null
};
export const Context = createContext<ContextType>(defaultState);
