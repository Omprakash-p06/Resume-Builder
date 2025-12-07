"use client"

import type React from "react"

interface PersonalInfoFormProps {
  data: any
  onChange: (data: any) => void
  isDark: boolean
  showPhotoUpload?: boolean
}

export function PersonalInfoForm({ data, onChange, isDark, showPhotoUpload = false }: PersonalInfoFormProps) {
  const handleChange = (field: string, value: string) => {
    onChange({ ...data, [field]: value })
  }

  // Compress image to prevent localStorage quota issues
  const compressImage = (file: File, maxSizeKB: number = 100): Promise<string> => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader()
      reader.onload = (event) => {
        const img = new Image()
        img.onload = () => {
          const canvas = document.createElement('canvas')
          let { width, height } = img

          // Scale down if too large
          const maxDimension = 300
          if (width > maxDimension || height > maxDimension) {
            if (width > height) {
              height = (height / width) * maxDimension
              width = maxDimension
            } else {
              width = (width / height) * maxDimension
              height = maxDimension
            }
          }

          canvas.width = width
          canvas.height = height
          const ctx = canvas.getContext('2d')
          ctx?.drawImage(img, 0, 0, width, height)

          // Compress with quality reduction
          let quality = 0.7
          let result = canvas.toDataURL('image/jpeg', quality)

          // Further reduce quality if still too large
          while (result.length > maxSizeKB * 1024 && quality > 0.1) {
            quality -= 0.1
            result = canvas.toDataURL('image/jpeg', quality)
          }

          resolve(result)
        }
        img.onerror = reject
        img.src = event.target?.result as string
      }
      reader.onerror = reject
      reader.readAsDataURL(file)
    })
  }

  const handlePhotoUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (file) {
      try {
        const compressedImage = await compressImage(file)
        handleChange("profileImage", compressedImage)
      } catch (error) {
        console.error('Error compressing image:', error)
        // Fallback to original if compression fails
        const reader = new FileReader()
        reader.onload = (event) => {
          const base64 = event.target?.result as string
          handleChange("profileImage", base64)
        }
        reader.readAsDataURL(file)
      }
    }
  }

  return (
    <div className="space-y-4">
      {showPhotoUpload && (
        <div>
          <label className={`block ${isDark ? "text-white/80" : "text-slate-700"} text-sm font-medium mb-2`}>
            Profile Photo
          </label>
          <div className="flex items-center gap-4">
            {data.profileImage && (
              <img
                src={data.profileImage || "/placeholder.svg"}
                alt="Profile"
                className="w-16 h-16 rounded-full object-cover border-2 border-teal-500"
              />
            )}
            <input
              type="file"
              accept="image/*"
              onChange={handlePhotoUpload}
              className={`flex-1 ${isDark ? "bg-black/20 border-white/10 text-white placeholder:text-white/40 hover:bg-black/30 focus:bg-black/30 focus:border-white/30" : "bg-white/40 border-black/10 text-slate-900 placeholder:text-slate-500 hover:bg-white/60 focus:bg-white/60 focus:border-black/30"} backdrop-blur-sm border rounded-lg h-10 px-3 transition-all duration-200 file:mr-2 file:py-1 file:px-2 file:rounded file:border-0 file:text-sm file:font-semibold file:bg-teal-500 file:text-white hover:file:bg-teal-600`}
            />
          </div>
        </div>
      )}

      <div>
        <label className={`block ${isDark ? "text-white/80" : "text-slate-700"} text-sm font-medium mb-2`}>
          Full Name
        </label>
        <input
          type="text"
          value={data.fullName}
          onChange={(e) => handleChange("fullName", e.target.value)}
          className={`w-full ${isDark ? "bg-black/20 border-white/10 text-white placeholder:text-white/40 hover:bg-black/30 focus:bg-black/30 focus:border-white/30" : "bg-white/40 border-black/10 text-slate-900 placeholder:text-slate-500 hover:bg-white/60 focus:bg-white/60 focus:border-black/30"} backdrop-blur-sm border rounded-lg h-10 px-3 transition-all duration-200`}
          placeholder="John Doe"
        />
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div>
          <label className={`block ${isDark ? "text-white/80" : "text-slate-700"} text-sm font-medium mb-2`}>
            Email
          </label>
          <input
            type="email"
            value={data.email}
            onChange={(e) => handleChange("email", e.target.value)}
            className={`w-full ${isDark ? "bg-black/20 border-white/10 text-white placeholder:text-white/40 hover:bg-black/30 focus:bg-black/30 focus:border-white/30" : "bg-white/40 border-black/10 text-slate-900 placeholder:text-slate-500 hover:bg-white/60 focus:bg-white/60 focus:border-black/30"} backdrop-blur-sm border rounded-lg h-10 px-3 transition-all duration-200`}
            placeholder="john@example.com"
          />
        </div>

        <div>
          <label className={`block ${isDark ? "text-white/80" : "text-slate-700"} text-sm font-medium mb-2`}>
            Phone
          </label>
          <input
            type="tel"
            value={data.phone}
            onChange={(e) => handleChange("phone", e.target.value)}
            className={`w-full ${isDark ? "bg-black/20 border-white/10 text-white placeholder:text-white/40 hover:bg-black/30 focus:bg-black/30 focus:border-white/30" : "bg-white/40 border-black/10 text-slate-900 placeholder:text-slate-500 hover:bg-white/60 focus:bg-white/60 focus:border-black/30"} backdrop-blur-sm border rounded-lg h-10 px-3 transition-all duration-200`}
            placeholder="(123) 456-7890"
          />
        </div>
      </div>

      <div>
        <label className={`block ${isDark ? "text-white/80" : "text-slate-700"} text-sm font-medium mb-2`}>
          Location
        </label>
        <input
          type="text"
          value={data.location}
          onChange={(e) => handleChange("location", e.target.value)}
          className={`w-full ${isDark ? "bg-black/20 border-white/10 text-white placeholder:text-white/40 hover:bg-black/30 focus:bg-black/30 focus:border-white/30" : "bg-white/40 border-black/10 text-slate-900 placeholder:text-slate-500 hover:bg-white/60 focus:bg-white/60 focus:border-black/30"} backdrop-blur-sm border rounded-lg h-10 px-3 transition-all duration-200`}
          placeholder="City, State"
        />
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div>
          <label className={`block ${isDark ? "text-white/80" : "text-slate-700"} text-sm font-medium mb-2`}>
            LinkedIn URL
          </label>
          <input
            type="url"
            value={data.linkedIn}
            onChange={(e) => handleChange("linkedIn", e.target.value)}
            className={`w-full ${isDark ? "bg-black/20 border-white/10 text-white placeholder:text-white/40 hover:bg-black/30 focus:bg-black/30 focus:border-white/30" : "bg-white/40 border-black/10 text-slate-900 placeholder:text-slate-500 hover:bg-white/60 focus:bg-white/60 focus:border-black/30"} backdrop-blur-sm border rounded-lg h-10 px-3 transition-all duration-200`}
            placeholder="linkedin.com/in/..."
          />
        </div>

        <div>
          <label className={`block ${isDark ? "text-white/80" : "text-slate-700"} text-sm font-medium mb-2`}>
            Portfolio URL
          </label>
          <input
            type="url"
            value={data.portfolio}
            onChange={(e) => handleChange("portfolio", e.target.value)}
            className={`w-full ${isDark ? "bg-black/20 border-white/10 text-white placeholder:text-white/40 hover:bg-black/30 focus:bg-black/30 focus:border-white/30" : "bg-white/40 border-black/10 text-slate-900 placeholder:text-slate-500 hover:bg-white/60 focus:bg-white/60 focus:border-black/30"} backdrop-blur-sm border rounded-lg h-10 px-3 transition-all duration-200`}
            placeholder="yourportfolio.com"
          />
        </div>
      </div>
    </div>
  )
}
