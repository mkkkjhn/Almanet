import { SMTPClient } from 'emailjs';
import { NextResponse, NextRequest } from 'next/server';

export async function POST(req: NextRequest) {
    const data = await req.json();
    const { userEmail, subject }: any = data;
    const client = new SMTPClient({
        user: 'support@almanet.sc',
        password: 'sevwbzvbtmuorrbk',
        host: 'smtp.yandex.ru',
        ssl: true
    });

    try {
        const payload = {
            text: 'Dear Сustomer,\n'
                + '\n'
                + 'Warmest greetings and welcome to Almanet! We are sincerely grateful for your registration and thrilled to welcome you to our growing Seychelles community.\n'
                + '\n'
                // eslint-disable-next-line max-len
                + 'We are excited to announce that the official release of our application is set for early December 2023. You will be among the first to receive an exclusive link to access the platform and the opportunity to fill out your profile.\n'
                + '\n'
                // eslint-disable-next-line max-len
                + 'Please note that the Almanet platform is completely free for all participants. Our mission is to unite the Seychelles community, support socially significant projects, and facilitate business development in the Seychelles.\n'
                + '\n'
                + 'Here is a brief overview of what awaits you on the Almanet platform:\n'
                + '\n'
                + 'Discover Almanet! – Experience Seychelles\' first social platform, engage in events, and use our message board to live and conduct business on the islands.\n'
                + '\n'
                + 'Your Almanet News Feed – Discover a space where local stories and service reviews are accessible to everyone in Seychelles.\n'
                + '\n'
                + 'Your CreoleTrade at Almanet – Buy and sell anything through our local bulletin board, from used cars to apartment rentals, with convenience and simplicity.\n'
                + '\n'
                + 'Seychelles Life in Reports – Share unique Seychelles moments from your perspective, capturing and narrating your exciting experiences and events.\n'
                + '\n'
                + 'Opportunities for Partners – Post a review or reportage of your event, commissioned by the Almanet team, and advertise your business on our platform profitably.\n'
                + '\n'
                // eslint-disable-next-line max-len
                + 'We look forward to the opportunity to meet you and see how you engage with our community. Don\'t forget to follow our updates on Facebook and Instagram!\n'
                + '\n'
                + 'Warm regards,\n'
                + 'Almanet Team\n',
            from: 'support@almanet.sc',
            to: userEmail,
            subject,
            attachment: [
                {
                    data: '<html lang="en">'
                     + '<p>Dear Сustomer,</p>'
                     + '<br>'
                     + '<p>Warmest greetings and welcome to Almanet! We are sincerely grateful for your registration and thrilled to welcome you to our growing Seychelles community.</p>'
                     + '<br>'
                     + '<p>We are excited to announce that the official release of our application is set for early December 2023. You will be among the first to receive an exclusive link to access the platform and the opportunity to fill out your profile.</p>'
                     + '<br>'
                     + '<p>Please note that the Almanet platform is completely free for all participants. Our mission is to unite the Seychelles community, support socially significant projects, and facilitate business development in the Seychelles.</p>'
                     + '<br>'
                     + '<p>Here is a brief overview of what awaits you on the Almanet platform:</p>'
                     + '<br>'
                     + '<ul>'
                     + '<li>Discover Almanet! – Experience Seychelles\' first social platform, engage in events, and use our message board to live and conduct business on the islands.</li>'
                     + '<li>Your Almanet News Feed – Discover a space where local stories and service reviews are accessible to everyone in Seychelles.</li>'
                     + '<li>Your CreoleTrade at Almanet – Buy and sell anything through our local bulletin board, from used cars to apartment rentals, with convenience and simplicity.</li>'
                     + '<li>Seychelles Life in Reports – Share unique Seychelles moments from your perspective, capturing and narrating your exciting experiences and events.</li>'
                     + '<li>Opportunities for Partners – Post a review or reportage of your event, commissioned by the Almanet team, and advertise your business on our platform profitably.</li>'
                     + '</ul>'
                     + '<br>'
                     + '<p>We look forward to the opportunity to meet you and see how you engage with our community. Don\'t forget to follow our updates on <a href="https://www.facebook.com/almanet.sc/">Facebook</a> and <a href="https://instagram.com/almanet.sc?igshid=MzMyNGUyNmU2YQ==">Instagram</a>!</p>'
                     + '<br>'
                     + '<p>Warm regards,</p>'
                     + '<p>Almanet Team</p>'
                     + '</html>',
                    alternative: true
                }
            ]
        };
        await client.sendAsync(payload);

        return NextResponse.json({ success: true }, { status: 200 });
    } catch (e) {
        console.log(e);
        return NextResponse.json({ error: e }, { status: 500 });
    }
}
