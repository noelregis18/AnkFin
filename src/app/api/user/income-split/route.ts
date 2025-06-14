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

    // Get the income split data from the request body
    const { strategy, split, totalMonthlyIncome } = await request.json()

    // Save the income split to the database
    const savedSplit = await prisma.incomeSplit.create({
      data: {
        userId: decoded.id,
        strategy,
        needsPercentage: split.needs,
        wantsPercentage: split.wants,
        savingsPercentage: split.savings,
        investmentsPercentage: split.investments,
        totalMonthlyIncome,
      },
    })

    return NextResponse.json({
      message: 'Income split saved successfully',
      split: savedSplit,
    })
  } catch (error: any) {
    console.error('Error saving income split:', error)
    return NextResponse.json(
      { error: error.message || 'Failed to save income split' },
      { status: 500 }
    )
  }
} 