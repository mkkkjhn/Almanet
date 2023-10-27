'use client';

import { useContext } from 'react';
import { AfterAuthFacebook } from '@/components/sign-up/AfterAuthFacebook';
import AfterAuthGoogle from '@/components/sign-up/AfterAuthGoogle';
import { Context } from '@/context/Context';
import type { dictionaryPageType } from '@/types';

export default function SecondStepWrap({ page }: dictionaryPageType) {
    const context = useContext(Context);
    if (!context) {
        throw new Error('Context undefined');
    }
    const { signInMethod } = context;

    return (
        <>
            {signInMethod === 'google.com' ? (
                <AfterAuthGoogle page={page} />
            ) : (
                <AfterAuthFacebook page={page} />
            )}
        </>
    );
}
