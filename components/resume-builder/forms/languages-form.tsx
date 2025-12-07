"use client"

import { Plus, Trash2 } from 'lucide-react'

interface LanguagesFormProps {
  data: any[]
  onChange: (data: any[]) => void
  isDark: boolean
}

export function LanguagesForm({ data, onChange, isDark }: LanguagesFormProps) {
  const handleAdd = () => {
    onChange([
      ...data,
      {
        id: Date.now().toString(),
        language: "",
        proficiency: "Intermediate",
      },
    ])
  }

  const handleUpdate = (id: string, field: string, value: string) => {
    onChange(
      data.map((lang) => (lang.id === id ? { ...lang, [field]: value } : lang))
    )
  }

  const handleDelete = (id: string) => {
    onChange(data.filter((lang) => lang.id !== id))
  }

  return (
    <div className="space-y-4">
      {data.map((lang) => (
        <div
          key={lang.id}
          className={`${isDark ? "bg-black/20 border-white/10" : "bg-white/40 border-black/10"} border rounded-lg p-4 flex gap-3 transition-all duration-200`}
        >
          <div className="flex-1 space-y-3">
            <input
              type="text"
              value={lang.language}
              onChange={(e) => handleUpdate(lang.id, "language", e.target.value)}
              className={`w-full ${isDark ? "bg-black/20 border-white/10 text-white placeholder:text-white/40 hover:bg-black/30 focus:bg-black/30 focus:border-white/30" : "bg-white/40 border-black/10 text-slate-900 placeholder:text-slate-500 hover:bg-white/60 focus:bg-white/60 focus:border-black/30"} backdrop-blur-sm border rounded-lg h-10 px-3 transition-all duration-200`}
              placeholder="Language"
            />

            <select
              value={lang.proficiency}
              onChange={(e) =>
                handleUpdate(lang.id, "proficiency", e.target.value)
              }
              className={`w-full ${isDark ? "bg-black/20 border-white/10 text-white hover:bg-black/30 focus:bg-black/30 focus:border-white/30" : "bg-white/40 border-black/10 text-slate-900 hover:bg-white/60 focus:bg-white/60 focus:border-black/30"} backdrop-blur-sm border rounded-lg h-10 px-3 transition-all duration-200`}
            >
              <option>Beginner</option>
              <option>Intermediate</option>
              <option>Fluent</option>
              <option>Native</option>
            </select>
          </div>

          <button
            onClick={() => handleDelete(lang.id)}
            className="text-red-400 hover:text-red-300 transition-colors h-fit"
          >
            <Trash2 className="w-4 h-4" />
          </button>
        </div>
      ))}

      <button
        onClick={handleAdd}
        className={`w-full flex items-center justify-center gap-2 bg-gradient-to-r from-teal-500 to-teal-600 hover:from-teal-600 hover:to-teal-700 text-white shadow-lg border-0 rounded-lg py-2.5 transition-all duration-300 font-medium`}
      >
        <Plus className="w-5 h-5" />
        Add Language
      </button>
    </div>
  )
}
