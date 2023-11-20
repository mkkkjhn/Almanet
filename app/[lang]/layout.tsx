import type { Metadata } from 'next';
// eslint-disable-next-line camelcase
import { Open_Sans } from 'next/font/google';
import './globals.scss';
import GoogleAnalytics from '@/app/[lang]/GoogleAnalytics';
import Provider from '@/app/[lang]/Provider';
import Footer from '@/components/common/Footer';
import Header from '@/components/common/Header';
import { Locale, i18n } from '@/i18n.config';

const font = Open_Sans({ subsets: ['latin'] });

export const metadata: Metadata = {
    title: 'Almanet',
    description: 'Generated by create next app'
};

export async function generateStaticParams() {
    return i18n.locales.map((locale) => ({ lang: locale }));
}

export default function RootLayout({
    children,
    params
}: {
    children: React.ReactNode,
    params: { lang: Locale }
}) {
    return (
        <html lang={params.lang} className={font.className}>
            <body
                className="
                        flex
                        flex-col
                        min-h-full
                        xl:h-auto
                    "
            >
                <Provider>
                    <header
                        className="
                            w-screen
                            h-[56px]
                            relative
                        "
                    >
                        <Header />
                    </header>
                    <div
                        className="
                            flex
                            flex-col
                            justify-end
                            items-center
                            h-[calc(100%-56px)]
                        "
                    >
                        <main
                            className="
                                xl:h-[calc(100vh-92px)]
                                sm:h-[calc(100%-76px)]
                                flex
                                flex-col
                                justify-center
                            "
                        >
                            {children}
                        </main>
                        <footer
                            className="
                            w-screen
                            sm:h-[36px]
                            relative
                        "
                        >
                            <Footer params={params} />
                        </footer>
                    </div>
                </Provider>
            </body>
            <GoogleAnalytics />
        </html>
    );
}
