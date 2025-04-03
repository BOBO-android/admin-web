'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Checkbox } from '@radix-ui/react-checkbox'
import Image from 'next/image'
import { Eye, EyeOff } from 'lucide-react'

export default function LoginForm() {
  const [showPassword, setShowPassword] = useState(false)

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-100 px-4">
      <div className="w-full max-w-md rounded-lg bg-white p-6 shadow-md">
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
        <h2 className="mt-4 text-center text-2xl font-semibold">
          Welcome Back to BoBo
        </h2>
        <p className="text-center text-sm text-gray-500">
          Enter your username and password to continue.
        </p>

        {/* Form Fields */}
        <div className="mt-6 space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">Email</label>
            <Input type="email" placeholder="Enter your email address" />
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

          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Checkbox id="remember" />
              <label htmlFor="remember" className="text-sm text-gray-600">
                Remember me
              </label>
            </div>
            <a href="#" className="text-sm text-blue-600 hover:underline">
              Forgot password?
            </a>
          </div>

          {/* Sign In Button */}
          <Button className="w-full h-12 rounded-lg bg-gradient-to-r from-main to-gray-800 text-white font-semibold hover:opacity-90 transition">Sign In</Button>

          <p className="text-center text-sm text-gray-600">
            Don&apos;t have an account?{' '}
            <a href="/register" className="font-semibold text-main hover:underline">
              Register
            </a>
          </p>
        </div>
      </div>
    </div>
  )
}
