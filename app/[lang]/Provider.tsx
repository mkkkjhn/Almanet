'use client';

import React, { ReactNode, useState } from 'react';
import { Context } from '@/context/Context';

interface MyProviderProps {
    children: ReactNode;
}

const Provider: React.FC<MyProviderProps> = ({ children }) => {
    const [currentSlide, setCurrentSlide] = useState(1);
    const [animationHandler, setAnimationHandler] = useState(true);

    return (
        <Context.Provider value={{
            currentSlide,
            setCurrentSlide,
            animationHandler,
            setAnimationHandler
        }}>
            {children}
        </Context.Provider>
    );
};

export default Provider;
