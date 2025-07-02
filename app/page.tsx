"use client"

import type React from "react"
import Image from "next/image"

export default function ComingSoonPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-neutral-100 to-neutral-200 flex items-center justify-center p-4">
      <div className="max-w-2xl w-full text-center space-y-10">
        <div className="space-y-6">
          {/* Logo */}
          <div className="flex justify-center">
            <Image
              src="/logo.svg"
              alt="Glamora Logo"
              width={160}
              height={160}
              className="object-contain"
            />
          </div>

          <div className="w-28 h-1 bg-gradient-to-r from-black to-neutral-700 mx-auto rounded-full"></div>

          <p className="text-lg md:text-xl text-neutral-800 font-medium">
            Where Fashion Meets Technology
          </p>
        </div>

        {/* Launch Box */}
        <div className="bg-white/70 backdrop-blur-md rounded-3xl p-8 border border-neutral-300 shadow-xl space-y-4">
          <p className="text-neutral-600 font-semibold tracking-wide">
            🚀 Launching Soon
          </p>
          <p className="text-3xl font-bold text-neutral-900">
            Stay Tuned for the Big Reveal!
          </p>
          <p className="text-neutral-700">
            We are crafting something amazing for you.
          </p>
        </div>

        {/* Footer */}
        <p className="text-sm text-neutral-600">
          © {new Date().getFullYear()} Glamoura. All rights reserved.
        </p>
      </div>
    </div>
  )
}
