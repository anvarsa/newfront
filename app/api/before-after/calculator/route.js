import { NextResponse } from 'next/server';

const DIRECTUS_URL = (process.env.NEXT_PUBLIC_DIRECTUS_URL || 'https://angor.uz').replace(/\/$/, '');

export async function GET() {
  try {
    // Directus'dan mashinalarni va unga bog'liq services'larni birga chaqirib olamiz
    const url = `${DIRECTUS_URL}/items/cars?fields=id,name,slug,services.id,services.title,services.description,services.price&filter[status][_eq]=published&sort=sort`;

    const res = await fetch(url, {
      cache: 'no-store',
      headers: {
        'Accept': 'application/json',
      },
    });

    if (!res.ok) {
      console.error(`Directus Calculator Error (${res.status}):`, url);
      return NextResponse.json([]);
    }

    const data = await res.json();
    return NextResponse.json(data.data || []);
  } catch (error) {
    console.error("Calculator API Route Error:", error);
    return NextResponse.json([]);
  }
}