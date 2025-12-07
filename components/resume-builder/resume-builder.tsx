"use client"

import { useState, useEffect, useCallback } from "react"
import { FormSection } from "./form-section"
import { PreviewSection } from "./preview-section"
import { Header } from "./header"
import { Footer } from "./footer"
import { useToast } from "@/hooks/use-toast"
import { exportResumeAsPDF } from "@/lib/pdf-export"

interface ResumeData {
  personal: {
    fullName: string
    email: string
    phone: string
    location: string
    linkedIn: string
    portfolio: string
    profileImage: string
  }
  summary: string
  experience: Array<{
    id: string
    jobTitle: string
    company: string
    location: string
    startDate: string
    endDate: string
    description: string
  }>
  education: Array<{
    id: string
    school: string
    degree: string
    field: string
    graduationDate: string
    description: string
  }>
  skills: Array<{
    id: string
    category: string
    skill: string
    proficiency: string
  }>
  projects: Array<{
    id: string
    name: string
    description: string
    techStack: string
    url: string
    github: string
  }>
  certifications: Array<{
    id: string
    name: string
    issuer: string
    issueDate: string
    expiryDate: string
  }>
  languages: Array<{
    id: string
    language: string
    proficiency: string
  }>
  socials: Array<{
    id: string
    platform: string
    url: string
  }>
}

export function ResumeBuilder() {
  const [activeSection, setActiveSection] = useState("personal")
  const [template, setTemplate] = useState("classic")
  const [autoSaved, setAutoSaved] = useState(false)
  const [isExporting, setIsExporting] = useState(false)
  const { toast } = useToast()

  const [resumeData, setResumeData] = useState<ResumeData>({
    personal: {
      fullName: "",
      email: "",
      phone: "",
      location: "",
      linkedIn: "",
      portfolio: "",
      profileImage: "",
    },
    summary: "",
    experience: [],
    education: [],
    skills: [],
    projects: [],
    certifications: [],
    languages: [],
    socials: [],
  })

  useEffect(() => {
    const savedTheme = localStorage.getItem("resumeTheme")
    const isDark = savedTheme !== "light"
  }, [])

  useEffect(() => {
    const savedData = localStorage.getItem("resumeData")
    const savedTemplate = localStorage.getItem("resumeTemplate")
    const userData = localStorage.getItem("resumeUser")

    // Start with saved resume data if it exists
    let baseData = savedData ? JSON.parse(savedData) : null

    // Always apply user data from home page if available
    if (userData) {
      try {
        const user = JSON.parse(userData)
        const personalFromUser = {
          fullName: `${user.firstName || ''} ${user.lastName || ''}`.trim(),
          email: user.email || "",
          phone: user.phone || "",
          location: user.location || "",
          linkedIn: baseData?.personal?.linkedIn || "",
          portfolio: baseData?.personal?.portfolio || "",
          profileImage: baseData?.personal?.profileImage || "",
        }
        const summaryFromUser = user.jobTitle ? `${user.jobTitle} with a passion for creating value.` : ""

        if (baseData) {
          // Merge user data with saved data (user data takes precedence for personal info)
          setResumeData({
            ...baseData,
            personal: personalFromUser,
            summary: baseData.summary || summaryFromUser,
          })
        } else {
          // No saved data, use user data to initialize
          setResumeData(prev => ({
            ...prev,
            personal: personalFromUser,
            summary: summaryFromUser,
          }))
        }
      } catch (error) {
        console.error("Error parsing user data:", error)
        if (baseData) setResumeData(baseData)
      }
    } else if (baseData) {
      setResumeData(baseData)
    }

    if (savedTemplate) {
      setTemplate(savedTemplate)
    }
  }, [])

  // Auto-save to localStorage with debounce
  const saveData = useCallback(() => {
    try {
      localStorage.setItem("resumeData", JSON.stringify(resumeData))
      localStorage.setItem("resumeTemplate", template)
      setAutoSaved(true)
      setTimeout(() => setAutoSaved(false), 2000)
    } catch (error) {
      if (error instanceof DOMException && error.name === 'QuotaExceededError') {
        toast({
          title: "Storage Full",
          description: "Browser storage is full. Consider exporting your data as JSON backup.",
          variant: "destructive",
        })
      }
      console.error('Error saving to localStorage:', error)
    }
  }, [resumeData, template, toast])

  useEffect(() => {
    const timer = setTimeout(saveData, 500)
    return () => clearTimeout(timer)
  }, [resumeData, template, saveData])

  const handleExportPDF = async () => {
    setIsExporting(true)
    try {
      const fileName = `${resumeData.personal.fullName || "resume"}.pdf`
      await exportResumeAsPDF("resume-preview", fileName)
      toast({
        title: "Success",
        description: "Resume exported as PDF successfully",
      })
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to export PDF. Please try again.",
        variant: "destructive",
      })
    } finally {
      setIsExporting(false)
    }
  }

  const handleExportJSON = () => {
    const dataStr = JSON.stringify(resumeData, null, 2)
    const dataBlob = new Blob([dataStr], { type: "application/json" })
    const url = URL.createObjectURL(dataBlob)
    const link = document.createElement("a")
    link.href = url
    link.download = `${resumeData.personal.fullName || "resume"}-backup.json`
    link.click()
    toast({
      title: "Exported",
      description: "Resume data exported as JSON",
    })
  }

  const handleClearData = () => {
    if (confirm("Are you sure? This will clear all your resume data.")) {
      setResumeData({
        personal: {
          fullName: "",
          email: "",
          phone: "",
          location: "",
          linkedIn: "",
          portfolio: "",
          profileImage: "",
        },
        summary: "",
        experience: [],
        education: [],
        skills: [],
        projects: [],
        certifications: [],
        languages: [],
        socials: [],
      })
      localStorage.removeItem("resumeData")
      toast({
        title: "Cleared",
        description: "All resume data has been cleared",
      })
    }
  }

  return (
    <div className="min-h-screen transition-all duration-300 bg-gradient-to-br from-teal-950 via-slate-900 to-orange-950">
      <Header autoSaved={autoSaved} />

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 p-6 max-w-7xl mx-auto">
        {/* Form Section */}
        <div className="w-full">
          <FormSection
            resumeData={resumeData}
            setResumeData={setResumeData}
            activeSection={activeSection}
            setActiveSection={setActiveSection}
            template={template}
            setTemplate={setTemplate}
            onExportJSON={handleExportJSON}
            onClearData={handleClearData}
            onExportPDF={handleExportPDF}
          />
        </div>

        {/* Preview Section - Sticky on desktop */}
        <div className="w-full lg:sticky lg:top-6 lg:h-fit">
          <PreviewSection resumeData={resumeData} template={template} />
        </div>
      </div>

      <Footer />
    </div>
  )
}
