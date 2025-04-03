'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Eye, EyeOff } from 'lucide-react'
import Image from 'next/image'

export default function RegisterForm() {
  const [showPassword, setShowPassword] = useState(false)
  const [showConfirmPassword, setShowConfirmPassword] = useState(false)

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-50 px-4">
      <div className="w-full max-w-md rounded-xl bg-white p-8 shadow-md">
        {/* Logo */}
        <div className="flex justify-center">
          <Image
            src="/logo.svg"
            width={80}
            height={80}
            alt="BoBo Logo"
          />
        </div>

        {/* Title */}
        <h2 className="mt-4 text-center text-2xl font-bold text-gray-900">
          Create Your <span className="text-[#5EAD1D]">Cusana</span> Account
        </h2>
        <p className="text-center text-sm text-gray-500">
          Sign up to access comprehensive features.
        </p>

        {/* Form Fields */}
        <div className="mt-6 space-y-5">
          <div>
            <label className="block text-sm font-medium text-gray-700">Name</label>
            <Input type="text" placeholder="Enter your name" className="h-12 rounded-lg" />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Email</label>
            <Input type="email" placeholder="Enter your email address" className="h-12 rounded-lg" />
          </div>

          <div className="relative">
            <label className="block text-sm font-medium text-gray-700">Password</label>
            <div className="relative">
              <Input
                type={showPassword ? 'text' : 'password'}
                placeholder="Enter your password"
                className="h-12 rounded-lg pr-10"
              />
              <button
                type="button"
                className="absolute right-3 top-3 text-gray-500 hover:text-gray-700"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
              </button>
            </div>
          </div>

          <div className="relative">
            <label className="block text-sm font-medium text-gray-700">Repeat Password</label>
            <div className="relative">
              <Input
                type={showConfirmPassword ? 'text' : 'password'}
                placeholder="Enter your password"
                className="h-12 rounded-lg pr-10"
              />
              <button
                type="button"
                className="absolute right-3 top-3 text-gray-500 hover:text-gray-700"
                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
              >
                {showConfirmPassword ? <EyeOff size={20} /> : <Eye size={20} />}
              </button>
            </div>
          </div>

          {/* Sign Up Button */}
          <Button className="w-full h-12 rounded-lg bg-gradient-to-r from-main to-gray-800 text-white font-semibold hover:opacity-90 transition">
            Sign Up
          </Button>

          {/* Sign In Link */}
          <p className="text-center text-sm text-gray-600">
            Already have an account?{' '}
            <a href="/login" className="font-semibold text-main hover:underline">
              Sign In
            </a>
          </p>

          {/* Footer */}
          <div className="mt-4 flex justify-center text-xs text-gray-500 space-x-4">
            <a href="#" className="hover:underline">Privacy Policy</a>
            <span>|</span>
            <a href="#" className="hover:underline">Terms & Conditions</a>
          </div>
        </div>
      </div>
    </div>
  )
}
