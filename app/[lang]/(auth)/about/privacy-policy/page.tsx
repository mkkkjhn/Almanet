import { Locale } from '@/i18n.config';
import { getDictionary } from '@/services/lib/dictionary';

export default async function PrivacyPolicy({
    params: { lang }
} : {
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
                >{page.privacyPolicy.title}</h1>
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
                        <h3
                            className="
                                mt-[96px]
                                mb-4
                                text-2xl
                            "
                        >
                            From the Almanet team
                        </h3>
                        <p className="policy-text">
                            We value the privacy of our users and strive to protect their personal information as much as possible.
                            <br/>
                            Our privacy policy is based on the principles of minimal data collection, necessary only for the operation of our mail notices, and other communication channels.
                            <br/>
                            We do not profit from your personal data or share it with third parties without your explicit consent. Your privacy is our priority.
                            <br/>
                            In accordance with the laws of Seychelles and the provisions of GDPR, we give all users, regardless of their nationality and location, full control over their personal data. You can request an archive of your personal data, transfer it to another platform and delete your profile on Almanet at any time. We respect your copyrights and store your content under the CC BY-SA 4.0 open license.
                            <br/>
                            Almanet was created as a platform for open communication and mutual support. All members of our community can see and read your posts, quote you and find you through search. We encourage you to be careful not to disclose more personal information than is necessary to fully communicate within our community.
                            <br/>
                            Please report any suspected breach of privacy or data security to our support team immediately.
                            <br/>
                            In the event of a hack or other security incident, we will notify you immediately by email and take all necessary steps to protect your data.
                        </p>
                        <h3
                            className="
                                mt-[96px]
                                mb-4
                                text-2xl
                            "
                        >
                            What We Collect (and How it is Used and Shared)
                        </h3>
                        <p className="policy-text">We collect information that you provide to us directly when you use the Application. This includes:</p>
                        <p className="policy-text">Account information</p>
                        <p className="policy-text">If you create an Almanet account, we may require you to provide a username and password. Your username is publicly available and does not need to be associated with your real name. You may also provide other account information, such as your e-mail address, biography or profile picture. We also store your account preferences and settings.</p>
                        <p className="policy-text">The content you provide</p>
                        <p className="policy-text">We collect the content you submit to the App. This includes your posts and comments, including saved drafts, videos you stream through RPAN, your communications with other users (such as private messages, chats and modmail), and your messages and other communications with moderators and with us. Your content may include text, links, images, gifs and videos.</p>
                        <p className="policy-text">The actions you take</p>
                        <p className="policy-text">We collect information about the actions you take when using the Application. This includes your interactions with content, such as voting, saving, hiding, and posting. This also includes your interactions with other users, such as following, adding to friends, and blocking. We collect information about your interactions with communities, such as your subscriptions or moderator status.</p>
                        <p className="policy-text">Transactional information</p>
                        <p className="policy-text">If you purchase products or services from us, we collect certain information from you, including your name, address, e-mail address and information about the product or service you are purchasing. Almanet uses industry-standard payment processor services (e.g., Stripe) to process payment information.</p>
                        <p className="policy-text">Other information</p>
                        <p className="policy-text">You may, at your discretion, provide other information directly to us. For example, we may collect information when you fill out a form, participate in Almanet sponsored events or promotions, apply for a job, request customer support, or otherwise communicate with us. Information we collect automatically</p>
                        <h3
                            className="
                                mt-[96px]
                                mb-4
                                text-2xl
                            "
                        >
                            When you access or use our Services, we may also automatically collect information about you. This includes:
                        </h3>
                        <p className="policy-text">Log and usage data</p>
                        <p className="policy-text">We may record information when you access and use the Services. This may include your IP address, user agent string, browser type, operating system, URLs, device information (such as device IDs), device settings, mobile carrier name, pages visited, links clicked, URLs requested and search queries. With the exception of the IP address used to create your account, Almanet will delete all collected IP addresses after 100 days.</p>
                        <p className="policy-text">Information collected through cookies and similar technologies</p>
                        <p className="policy-text">We may receive information from cookies, which are pieces of data stored by your browser and sent back to us when you make requests, and similar technologies. We use this information to improve your experience, understand user activity, personalize content and advertising, and improve our Services. For example, we store and receive information about your preferred language and other settings.</p>
                        <p className="policy-text">Location information</p>
                        <p className="policy-text">We may receive and process information about your location. For example, with your consent, we may collect information about the specific location of your mobile device (e.g., using GPS or Bluetooth). We may also collect location information from you when you choose to share such information on our Services, including by associating your content with a location, or we may derive your approximate location from other information about you, including your IP address.</p>
                        <p className="policy-text">Other information</p>
                        <p className="policy-text">We may also use Apple&apos;s TrueDepth camera information to provide enhanced camera functionality for the Almanet app, if you choose to use it. TrueDepth camera information is used in real time - we do not store this information on our servers or share it with third parties.</p>
                        <p className="policy-text">Information obtained from other sources</p>
                        <p className="policy-text">We may receive information about you from other sources, including other users and third parties, and combine that information with other information we have about you. For example, we may receive demographic or interest information about you from third parties, including advertisers (such as the fact that an advertiser is interested in showing you ads), and combine it with our own data using a common account identifier, such as an email address hash or mobile device identifier.</p>
                        <p className="policy-text">When you decide to log in using Facebook, we get personal data from your Facebook account. This includes your profile image, name, and Facebook ID. Unless you opt-out on the Facebook Login screen, we will also collect other data, such as email address, gender, date of birth, friends list, and location as listed in your Facebook profile. For more information, please refer to the Facebook Permissions Reference (describes the categories of information, which Facebook may share with third parties and the set of requirements) and to the Facebook Data policy. In addition, Facebook lets you control the choices you made when connecting your Facebook profile to the App on their Apps and Websites page.</p>
                        <p className="policy-text">When you log in with Google, we get your name, email address, profile language settings, profile picture, gender, and date of birth. To know more about how Google processes your data, visit its Privacy Policy. To remove access granted to us, visit Google Permissions. If you were invited to create an account in the Service, the person that invited you can provide personal information about you, such as your phone number, email address, social media account or other contact information.</p>
                        <p className="policy-text">We use information about you for:</p>
                        <ul className="policy-ul">
                            <li>Provide, maintain and improve the Application;</li>
                            <li>Research and development of new services;</li>
                            <li>Help protect the security of Almanet and our users, which includes blocking suspected spammers, combating abuse, and enforcing the Almanet User Agreement and our other policies;</li>
                            <li>Send you technical notices, updates, security alerts, invoices and other support and administrative messages;</li>
                            <li>Provide customer service;</li>
                            <li>Communicating with you about products, services, offers, promotions and events, and providing other news and information that we think may be of interest to you (to opt out of these communications, email <a
                                href={`mailto:${email}`}
                                target="_blank"
                                rel="noreferrer"
                                className="policy-link"
                            >
                                { email }
                            </a>);</li>
                            <li>Track and analyze trends, usage and activity in connection with our Services;</li>
                            <li>Measure the effectiveness of the ads shown in our App;</li>
                            <li>Personalize the Services and provide and optimize advertising, content and features that match a user&apos;s profile or interests.</li>
                        </ul>
                        <p className="policy-text">Much of the information in the App is public and available to everyone, even without an account. By using the App, you are instructing us to share this information publicly and freely.</p>
                        <p className="policy-text">When you submit content (including a post, comment, chat message, or RPAN broadcast) to the public portion of the Application, any visitors and users of our Application will be able to see that content, the username associated with the content, and the date and time you originally submitted the content.</p>
                        <p className="policy-text">Your Almanet account has a profile page that is publicly accessible. Your profile contains information about your activity on the Application, such as your username, previous posts and comments, karma, awards received, trophies, moderator status, Almanet status, and information about how long you have been a member of the Application. You can also choose to have your profile display content that you upvote or downvote.</p>
                        <p className="policy-text">We do not sell your personal information. However, in addition to personal information that is displayed publicly as described above, we may share personal information in the following ways:</p>
                        <ul className="policy-ul">
                            <li>With your consent. We may share information about you with your consent or at your direction.</li>
                            <li>With Linked Services. If you link your Almanet account to a third-party service, Almanet will share information that you authorize with that third-party service. You can control this sharing of information as described below under &quot;Your Choices&quot;.</li>
                            <li>With our service providers. We may share information with vendors, consultants and other service providers who need access to such information to perform work for us. Appropriate privacy and security measures will be followed when they use personal information. A few examples are (i) payment processors who process transactions on our behalf, (ii) cloud providers who host our data and our services, (iii) third-party ad measurement service providers who help us and advertisers measure the effectiveness of ads shown on our App.</li>
                            <li>To comply with the law. We may release information in response to a request for information if we believe that disclosure is consistent with or required by any applicable law, regulation, legal process or governmental request, including, but not limited to, to fulfill national security or law enforcement requirements. To the extent permitted by law, we will endeavor to provide you with prior notice before disclosing your information in response to such a request.</li>
                            <li>In emergency situations. We may share information if we believe it is necessary to prevent imminent and serious bodily injury to a person.</li>
                            <li>To enforce our policies and rights. We may share information if we believe your actions are in violation of our User Agreement, rules or other Almanet policies, or to protect the rights, property and safety of us and others.</li>
                            <li>With our affiliates. We may share information between Almanet and any of our parents, affiliates, subsidiaries and other companies under common control and ownership.</li>
                            <li>Aggregated or de-identified information. We may share information about you that has been aggregated or anonymized in a way that cannot be used to identify you. For example, we may show the total number of times a post was voted on without identifying who the visitor was, or we may tell an advertiser how many people saw their advertisement.</li>
                        </ul>
                        <h3>How we protect your information</h3>
                        <p className="policy-text">We take steps to protect information about you from loss, theft, misuse and unauthorized access, disclosure, alteration and destruction. For example, we use the HTTPS protocol when transmitting information. We also use technical and administrative access controls to limit our employees&apos; access to nonpublic personal information.</p>
                        <p className="policy-text">We retain the information we collect for as long as it is needed for the purpose(s) for which we originally collected it.</p>
                        <p className="policy-text">We may retain certain information for legitimate business purposes or as required by law.</p>
                        <p className="policy-text">We reserve the right to request verification of trademark rights in the Almanet app. In case of failure of verification, your nickname will be withdrawn and transferred to the rights holder.</p>
                        <p className="policy-text">Your choice</p>
                        <p className="policy-text">You have choices about how to protect and restrict the collection, use and sharing of information about you when you use the Application. Some of these choices are available to everyone who uses Almanet, while others apply only if you have an Almanet account.</p>
                        <p className="policy-text">Accessing and changing your information</p>
                        <p className="policy-text">You can access and change certain information through the App. See our Help Center page for more information. You may also request a copy of the personal information Almanet holds about you. (To change or delete your account information, send an email to <a
                            href={`mailto:${email}`}
                            target="_blank"
                            rel="noreferrer"
                            className="policy-link"
                        >
                            { email }
                        </a>)</p>
                        <p className="policy-text">Deleting an account</p>
                        <p className="policy-text">You can delete your account information at any time from the user preferences page. You can also request to delete personal information that Almanet stores about you by sending an email to <a
                            href={`mailto:${email}`}
                            target="_blank"
                            rel="noreferrer"
                            className="policy-link"
                        >
                            { email }
                        </a>. When you delete your account, your profile is no longer visible to other users and is separated from the content you have posted under that account. Please note, however, that posts, comments, and messages that you posted prior to deleting your account will still be visible to other users unless you have previously deleted specific content. We may also retain certain information about you as required by law or for legitimate business purposes after your account is deleted.</p>
                        <p className="policy-text">Controlling the use of cookies</p>
                        <p className="policy-text">Most web browsers accept cookies by default. If you wish, you can usually set your browser to delete or reject first and third party cookies. Please note that if you choose to delete or reject cookies, this may affect the availability and functionality of our Application.</p>
                        <p className="policy-text">Control of advertising and analytics</p>
                        <p className="policy-text">Some analytics service providers with whom we partner may provide specific opt-out mechanisms, and we may provide, as needed and available, additional third-party tools and services that allow you to better understand cookies and how you can opt-out. For example, you can manage the use and collection of certain information by Google Analytics through the Google Analytics Opt-out Browser Add-on.</p>
                        <p className="policy-text">Managing mobile notifications</p>
                        <p className="policy-text">With your consent, we may send promotional and non-promotional push notifications or alerts to your mobile device. You can disable these messages at any time by changing the notification settings on your mobile device.</p>
                        <p className="policy-text">Managing location information</p>
                        <p className="policy-text">You can control how we use location information collected from your IP address for content recommendation purposes through the security and privacy settings in your account. If you initially agreed to our collection of more accurate location information from your device, you may subsequently stop collecting this information at any time by changing the settings on your mobile device.</p>
                        <h3
                            className="
                                mt-[96px]
                                mb-4
                                text-2xl
                            "
                        >Your Rights</h3>
                        <p className="policy-text">Requests for information about the data subject and consumers</p>
                        <p className="policy-text">Requests for a copy of your account information held by Almanet, including requests for access to data under the EU General Data Protection Regulation (&quot;GDPR&quot;) and requests for consumer information under the California Privacy Act (&quot;CCPA&quot;), may be made in accordance with the procedure described herein.</p>
                        <p className="policy-text">All other requests from data subjects and consumers under data protection laws should be emailed to <a
                            href={`mailto:${email}`}
                            target="_blank"
                            rel="noreferrer"
                            className="policy-link"
                        >
                            { email }
                        </a> from the email address you have confirmed in your Almanet account. Other requests related to your privacy rights can be made here.</p>
                        <p className="policy-text">Before we process a request from you regarding your personal information, we need to confirm the request through your access to your Almanet account or to the verified email address associated with your Almanet account. You may also designate an authorized agent to exercise these rights on your behalf. Almanet does not discriminate against users for exercising their rights under data protection laws to make requests relating to their personal information.</p>
                        <p className="policy-text">`Please direct any inquiries or complaints regarding our compliance with the Privacy Shield principles to the contact person listed in the &quot;Contact Us&quot; section below. Under certain conditions set forth in the Privacy Shield principles, you may also have the option to submit to binding arbitration to resolve your complaint.`</p>
                        <p className="policy-text">As required by applicable law, we only collect and process information about individuals in the EEA where we have a legal basis to do so. Our legal grounds depend on which Services you use and how you use them. We process your information on the following legal grounds:</p>
                        <ul className="policy-ul">
                            <li>You consented to us doing this for a purpose;</li>
                            <li>We need to process information to provide the Services to you, including to manage the Services, provide customer support and personalized features, and to protect the security and safety of the Application;</li>
                            <li>This is for legitimate interests (which are not overridden by your data protection interests) such as fraud prevention, ensuring network and information security, enforcing our rules and policies, protecting our legitimate rights and interests, research and development, personalizing the Services, and marketing and promoting the Services;</li>
                            <li>We need to process your information in order to fulfill our legal obligations.</li>
                        </ul>
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
