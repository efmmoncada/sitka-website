import { NextResponse } from 'next/server';

export async function POST(req: Request): Promise<NextResponse> {
  return NextResponse.json({ main: 'hello' });
}
