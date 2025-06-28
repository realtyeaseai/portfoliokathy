import { NextRequest, NextResponse } from 'next/server'
import { storage } from '@/lib/storage'

export async function GET() {
  try {
    const views = await storage.getSiteViews()
    return NextResponse.json({ totalViews: views?.totalViews || 0 })
  } catch (error) {
    console.error(`Error getting views: ${error}`)
    return NextResponse.json({ error: "Failed to get views" }, { status: 500 })
  }
}