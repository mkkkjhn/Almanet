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
    // const router = useRouter();

    return (
        <div
            className="
                flex
                flex-col
                w-screen
                min-h-max
                sm:justify-between
                h-full
            "
        >
            <div
                className="
                    h-[calc(100%-32px)]
                    flex
                    justify-center
                    items-center
                "
            >
                <Hero page={ page } />
            </div>
            <Controls />
        </div>
    );
}
