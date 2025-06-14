import { NextResponse } from 'next/server'
import { prisma } from '@/lib/db'
import jwt from 'jsonwebtoken'

const JWT_SECRET = process.env.JWT_SECRET || 'dev_secret_key'

export async function POST(request: Request) {
  try {
    // Get the authorization header
    const authHeader = request.headers.get('authorization')
    if (!authHeader || !authHeader.startsWith('Bearer ')) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    }

    // Verify the JWT token
    const token = authHeader.split(' ')[1]
    const decoded = jwt.verify(token, JWT_SECRET) as { id: string }

    // Get the income sources from the request body
    const { incomeSources } = await request.json()

    // Save the income sources to the database
    // Note: You'll need to add an income_sources table to your Prisma schema
    const savedSources = await prisma.incomeSource.createMany({
      data: incomeSources.map((source: any) => ({
        userId: decoded.id,
        type: source.type,
        amount: source.amount,
        frequency: source.frequency,
        description: source.description || null,
      })),
    })

    return NextResponse.json({
      message: 'Income sources saved successfully',
      sources: savedSources,
    })
  } catch (error: any) {
    console.error('Error saving income sources:', error)
    return NextResponse.json(
      { error: error.message || 'Failed to save income sources' },
      { status: 500 }
    )
  }
} 