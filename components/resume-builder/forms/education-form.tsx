"use client"

import { Plus, Trash2 } from 'lucide-react'

interface EducationFormProps {
  data: any[]
  onChange: (data: any[]) => void
  isDark: boolean
}

export function EducationForm({ data, onChange, isDark }: EducationFormProps) {
  const handleAdd = () => {
    onChange([
      ...data,
      {
        id: Date.now().toString(),
        school: "",
        degree: "",
        field: "",
        graduationDate: "",
        description: "",
      },
    ])
  }

  const handleUpdate = (id: string, field: string, value: string) => {
    onChange(
      data.map((edu) => (edu.id === id ? { ...edu, [field]: value } : edu))
    )
  }

  const handleDelete = (id: string) => {
    onChange(data.filter((edu) => edu.id !== id))
  }

  return (
    <div className="space-y-4">
      {data.map((edu) => (
        <div
          key={edu.id}
          className={`${isDark ? "bg-black/20 border-white/10" : "bg-white/40 border-black/10"} border rounded-lg p-4 transition-all duration-200`}
        >
          <div className="flex justify-between items-center mb-4">
            <h3 className={`${isDark ? "text-white" : "text-slate-900"} font-medium`}>
              Education Entry
            </h3>
            <button
              onClick={() => handleDelete(edu.id)}
              className="text-red-400 hover:text-red-300 transition-colors"
            >
              <Trash2 className="w-4 h-4" />
            </button>
          </div>

          <div className="space-y-3">
            <input
              type="text"
              value={edu.school}
              onChange={(e) => handleUpdate(edu.id, "school", e.target.value)}
              className={`w-full ${isDark ? "bg-black/20 border-white/10 text-white placeholder:text-white/40 hover:bg-black/30 focus:bg-black/30 focus:border-white/30" : "bg-white/40 border-black/10 text-slate-900 placeholder:text-slate-500 hover:bg-white/60 focus:bg-white/60 focus:border-black/30"} backdrop-blur-sm border rounded-lg h-10 px-3 transition-all duration-200`}
              placeholder="School/University"
            />

            <div className="grid grid-cols-2 gap-3">
              <input
                type="text"
                value={edu.degree}
                onChange={(e) => handleUpdate(edu.id, "degree", e.target.value)}
                className={`w-full ${isDark ? "bg-black/20 border-white/10 text-white placeholder:text-white/40 hover:bg-black/30 focus:bg-black/30 focus:border-white/30" : "bg-white/40 border-black/10 text-slate-900 placeholder:text-slate-500 hover:bg-white/60 focus:bg-white/60 focus:border-black/30"} backdrop-blur-sm border rounded-lg h-10 px-3 transition-all duration-200`}
                placeholder="Degree"
              />

              <input
                type="text"
                value={edu.field}
                onChange={(e) => handleUpdate(edu.id, "field", e.target.value)}
                className={`w-full ${isDark ? "bg-black/20 border-white/10 text-white placeholder:text-white/40 hover:bg-black/30 focus:bg-black/30 focus:border-white/30" : "bg-white/40 border-black/10 text-slate-900 placeholder:text-slate-500 hover:bg-white/60 focus:bg-white/60 focus:border-black/30"} backdrop-blur-sm border rounded-lg h-10 px-3 transition-all duration-200`}
                placeholder="Field of Study"
              />
            </div>

            <input
              type="text"
              value={edu.graduationDate}
              onChange={(e) =>
                handleUpdate(edu.id, "graduationDate", e.target.value)
              }
              className={`w-full ${isDark ? "bg-black/20 border-white/10 text-white placeholder:text-white/40 hover:bg-black/30 focus:bg-black/30 focus:border-white/30" : "bg-white/40 border-black/10 text-slate-900 placeholder:text-slate-500 hover:bg-white/60 focus:bg-white/60 focus:border-black/30"} backdrop-blur-sm border rounded-lg h-10 px-3 transition-all duration-200`}
              placeholder="Graduation Date (MM/YYYY)"
            />

            <textarea
              value={edu.description}
              onChange={(e) =>
                handleUpdate(edu.id, "description", e.target.value)
              }
              className={`w-full ${isDark ? "bg-black/20 border-white/10 text-white placeholder:text-white/40 hover:bg-black/30 focus:bg-black/30 focus:border-white/30" : "bg-white/40 border-black/10 text-slate-900 placeholder:text-slate-500 hover:bg-white/60 focus:bg-white/60 focus:border-black/30"} backdrop-blur-sm border rounded-lg p-3 transition-all duration-200 resize-none h-20`}
              placeholder="Additional details..."
            />
          </div>
        </div>
      ))}

      <button
        onClick={handleAdd}
        className={`w-full flex items-center justify-center gap-2 ${isDark ? "bg-gradient-to-r from-teal-500 to-teal-600 hover:from-teal-600 hover:to-teal-700 text-white shadow-lg" : "bg-gradient-to-r from-slate-700 to-slate-800 hover:from-slate-800 hover:to-slate-900 text-white shadow-lg"} border-0 rounded-lg py-2.5 transition-all duration-300 font-medium`}
      >
        <Plus className="w-5 h-5" />
        Add Education
      </button>
    </div>
  )
}
