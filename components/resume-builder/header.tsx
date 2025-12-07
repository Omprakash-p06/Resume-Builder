"use client"

import { LogOut, Sun, Moon } from 'lucide-react'
import { useState, useEffect } from 'react'

interface HeaderProps {
  autoSaved: boolean
}

export function Header({ autoSaved }: HeaderProps) {
  // const [isDark, setIsDark] = useState(true)

  // useEffect(() => {
  //   const savedTheme = localStorage.getItem("resumeTheme")
  //   if (savedTheme === "light") {
  //     setIsDark(false)
  //     document.documentElement.classList.remove("dark-mode")
  //   } else {
  //     setIsDark(true)
  //     document.documentElement.classList.add("dark-mode")
  //   }
  // }, [])

  // const toggleTheme = () => {
  //   const newIsDark = !isDark
  //   setIsDark(newIsDark)
  //   if (newIsDark) {
  //     localStorage.setItem("resumeTheme", "dark")
  //     document.documentElement.classList.add("dark-mode")
  //   } else {
  //     localStorage.setItem("resumeTheme", "light")
  //     document.documentElement.classList.remove("dark-mode")
  //   }
  // }

  return (
    <header className="bg-black/40 backdrop-blur-xl border-b border-white/10 sticky top-0 z-50 transition-all duration-300 animate-slide-in-down shadow-lg">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <h1 className="text-2xl font-bold text-white">
          Resume Builder
        </h1>

        <div className="flex items-center gap-4">
          {autoSaved && (
            <div className="flex items-center gap-2 text-green-400 text-sm animate-pulse">
              <div className="w-2 h-2 bg-green-400 rounded-full"></div>
              Auto-saved
            </div>
          )}
          {/* <button
            onClick={toggleTheme}
            className={`${isDark ? "bg-white/10 border-white/10 hover:bg-white/20 text-white" : "bg-black/10 border-black/10 hover:bg-black/20 text-slate-900"} backdrop-blur-sm border p-2 rounded-lg transition-all duration-300 transform hover:scale-110 active:scale-95`}
            title={isDark ? "Switch to light mode" : "Switch to dark mode"}
          >
            {isDark ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
          </button>

          <button
            onClick={onLogout}
            className={`${isDark ? "bg-white/10 border-white/10 hover:bg-white/20 text-white" : "bg-black/10 border-black/10 hover:bg-black/20 text-slate-900"} backdrop-blur-sm border px-4 py-2 rounded-lg transition-all duration-300 transform hover:scale-105 active:scale-95`}
          >
            <LogOut className="w-4 h-4" />
            Logout
          </button> */}
        </div>
      </div>
    </header>
  )
}
