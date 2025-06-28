import { NextRequest, NextResponse } from 'next/server'
import { storage } from '@/lib/storage'

export async function POST() {
  try {
    const views = await storage.incrementSiteViews()
    return NextResponse.json({ totalViews: views.totalViews })
  } catch (error) {
    console.error(`Error incrementing views: ${error}`)
    return NextResponse.json({ error: "Failed to increment views" }, { status: 500 })
  }
}