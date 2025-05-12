import { NextResponse } from "next/server";


export async function GET() {
   const data = await fetch('https://api.vercel.app/blog')
  const posts = await data.json();
  return NextResponse.json(posts); 
}