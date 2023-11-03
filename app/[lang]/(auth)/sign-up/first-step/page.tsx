import { Form } from '@/components/sign-up/Form';
import { Locale } from '@/i18n.config';
import { getDictionary } from '@/services/lib/dictionary';

export default async function FirstStep({
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
                    w-full
                    flex
                    justify-center
                    items-center
                    relative
                "
            >
                <Form page={page} />
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
                        sm:hidden
                        xl:block
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
                        sm:hidden
                        xl:block
                    "
                />
            </div>
        </>
    );
}
