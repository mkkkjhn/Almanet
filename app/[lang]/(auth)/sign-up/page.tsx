import { getServerSession } from 'next-auth';
import SessionProvider from '@/app/[lang]/SessionProvider';
import { AfterAuthGoogle } from '@/components/sign-up/AfterAuthGoogle';
import { Form } from '@/components/sign-up/Form';
import { Locale } from '@/i18n.config';
import { getDictionary } from '@/lib/dictionary';

// eslint-disable-next-line @next/next/no-async-client-component
export default async function SignUp({
    params: { lang }
} : {
    params: { lang: Locale }
}) {
    const { page } = await getDictionary(lang);
    const session = await getServerSession();

    return (
        <>
            <div
                className="
                    h-full
                    w-full
                    flex
                    justify-center
                    items-center
                "
            >
                <SessionProvider session={session}>
                    {!session ? (
                        <Form page={page} />
                    ) : (
                        <AfterAuthGoogle page={page} />
                    )}
                </SessionProvider>
            </div>
        </>
    );
}
