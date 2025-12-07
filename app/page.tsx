"use client"

import { useState } from "react"
import { useToast } from "@/hooks/use-toast"
import { Toaster } from "@/components/ui/toaster"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Mail, Phone, MapPin, Briefcase } from 'lucide-react'

export default function HomePage() {
  const [isLoading, setIsLoading] = useState(false)
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    location: "",
    jobTitle: "",
  })
  const { toast } = useToast()

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    // Validation
    if (!formData.firstName.trim()) {
      toast({
        title: "Missing first name",
        description: "Please enter your first name.",
        variant: "destructive",
      })
      return
    }
    if (!formData.lastName.trim()) {
      toast({
        title: "Missing last name",
        description: "Please enter your last name.",
        variant: "destructive",
      })
      return
    }
    if (!formData.email.trim()) {
      toast({
        title: "Missing email",
        description: "Please enter your email.",
        variant: "destructive",
      })
      return
    }

    setIsLoading(true)

    // Save user details to localStorage and redirect
    setTimeout(() => {
      setIsLoading(false)
      localStorage.setItem("resumeUser", JSON.stringify(formData))
      window.location.href = "/builder"
      toast({
        title: "Great! Let's build your resume",
        description: "Redirecting you to the resume builder...",
      })
    }, 1000)
  }

  return (
    <div
      className="min-h-screen flex items-center justify-center p-4"
      style={{
        backgroundImage: "url('/bg.jpeg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="w-full max-w-md mx-auto">
        <div className="bg-black/40 backdrop-blur-xl border border-white/10 rounded-[32px] p-8 shadow-2xl transform transition-all duration-300 hover:scale-[1.02] hover:shadow-3xl">
          {/* Header */}
          <h1 className="text-3xl font-normal text-white mb-3">Build Your Resume</h1>
          <p className="text-white/60 text-sm mb-8">Enter your details to get started</p>

          <form onSubmit={handleSubmit} className="space-y-4">
            {/* Name fields */}
            <div className="grid grid-cols-2 gap-4">
              <div className="relative">
                <Input
                  type="text"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleInputChange}
                  className="bg-black/20 backdrop-blur-sm border border-white/10 rounded-2xl h-12 text-white placeholder:text-white/40 focus:border-white/30 focus:ring-0 text-base transition-all duration-200 hover:bg-black/30 focus:bg-black/30"
                  placeholder="First name"
                />
              </div>
              <div className="relative">
                <Input
                  type="text"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleInputChange}
                  className="bg-black/20 backdrop-blur-sm border border-white/10 rounded-2xl h-12 text-white placeholder:text-white/40 focus:border-white/30 focus:ring-0 text-base transition-all duration-200 hover:bg-black/30 focus:bg-black/30"
                  placeholder="Last name"
                />
              </div>
            </div>

            {/* Email field */}
            <div className="relative">
              <Mail className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-white/40" />
              <Input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                className="bg-black/20 backdrop-blur-sm border border-white/10 rounded-2xl h-12 text-white placeholder:text-white/40 focus:border-white/30 focus:ring-0 pl-12 text-base transition-all duration-200 hover:bg-black/30 focus:bg-black/30"
                placeholder="your@email.com"
              />
            </div>

            {/* Phone field */}
            <div className="relative">
              <Phone className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-white/40" />
              <Input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleInputChange}
                className="bg-black/20 backdrop-blur-sm border border-white/10 rounded-2xl h-12 text-white placeholder:text-white/40 focus:border-white/30 focus:ring-0 pl-12 text-base transition-all duration-200 hover:bg-black/30 focus:bg-black/30"
                placeholder="(555) 123-4567"
              />
            </div>

            {/* Location field */}
            <div className="relative">
              <MapPin className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-white/40" />
              <Input
                type="text"
                name="location"
                value={formData.location}
                onChange={handleInputChange}
                className="bg-black/20 backdrop-blur-sm border border-white/10 rounded-2xl h-12 text-white placeholder:text-white/40 focus:border-white/30 focus:ring-0 pl-12 text-base transition-all duration-200 hover:bg-black/30 focus:bg-black/30"
                placeholder="City, State"
              />
            </div>

            {/* Job Title field */}
            <div className="relative">
              <Briefcase className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-white/40" />
              <Input
                type="text"
                name="jobTitle"
                value={formData.jobTitle}
                onChange={handleInputChange}
                className="bg-black/20 backdrop-blur-sm border border-white/10 rounded-2xl h-12 text-white placeholder:text-white/40 focus:border-white/30 focus:ring-0 pl-12 text-base transition-all duration-200 hover:bg-black/30 focus:bg-black/30"
                placeholder="e.g., Software Engineer"
              />
            </div>

            {/* Submit button */}
            <Button
              type="submit"
              className="w-full bg-white/20 backdrop-blur-sm border border-white/20 hover:bg-white/30 text-white font-medium rounded-2xl h-12 mt-8 text-base transition-all duration-300 transform hover:scale-[1.02] hover:shadow-lg active:scale-[0.98]"
              disabled={isLoading}
            >
              {isLoading ? "Starting builder..." : "Start Building Resume"}
            </Button>
          </form>

          <p className="text-center text-white/40 text-xs mt-6 pt-4 border-t border-white/10">
            Your information will be used to pre-fill your resume
          </p>
        </div>
      </div>
      <Toaster />
    </div>
  )
}
