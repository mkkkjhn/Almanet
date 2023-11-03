import type { Metadata } from 'next';
// eslint-disable-next-line camelcase
import { Open_Sans } from 'next/font/google';
import './globals.scss';
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
                        h-full
                        xl:h-screen
                    "
            >
                <Provider>
                    <header>
                        <Header params={params} />
                    </header>
                    <main
                        className="
                                h-full
                                xl:h-full
                            "
                    >
                        {children}
                    </main>
                    <footer>
                        <Footer params={params} />
                    </footer>
                </Provider>
            </body>
        </html>
    );
}
