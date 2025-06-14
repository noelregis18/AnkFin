'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import Image from 'next/image'

export default function AboutPage() {
  const companyValues = [
    {
      title: "Innovation",
      description: "Constantly pushing boundaries in financial technology to create better solutions for our customers.",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      )
    },
    {
      title: "Security",
      description: "Enterprise-grade security measures to protect our customers' financial data and transactions.",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
        </svg>
      )
    },
    {
      title: "Customer Focus",
      description: "Putting our customers first and building solutions that address their real needs.",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      )
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 via-black to-gray-900 text-white py-20">
      {/* Header Section */}
      <div className="container mx-auto px-4 text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400">
          About FlowBank
        </h1>
        <p className="text-xl text-gray-300 max-w-2xl mx-auto">
          Revolutionizing the future of banking with innovative financial solutions.
        </p>
      </div>

      {/* Company Overview */}
      <div className="container mx-auto px-4 mb-20">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 p-8 rounded-xl mb-12"
          >
            <h2 className="text-3xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400">
              Our Mission
            </h2>
            <p className="text-gray-300 text-lg mb-6">
              FlowBank is dedicated to transforming the banking experience through innovative technology and customer-centric solutions. We believe in making financial services more accessible, secure, and efficient for everyone.
            </p>
            <p className="text-gray-300 text-lg">
              Our platform combines cutting-edge technology with deep financial expertise to provide a seamless banking experience that empowers individuals and businesses to achieve their financial goals.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Founder Section */}
      <div className="container mx-auto px-4 mb-20">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 p-8 rounded-xl"
          >
            <h2 className="text-3xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400">
              Our Founder
            </h2>
            <div className="flex flex-col md:flex-row items-center gap-8">
              <div className="w-48 h-48 rounded-full bg-gradient-to-br from-blue-500 to-purple-500 flex items-center justify-center">
                <span className="text-4xl font-bold">VP</span>
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-2">Ven-Kerry Prince</h3>
                <p className="text-gray-400 mb-4">Founder & CEO</p>
                <p className="text-gray-300 mb-4">
                  Ven-Kerry Prince is a visionary leader with a strong background in marketing and business management. He holds a degree in Marketing Management from Kean University, where he developed a deep understanding of consumer behavior and market dynamics.
                </p>
                <p className="text-gray-300">
                  With extensive experience in the financial technology sector, Ven-Kerry founded FlowBank with the mission to revolutionize the banking industry through innovative solutions and customer-centric approaches.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Company Values */}
      <div className="container mx-auto px-4 mb-20">
        <h2 className="text-3xl font-bold text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400">
          Our Values
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          {companyValues.map((value, index) => (
            <motion.div
              key={value.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 p-6 rounded-xl text-center"
            >
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-500 rounded-2xl flex items-center justify-center mx-auto mb-6">
                {value.icon}
              </div>
              <h3 className="text-xl font-semibold mb-4">{value.title}</h3>
              <p className="text-gray-400">{value.description}</p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* CTA Section */}
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400">
          Join Us in Revolutionizing Banking
        </h2>
        <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
          Be part of the future of banking with FlowBank.
        </p>
        <div className="flex justify-center gap-4">
          <Link href="/signup" className="btn btn-primary text-lg px-8 py-4">
            Get Started
          </Link>
          <a
            href="mailto:ventureai2025@gmail.com?subject=FlowBank Partnership Inquiry&body=Hello,%0D%0A%0D%0AI'm interested in learning more about partnering with FlowBank.%0D%0A%0D%0ABest regards,"
            className="btn btn-secondary text-lg px-8 py-4"
          >
            Contact Us
          </a>
        </div>
      </div>
    </div>
  )
} 