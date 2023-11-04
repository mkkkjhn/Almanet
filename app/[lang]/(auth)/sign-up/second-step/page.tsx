import SecondStepWrap from '@/components/sign-up/SecondStepWrap';
import { Locale } from '@/i18n.config';
import { getDictionary } from '@/services/lib/dictionary';

export default async function SecondStep({
    params: { lang }
} : {
    params: { lang: Locale }
}) {
    const { page } = await getDictionary(lang);

    return (
        <>
            <div
                className="
                    xl:h-[calc(100vh-92px)]
                    h-[calc(100vh-132px)]
                    w-screen
                    flex
                    justify-center
                    items-center
                    relative
                    mx-4
                "
            >
                <SecondStepWrap page={page} />
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
