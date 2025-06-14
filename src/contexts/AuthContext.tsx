'use client'

import { createContext, useContext, useEffect, useState } from 'react'

interface User {
  id: string
  email: string
  firstName?: string
  lastName?: string
  companyName?: string
  role?: string
  [key: string]: any
}

interface AuthContextType {
  user: User | null
  loading: boolean
  signUp: (email: string, password: string, firstName?: string, lastName?: string, companyName?: string) => Promise<void>
  signIn: (email: string, password: string) => Promise<void>
  signOut: () => void
}

const AuthContext = createContext<AuthContextType>({
  user: null,
  loading: true,
  signUp: async () => {},
  signIn: async () => {},
  signOut: () => {}
})

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // On mount, check for token and user in localStorage
    const token = typeof window !== 'undefined' ? localStorage.getItem('token') : null
    const userData = typeof window !== 'undefined' ? localStorage.getItem('user') : null
    if (token && userData) {
      setUser(JSON.parse(userData))
    }
    setLoading(false)
  }, [])

  const signUp = async (email: string, password: string, firstName?: string, lastName?: string, companyName?: string) => {
    // Call your backend API for registration
    const res = await fetch('/api/auth/register', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, password, firstName, lastName, companyName })
    })
    const data = await res.json()
    if (!res.ok) {
      throw new Error(data.error || 'Failed to register')
    }
    // Optionally, auto-login after sign up
    // await signIn(email, password)
  }

  const signIn = async (email: string, password: string) => {
    const res = await fetch('/api/auth/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, password })
    })
    const data = await res.json()
    if (!res.ok) {
      throw new Error(data.error || 'Failed to login')
    }
    // Store token and user in localStorage
    localStorage.setItem('token', data.token)
    localStorage.setItem('user', JSON.stringify(data.user))
    setUser(data.user)
  }

  const signOut = () => {
    localStorage.removeItem('token')
    localStorage.removeItem('user')
    setUser(null)
  }

  const value = {
    user,
    loading,
    signUp,
    signIn,
    signOut
  }

  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  )
}

export const useAuth = () => {
  const context = useContext(AuthContext)
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider')
  }
  return context
} 