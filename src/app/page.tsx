'use client'

import { useAuth } from '@/contexts/AuthContext'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import { useState } from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'

export default function Home() {
  const { signUp } = useAuth()
  const router = useRouter()
  const [email, setEmail] = useState('')
  const [loading, setLoading] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Store email in localStorage for use in signup page
    localStorage.setItem('userEmail', email)
    // Redirect to signup page
    router.push('/signup')
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 via-black to-gray-900 text-white">
      {/* Hero Section */}
      <section className="relative py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400">
              Modern Banking for Modern Businesses
            </h1>
            <p className="text-xl text-gray-300 mb-8">
              Experience the future of banking with AI-powered financial management, automated workflows, and intelligent insights.
            </p>
            
            {/* Email Input Section */}
            <form onSubmit={handleSubmit} className="max-w-md mx-auto">
              <div className="flex flex-col sm:flex-row gap-4">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  required
                  className="flex-1 px-6 py-3 rounded-lg bg-gray-800/50 border border-gray-700/50 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 text-white placeholder-gray-400"
                />
                <button
                  type="submit"
                  className="btn btn-primary text-lg px-8 py-3 rounded-lg bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 whitespace-nowrap"
                >
                  Get Started
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="card bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 animate-slide-in-left">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-500 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-4 text-white">Smart Automation</h3>
              <p className="text-gray-400">Automate your financial workflows and save time with intelligent banking solutions.</p>
            </div>
            <div className="card bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 animate-fade-in">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-4 text-white">Real-time Analytics</h3>
              <p className="text-gray-400">Get detailed insights into your business finances with advanced analytics tools.</p>
            </div>
            <div className="card bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 animate-slide-in-right">
              <div className="w-16 h-16 bg-gradient-to-br from-pink-500 to-blue-500 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-4 text-white">Secure Transactions</h3>
              <p className="text-gray-400">Bank with confidence using our enterprise-grade security infrastructure.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-br from-gray-900 via-black to-gray-900">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-8 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400">Ready to Transform Your Banking Experience?</h2>
          <div className="flex justify-center gap-4">
            <Link href="/signup" className="btn btn-primary text-lg px-8 py-4">
              Sign Up Now
            </Link>
            <Link href="/login" className="btn btn-secondary text-lg px-8 py-4">
              Login
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black text-gray-400 py-16 border-t border-gray-800">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="card bg-transparent border-none shadow-none">
              <h3 className="text-white text-sm font-semibold mb-6">Products</h3>
              <ul className="space-y-2">
                <li><Link href="/products" className="text-sm hover:text-white transition-colors">Features</Link></li>
                <li><Link href="/products" className="text-sm hover:text-white transition-colors">Pricing</Link></li>
                <li><Link href="/products" className="text-sm hover:text-white transition-colors">Enterprise</Link></li>
              </ul>
            </div>
            <div className="card bg-transparent border-none shadow-none">
              <h3 className="text-white text-sm font-semibold mb-6">Company</h3>
              <ul className="space-y-2">
                <li><Link href="/about" className="text-sm hover:text-white transition-colors">About</Link></li>
                <li><Link href="/careers" className="text-sm hover:text-white transition-colors">Careers</Link></li>
                <li><a href="mailto:ventureai2025@gmail.com?subject=FlowBank Contact Inquiry&body=Hello,%0D%0A%0D%0AI would like to get in touch with FlowBank regarding:%0D%0A%0D%0ABest regards," className="text-sm hover:text-white transition-colors">Contact</a></li>
              </ul>
            </div>
            <div className="card bg-transparent border-none shadow-none">
              <h3 className="text-white text-sm font-semibold mb-6">Legal</h3>
              <ul className="space-y-2">
                <li><Link href="/privacy" className="text-sm hover:text-white transition-colors">Privacy</Link></li>
                <li><Link href="/terms" className="text-sm hover:text-white transition-colors">Terms</Link></li>
              </ul>
            </div>
            <div className="card bg-transparent border-none shadow-none">
              <h3 className="text-white text-sm font-semibold mb-6">Connect</h3>
              <div className="flex space-x-4">
                <a href="https://twitter.com/flowbank" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                  </svg>
                </a>
                <a href="https://linkedin.com/company/flowbank" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-16 pt-8 text-center">
            <p className="text-sm">&copy; 2025 FlowBank. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
} 