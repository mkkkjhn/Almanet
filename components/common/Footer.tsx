import { Locale } from '@/i18n.config';
import { getDictionary } from '@/services/lib/dictionary';

export default async function Footer({
    params: { lang }
} : {
    params: { lang: Locale }
}) {
    const { page } = await getDictionary(lang);

    return (
        <>
            <div
                className="
                    flex
                    flex-col
                    sm:flex-row
                    items-center
                    mx-auto
                    my-2
                    text-sm
                    font-normal
                    text-controls-dark-gray
                    opacity-40
                    h-max
                    justify-center
                "
            >
                <span
                    className="
                        mx-0.5
                    "
                >
                    Copyright © 2023 Almanet.com.
                </span>
                <a
                    className="
                        mx-0.5
                        cursor-pointer
                        hover:text-text-accent-blue
                        transition
                    "
                >
                    {page.home.privatePolicy},
                </a>
                <a
                    className="
                        mx-0.5
                        cursor-pointer
                        hover:text-text-accent-blue
                        transition
                    "
                >
                    User Agreement
                </a>
            </div>
        </>
    );
}
