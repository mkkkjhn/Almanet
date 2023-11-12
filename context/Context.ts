import { createContext } from 'react';

interface ContextType {
    currentSlide: number,
    setCurrentSlide: (currentSlide: number) => void,
    isLoading: boolean,
    setIsLoading: (animationHandler: boolean) => void,
    signInMethod: string,
    setSignInMethod: (signInMethod: string) => void
    swiper: any,
    setSwiper: (swiper: any) => void
    emailForSignIn: string,
    setEmailForSignIn: (emailForSignIn: string) => void
}
const defaultState = {
    currentSlide: 1,
    setCurrentSlide: () => null,
    isLoading: false,
    setIsLoading: () => null,
    signInMethod: 'google.com',
    setSignInMethod: () => null,
    swiper: null,
    setSwiper: () => null,
    emailForSignIn: '',
    setEmailForSignIn: () => null
};
export const Context = createContext<ContextType>(defaultState);
