
import { Link } from 'react-router-dom'
import React from 'react'

export const Footer = () => {
  return (
    <footer className="bg-blue-900 text-white py-6 md:py-8">
    <div className="max-w-full mx-auto px-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-y-4 md:gap-y-none items-center">
        <div>
          <p className="text-sm opacity-80 text-center md:text-left">
            © 2025 ExplorEase. All rights reserved.
          </p>
        </div>
        <div className="flex flex-col md:flex-row gap-y-2 md:gap-y-none justify-center md:justify-end">
          <Link to="/privacy" className="hover:underline text-sm opacity-80">
            Privacy Policy
          </Link>
          <Link to="/terms" className="hover:underline text-sm opacity-80 ml-md:ml-[20px]">
            Terms of Service
          </Link>
        </div>
      </div>
    </div>
  </footer>
  )
}
