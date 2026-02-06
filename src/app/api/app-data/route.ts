import { NextRequest, NextResponse } from 'next/server';
import gplay from 'google-play-scraper';

export async function GET(request: NextRequest) {
    const searchParams = request.nextUrl.searchParams;
    const appId = searchParams.get('appId');

    if (!appId) {
        return NextResponse.json({ error: 'App ID is required' }, { status: 400 });
    }

    try {
        const data = await gplay.app({
            appId: appId,
            lang: 'en',
            country: 'us',
        });

        // Clean up response if needed, for now returning full data
        return NextResponse.json(data);
    } catch (error) {
        console.error('Failed to fetch Play Store data:', error);
        return NextResponse.json({ error: 'Failed to fetch Play Store data' }, { status: 500 });
    }
}
