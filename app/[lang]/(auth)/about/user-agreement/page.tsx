import { Locale } from '@/i18n.config';
import { getDictionary } from '@/services/lib/dictionary';

export default async function userAgreement({
    params: { lang }
}: {
    params: { lang: Locale }
}) {
    const { page } = await getDictionary(lang);
    const email = 'support@almanet.sc';

    return (
        <div
            className="
                h-max
                w-full
                relative
                flex
                justify-center
            "
        >
            <div
                className="
                    w-4/5
                    bg-bg-main
                    p-8
                "
            >
                <h1
                    className="
                        text-5xl
                        mb-12
                    "
                >{page.userAgreement.title}</h1>
                {lang === 'en' ? (
                    <>
                        { /* eslint-disable max-len */ }
                        <p className="policy-text">
                            Effective November 1, 2023. Last revised November 1, 2023
                            <br/>
                            We want you to understand how and why RLG Almanet (“Almanet,” “we” or “us”) collects, uses, and shares information about you when you use our sites, mobile apps, widgets, and other online products and services (collectively, the “Services”) or when you otherwise interact with us or receive a communication from us.
                        </p>
                        <p className="policy-text">
                            By using Almanet , you promise us that you have read, understood and agreed to this privacy policy and you are at least 18 years of age (or your parent or guardian has read and agreed to this privacy policy for you). If you do not agree or cannot make this promise, you should not use the service. In such a case, you should contact support via email to request that your account and data be deleted.
                        </p>
                        <p className="policy-text">Almanet application user is prohibited from downloading, storing, publishing, publishing, distributing, distributing and providing access to or otherwise using any information that:</p>
                        <ul className="policy-ul">
                            <li>contains threats, calls to violence, including hidden ones, approval and encouragement of violent actions, discredits, insults, defames honor and dignity or business reputation or violates the privacy of other Users or third parties</li>
                            <li>violates the rights of minors</li>
                            <li>is vulgar or obscene, contains pornographic images and texts or scenes of a sexual nature involving minors</li>
                            <li>contains scenes of inhumane treatment of animals</li>
                            <li>contains a description of the means and methods of suicide, any incitement to commit it</li>
                            <li>propagandizes and/or promotes incitement to racial, religious, ethnic hatred or enmity, on the grounds of gender, orientation, as well as other individual characteristics and features of a person (including health issues)</li>
                            <li>contains extremist material</li>
                            <li>promotes criminal activity or contains advice, instructions or guidelines for the commission of criminal acts</li>
                            <li>contains restricted information, including, but not limited to, state and commercial secrets, information on the private life of third parties</li>
                            <li>contains advertisements or describes the appeal of drug use, including &quot;digital drugs&quot; (sound files that affect the human brain through binaural rhythms), information on the distribution of drugs, recipes for their manufacture and advice on their use.</li>
                            <li>could potentially lead to the commission of illegal actions by misleading Users or abusing their trust</li>
                        </ul>
                        <p className="policy-text">The user of the Almanet application is prohibited:</p>
                        <ul className="policy-ul">
                            <li>illegally upload, store, publish, distribute, disseminate and provide access to or otherwise use the intellectual property of Users and third parties</li>
                            <li>make mass mailings of messages to other Application Users without their prior consent and/or any other similar unwanted mailings (spam), including using certain functionalities of the Application</li>
                            <li>use software and perform actions aimed at disrupting the normal functioning of the Application or personal pages of Users</li>
                            <li>download, store, publish, distribute, share and provide access to or otherwise use viruses, Trojans and other malicious programs</li>
                            <li>use automated scripts (programs, bots, crawlers) to collect information on the Application and/or interact with the Application and its functionality without special permission from the Application Administration.</li>
                            <li>by any means, including, but not limited to, fraud, breach of trust, hacking, attempt to gain access to the login and password of another User</li>
                            <li>unlawful collection and processing of personal data of other persons</li>
                            <li>to use the Application in any way other than through the interface provided by the Administration of the Application, unless such actions have been expressly authorized to the User in accordance with a separate agreement with the Administration.</li>
                            <li>reproduce, duplicate, copy, sell, trade and resell access to the use of the Application, including its unactivated data and commands, for any purpose, unless such actions have been expressly authorized to the User in accordance with the terms of these Rules or a separate agreement with the Administration</li>
                            <li>place commercial and political advertisements outside the special sections of the Annex established by the Annex Administration</li>
                            <li>post any other information, which, in the personal opinion of the Administration, is undesirable, does not correspond to the purposes of creating the Application, infringes upon the interests of Users or for other reasons is undesirable for posting on the Application</li>
                            <li>to carry out on their own or on behalf of other Users using the functionality of their account, including by misleading or promising rewards, including by using any programs, automated scripts, mass uniform actions aimed at artificially increasing the Application&apos;s counter indicators</li>
                        </ul>
                        <p className="policy-text">The User is personally responsible for any information he/she posts on the Application, communicates to other Users, and for any interactions with other Users at his/her own risk.</p>
                        <p className="policy-text">If the User does not agree with these Rules or their updates, the User shall refuse to use the Application by informing the Administration of the Application <a
                            href={`mailto:${email}`}
                            target="_blank"
                            rel="noreferrer"
                            className="policy-link"
                        >
                            { email }
                        </a>.</p>
                        <p className="policy-text">
                            If you have any other questions about this Privacy Policy,
                            <br/>
                            please contact us at:
                            <br/>
                            Almanet (302676873)
                            <br/>
                            Seychelles, Beau Vallon, Villa Madonna.
                            <br/>
                            <a
                                href={`mailto:${email}`}
                                target="_blank"
                                rel="noreferrer"
                                className="policy-link"
                            >
                                { email }
                            </a>
                        </p>
                    </>
                ) : (
                    <div>123</div>
                )}
            </div>
        </div>
    );
}
