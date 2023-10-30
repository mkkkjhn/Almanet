'use client';

import React, { ReactNode, useState } from 'react';
import { Context } from '@/context/Context';

interface MyProviderProps {
    children: ReactNode;
}

const Provider: React.FC<MyProviderProps> = ({ children }) => {
    const [currentSlide, setCurrentSlide] = useState(1);
    const [isLoading, setIsLoading] = useState(true);
    const [signInMethod, setSignInMethod] = useState('');

    return (
        <Context.Provider value={{
            currentSlide,
            setCurrentSlide,
            isLoading,
            setIsLoading,
            signInMethod,
            setSignInMethod
        }}>
            {children}
        </Context.Provider>
    );
};

export default Provider;
