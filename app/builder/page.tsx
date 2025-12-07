"use client"

import { useState, useEffect } from "react"
import { ResumeBuilder } from "@/components/resume-builder/resume-builder"
import { useToast } from "@/hooks/use-toast"
import { Toaster } from "@/components/ui/toaster"
import { Button } from "@/components/ui/button"

interface UserData {
  firstName: string
  lastName: string
  email: string
  phone: string
  location: string
  jobTitle: string
}

export default function BuilderPage() {
  const [userData, setUserData] = useState<UserData | null>(null)
  const [isLoading, setIsLoading] = useState(true)
  const { toast } = useToast()

  useEffect(() => {
    const user = localStorage.getItem("resumeUser")
    if (user) {
      try {
        setUserData(JSON.parse(user))
      } catch (error) {
        console.error("Error parsing user data:", error)
      }
    }
    setIsLoading(false)
  }, [])

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-teal-950 via-slate-900 to-orange-950">
        <div className="text-white/60">Loading...</div>
      </div>
    )
  }

  if (!userData) {
    return (
      <div className="min-h-screen flex items-center justify-center p-4 bg-gradient-to-br from-teal-950 via-slate-900 to-orange-950">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-white mb-4">Resume Builder</h1>
          <p className="text-white/60 mb-8">Please provide your details to continue</p>
          <Button
            onClick={() => (window.location.href = "/")}
            className="bg-white/20 backdrop-blur-sm border border-white/20 hover:bg-white/30 text-white font-medium rounded-2xl px-8 py-3 transition-all duration-300 transform hover:scale-[1.02] hover:shadow-lg"
          >
            Go Back and Enter Details
          </Button>
        </div>
      </div>
    )
  }

  return (
    <>
      <ResumeBuilder />
      <Toaster />
    </>
  )
}
