import { NextRequest, NextResponse } from "next/server";

export function GET() {
  if (!process.env.CMS_HOSTNAME) return NextResponse.error();
  return NextResponse.redirect(process.env.CMS_HOSTNAME, 308);
}
