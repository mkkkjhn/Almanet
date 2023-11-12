import { SMTPClient } from 'emailjs';
import { NextResponse, NextRequest } from 'next/server';

export async function POST(req: NextRequest) {
    const data = await req.json();
    const { userEmail, subject, body }: any = data;
    const client = new SMTPClient({
        user: 'support@almanet.sc',
        password: 'sevwbzvbtmuorrbk',
        host: 'smtp.yandex.ru',
        ssl: true
    });

    try {
        const payload = {
            text: body,
            from: 'support@almanet.sc',
            to: userEmail,
            subject
        };
        await client.sendAsync(payload);

        return NextResponse.json({ success: true }, { status: 200 });
    } catch (e) {
        console.log(e);
        return NextResponse.json({ error: e }, { status: 500 });
    }
}
