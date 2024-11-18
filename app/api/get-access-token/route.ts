import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
    const clientId = process.env.CLIENT_ID;
    const clientSecret = process.env.CLIENT_SECRET;
    const code = request.nextUrl.searchParams.get('code');
    const redirectUri = process.env.REDIRECT_URI;

    if (!clientId || !clientSecret || !code || !redirectUri) {
        return NextResponse.json({ error: 'Missing required parameters' }, { status: 400 });
    }

    try {
        const response = await fetch('https://slack.com/api/oauth.v2.access', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            },
            body: new URLSearchParams({
                client_id: clientId,
                client_secret: clientSecret,
                code: code,
                redirect_uri: redirectUri
            })
        });

        const data = await response.json();
        return NextResponse.json(data);
    } catch (error) {
        return NextResponse.json({ error: error }, { status: 500 });
    }
}