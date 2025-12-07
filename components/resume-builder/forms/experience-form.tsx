"use client"

import { Plus, Trash2 } from 'lucide-react'
import { useState } from "react"

interface ExperienceFormProps {
  data: any[]
  onChange: (data: any[]) => void
  isDark: boolean
}

export function ExperienceForm({ data, onChange, isDark }: ExperienceFormProps) {
  const handleAdd = () => {
    onChange([
      ...data,
      {
        id: Date.now().toString(),
        jobTitle: "",
        company: "",
        location: "",
        startDate: "",
        endDate: "",
        description: "",
      },
    ])
  }

  const handleUpdate = (id: string, field: string, value: string) => {
    onChange(
      data.map((exp) => (exp.id === id ? { ...exp, [field]: value } : exp))
    )
  }

  const handleDelete = (id: string) => {
    onChange(data.filter((exp) => exp.id !== id))
  }

  return (
    <div className="space-y-4">
      {data.map((exp) => (
        <div
          key={exp.id}
          className={`${isDark ? "bg-black/20 border-white/10" : "bg-white/40 border-black/10"} border rounded-lg p-4 transition-all duration-200`}
        >
          <div className="flex justify-between items-center mb-4">
            <h3 className={`${isDark ? "text-white" : "text-slate-900"} font-medium`}>
              Experience Entry
            </h3>
            <button
              onClick={() => handleDelete(exp.id)}
              className="text-red-400 hover:text-red-300 transition-colors"
            >
              <Trash2 className="w-4 h-4" />
            </button>
          </div>

          <div className="space-y-3">
            <input
              type="text"
              value={exp.jobTitle}
              onChange={(e) => handleUpdate(exp.id, "jobTitle", e.target.value)}
              className={`w-full ${isDark ? "bg-black/20 border-white/10 text-white placeholder:text-white/40 hover:bg-black/30 focus:bg-black/30 focus:border-white/30" : "bg-white/40 border-black/10 text-slate-900 placeholder:text-slate-500 hover:bg-white/60 focus:bg-white/60 focus:border-black/30"} backdrop-blur-sm border rounded-lg h-10 px-3 transition-all duration-200`}
              placeholder="Job Title"
            />

            <input
              type="text"
              value={exp.company}
              onChange={(e) => handleUpdate(exp.id, "company", e.target.value)}
              className={`w-full ${isDark ? "bg-black/20 border-white/10 text-white placeholder:text-white/40 hover:bg-black/30 focus:bg-black/30 focus:border-white/30" : "bg-white/40 border-black/10 text-slate-900 placeholder:text-slate-500 hover:bg-white/60 focus:bg-white/60 focus:border-black/30"} backdrop-blur-sm border rounded-lg h-10 px-3 transition-all duration-200`}
              placeholder="Company"
            />

            <input
              type="text"
              value={exp.location}
              onChange={(e) => handleUpdate(exp.id, "location", e.target.value)}
              className={`w-full ${isDark ? "bg-black/20 border-white/10 text-white placeholder:text-white/40 hover:bg-black/30 focus:bg-black/30 focus:border-white/30" : "bg-white/40 border-black/10 text-slate-900 placeholder:text-slate-500 hover:bg-white/60 focus:bg-white/60 focus:border-black/30"} backdrop-blur-sm border rounded-lg h-10 px-3 transition-all duration-200`}
              placeholder="Location"
            />

            <div className="grid grid-cols-2 gap-3">
              <input
                type="text"
                value={exp.startDate}
                onChange={(e) =>
                  handleUpdate(exp.id, "startDate", e.target.value)
                }
                className={`w-full ${isDark ? "bg-black/20 border-white/10 text-white placeholder:text-white/40 hover:bg-black/30 focus:bg-black/30 focus:border-white/30" : "bg-white/40 border-black/10 text-slate-900 placeholder:text-slate-500 hover:bg-white/60 focus:bg-white/60 focus:border-black/30"} backdrop-blur-sm border rounded-lg h-10 px-3 transition-all duration-200`}
                placeholder="Start Date (MM/YYYY)"
              />
              <input
                type="text"
                value={exp.endDate}
                onChange={(e) => handleUpdate(exp.id, "endDate", e.target.value)}
                className={`w-full ${isDark ? "bg-black/20 border-white/10 text-white placeholder:text-white/40 hover:bg-black/30 focus:bg-black/30 focus:border-white/30" : "bg-white/40 border-black/10 text-slate-900 placeholder:text-slate-500 hover:bg-white/60 focus:bg-white/60 focus:border-black/30"} backdrop-blur-sm border rounded-lg h-10 px-3 transition-all duration-200`}
                placeholder="End Date (MM/YYYY)"
              />
            </div>

            <textarea
              value={exp.description}
              onChange={(e) =>
                handleUpdate(exp.id, "description", e.target.value)
              }
              className={`w-full ${isDark ? "bg-black/20 border-white/10 text-white placeholder:text-white/40 hover:bg-black/30 focus:bg-black/30 focus:border-white/30" : "bg-white/40 border-black/10 text-slate-900 placeholder:text-slate-500 hover:bg-white/60 focus:bg-white/60 focus:border-black/30"} backdrop-blur-sm border rounded-lg p-3 transition-all duration-200 resize-none h-24`}
              placeholder="Job Description..."
            />
          </div>
        </div>
      ))}

      <button
        onClick={handleAdd}
        className={`w-full flex items-center justify-center gap-2 bg-gradient-to-r from-teal-500 to-teal-600 hover:from-teal-600 hover:to-teal-700 text-white shadow-lg border-0 rounded-lg py-2.5 transition-all duration-300 font-medium`}
      >
        <Plus className="w-5 h-5" />
        Add Experience
      </button>
    </div>
  )
}
