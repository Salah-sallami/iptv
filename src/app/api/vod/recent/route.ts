import { NextResponse } from "next/server";
import { RECENT_VOD_DATA } from "@/data/vod";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const category = searchParams.get("category");

  let items = RECENT_VOD_DATA;
  if (category && category !== "all") {
    items = items.filter((item) => item.category === category);
  }

  return NextResponse.json({
    status: "success",
    totalCount: items.length,
    catalogTotal: "120,000+",
    data: items,
  });
}
