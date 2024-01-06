import { NextResponse } from 'next/server';

export async function GET() {
  try {
    const response = await fetch(
      new URL('/status', process.env.NEXT_API_ROUTE)
    );
    if (!response.ok) {
      throw new Error('Error fetching data');
    }
    const text = await response.json();
    return NextResponse.json(text, { status: 200 });
  } catch (error) {
    console.log('ERROR =>>>>', error);
    return new NextResponse('Failed fetching data', { status: 500 });
  }
}
