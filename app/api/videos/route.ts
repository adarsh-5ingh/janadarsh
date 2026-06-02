import { NextResponse } from "next/server";
import { getVideos } from "@/lib/queries";

export async function GET() {
  const videos = await getVideos(20);
  return NextResponse.json(videos);
}
