import Final from '@/components/sign-up/Final';
import { Locale } from '@/i18n.config';
import { getDictionary } from '@/services/lib/dictionary';

export default async function Finally({
    params: { lang }
} : {
    params: { lang: Locale }
}) {
    const { page } = await getDictionary(lang);

    return (
        <>
            <div
                className="
                    h-full
                    xl:h-[calc(100vh-92px)]
                    w-screen
                    flex
                    justify-center
                    items-center
                    relative
                "
            >
                <Final page={page} />
                <div
                    className="
                        absolute
                        w-[360px]
                        h-[360px]
                        sm:w-[400px]
                        sm:h-[400px]
                        transform
                        rotate-[64.09deg]
                        rounded-[95px]
                        bg-yellow
                        z-[-1]
                        sm:top-[90px]
                        top-[14px]
                        sm:left-[-80px]
                        left-[-140px]
                    "
                />
                <div
                    className="
                        absolute
                        w-[360px]
                        h-[360px]
                        sm:w-[400px]
                        sm:h-[400px]
                        transform
                        rotate-[64.09deg]
                        rounded-[95px]
                        bg-green
                        z-[-1]
                        sm:bottom-[80px]
                        bottom-[14px]
                        right-[-140px]
                        sm:right-[-38px]
                        hidden
                        sm:block
                    "
                />
            </div>
        </>
    );
}
