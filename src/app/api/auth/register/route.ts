import { NextResponse } from 'next/server'
import { createUser, createProfile, createAccount } from '@/lib/db'

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const { email, password, firstName, lastName, companyName, profile } = body

    // Create user
    const user = await createUser(email, password, firstName, lastName, companyName)

    // Create profile if provided
    if (profile) {
      await createProfile(user.id, profile)
    }

    // Create default checking account
    await createAccount(user.id, 'CHECKING')

    return NextResponse.json({
      message: 'User registered successfully',
      user: {
        id: user.id,
        email: user.email,
        firstName: user.firstName,
        lastName: user.lastName,
        companyName: user.companyName,
      },
    })
  } catch (error: any) {
    console.error('Registration error:', error)
    return NextResponse.json(
      { error: error.message || 'Failed to register user' },
      { status: 500 }
    )
  }
} 