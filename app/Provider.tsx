'use client'
import React, { ReactNode, useState } from 'react';
import { Context } from '@/context/Context';

interface MyProviderProps {
    children: ReactNode;
}

const Provider: React.FC<MyProviderProps> = ({ children }) => {
    const [slides, setSlides] = useState<number[]>([])
    const [currentSlide, setCurrentSlide] = useState(1)

    return (
        <Context.Provider value={{ slides, setSlides, currentSlide, setCurrentSlide }}>
            {children}
        </Context.Provider>
    );
};

export default Provider;
