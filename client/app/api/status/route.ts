import { NextResponse } from 'next/server';

export async function GET() {
  const response = await fetch('http://localhost:4000/status');
  const text = await response.json();
  return NextResponse.json(text, { status: 200 });
}
