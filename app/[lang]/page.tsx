import { Controls } from '@/components/Controls';
import { Footer } from '@/components/Footer';
import { Hero } from '@/components/Hero';
import { Locale } from '@/i18n.config';
import { getDictionary } from '@/lib/dictionary';

export default async function Home({
    params: { lang }
} : {
    params: { lang: Locale }
}) {
    const { page } = await getDictionary(lang);

    return (
        <div className="
            flex
            flex-col
            h-screen
            w-screen
        "
        >
            <Hero page={ page } />
            <Controls />
            <Footer page={ page } />
        </div>
    );
}
