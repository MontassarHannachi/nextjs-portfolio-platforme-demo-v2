import { NextResponse } from "next/server";

export function GET() {
  return NextResponse.json({
    status: "UP",
    service: "nextjs-portfolio",
    timestamp: new Date().toISOString()
  });
}
