'use client';

import { AppProgressBar as ProgressBar } from 'next-nprogress-bar';
import React, { ReactNode, useState } from 'react';
import { Context } from '@/context/Context';

interface MyProviderProps {
    children: ReactNode;
}

const Provider: React.FC<MyProviderProps> = ({ children }) => {
    const [currentSlide, setCurrentSlide] = useState(1);
    const [isLoading, setIsLoading] = useState(false);
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
            <ProgressBar
                height="4px"
                color="#00AD64"
                options={{ showSpinner: false }}
                shallowRouting
            />
            {
                children
            }
        </Context.Provider>
    );
};

export default Provider;
