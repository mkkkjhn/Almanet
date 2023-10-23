import Negotiator from 'negotiator';
import type { NextRequest } from 'next/server';
import { NextResponse } from 'next/server';

import { match as matchLocale } from '@formatjs/intl-localematcher';
import { i18n } from '@/i18n.config';

function getLocale(request: NextRequest): string | undefined {
    const negotiatorHeaders: Record<string, string> = {};
    // eslint-disable-next-line no-return-assign
    request.headers.forEach((value, key) => (negotiatorHeaders[key] = value));

    // @ts-ignore locales are readonly
    const { locales } = i18n;
    const languages = new Negotiator({ headers: negotiatorHeaders }).languages();

    return matchLocale(languages, locales, i18n.defaultLocale);
}

// eslint-disable-next-line consistent-return
export function middleware(request: NextRequest) {
    const { pathname } = request.nextUrl;
    const pathnameIsMissingLocale = i18n.locales.every(
        locale => !pathname.startsWith(`/${locale}/`) && pathname !== `/${locale}`
    );

    // Redirect if there is no locale
    if (pathnameIsMissingLocale) {
        const locale = getLocale(request);
        return NextResponse.redirect(
            new URL(
                `/${locale}${pathname.startsWith('/') ? '' : '/'}${pathname}`,
                request.url
            )
        );
    }
}

export const config = {
    // Matcher ignoring `/_next/` and `/api/`
    matcher: ['/((?!api|_next/static|_next/image|favicon.ico).*)']
};
