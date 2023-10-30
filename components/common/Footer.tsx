import Link from 'next/link';
import { Locale } from '@/i18n.config';
import { getDictionary } from '@/services/lib/dictionary';

export default async function Footer({
    params: { lang }
} : {
    params: { lang: Locale }
}) {
    const { page } = await getDictionary(lang);
    const privacyPolicyPath = '/about/privacy-policy';
    const userAgreementPath = '/about/user-agreement';

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
                <Link
                    href={privacyPolicyPath}
                    className="
                        mx-0.5
                        cursor-pointer
                        hover:text-text-accent-blue
                        transition
                    "
                >
                    {page.privacyPolicy.title},
                </Link>
                <Link
                    href={userAgreementPath}
                    className="
                        mx-0.5
                        cursor-pointer
                        hover:text-text-accent-blue
                        transition
                    "
                >
                    {page.userAgreement.title},
                </Link>
            </div>
        </>
    );
}
