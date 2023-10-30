import { Controls } from '@/components/Controls';
import { Hero } from '@/components/Hero';
import { Locale } from '@/i18n.config';
import { getDictionary } from '@/services/lib/dictionary';

export default async function Home({
    params: { lang }
} : {
    params: { lang: Locale }
}) {
    const { page } = await getDictionary(lang);

    return (
        <div
            style={{ height: 'calc(100vh - 92px)' }}
            className="
                flex
                flex-col
                w-screen
                min-h-max
                sm:justify-between
            "
        >
            <Hero page={ page } />
            <Controls />
        </div>
    );
}
