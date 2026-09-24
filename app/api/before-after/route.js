import { NextResponse } from 'next/server';

const DIRECTUS_URL = (process.env.NEXT_PUBLIC_DIRECTUS_URL || 'https://angor.uz').replace(/\/$/, '');

export async function GET(request) {
  const { searchParams } = new URL(request.url);
  const limit = searchParams.get('limit') || 4;
  const offset = searchParams.get('offset') || 0;

  try {
    const directusUrl = `${DIRECTUS_URL}/items/before_after_items?sort[]=-id&limit=${limit}&offset=${offset}`;
    
    const res = await fetch(directusUrl, {
      cache: 'no-store',
      headers: {
        'Accept': 'application/json',
      },
    });

    // Agar Directus HTML yoki xatolik qaytarsa
    if (!res.ok) {
      console.error(`Directus Error (${res.status}):`, directusUrl);
      return NextResponse.json([]);
    }

    const contentType = res.headers.get('content-type');
    if (!contentType || !contentType.includes('application/json')) {
      console.error("Directus JSON o'rniga HTML qaytardi. Endpoint yo'lini tekshiring!");
      return NextResponse.json([]);
    }

    const data = await res.json();
    return NextResponse.json(data.data || []);
  } catch (error) {
    console.error("Server API Route Error:", error);
    return NextResponse.json([]);
  }
}