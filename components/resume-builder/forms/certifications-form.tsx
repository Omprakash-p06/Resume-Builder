"use client"

import { Plus, Trash2 } from 'lucide-react'

interface CertificationsFormProps {
  data: any[]
  onChange: (data: any[]) => void
  isDark: boolean
}

export function CertificationsForm({ data, onChange, isDark }: CertificationsFormProps) {
  const handleAdd = () => {
    onChange([
      ...data,
      {
        id: Date.now().toString(),
        name: "",
        issuer: "",
        issueDate: "",
        expiryDate: "",
      },
    ])
  }

  const handleUpdate = (id: string, field: string, value: string) => {
    onChange(
      data.map((cert) =>
        cert.id === id ? { ...cert, [field]: value } : cert
      )
    )
  }

  const handleDelete = (id: string) => {
    onChange(data.filter((cert) => cert.id !== id))
  }

  return (
    <div className="space-y-4">
      {data.map((cert) => (
        <div
          key={cert.id}
          className={`${isDark ? "bg-black/20 border-white/10" : "bg-white/40 border-black/10"} border rounded-lg p-4 transition-all duration-200`}
        >
          <div className="flex justify-between items-center mb-4">
            <h3 className={`${isDark ? "text-white" : "text-slate-900"} font-medium`}>
              Certification
            </h3>
            <button
              onClick={() => handleDelete(cert.id)}
              className="text-red-400 hover:text-red-300 transition-colors"
            >
              <Trash2 className="w-4 h-4" />
            </button>
          </div>

          <div className="space-y-3">
            <input
              type="text"
              value={cert.name}
              onChange={(e) => handleUpdate(cert.id, "name", e.target.value)}
              className={`w-full ${isDark ? "bg-black/20 border-white/10 text-white placeholder:text-white/40 hover:bg-black/30 focus:bg-black/30 focus:border-white/30" : "bg-white/40 border-black/10 text-slate-900 placeholder:text-slate-500 hover:bg-white/60 focus:bg-white/60 focus:border-black/30"} backdrop-blur-sm border rounded-lg h-10 px-3 transition-all duration-200`}
              placeholder="Certification Name"
            />

            <input
              type="text"
              value={cert.issuer}
              onChange={(e) =>
                handleUpdate(cert.id, "issuer", e.target.value)
              }
              className={`w-full ${isDark ? "bg-black/20 border-white/10 text-white placeholder:text-white/40 hover:bg-black/30 focus:bg-black/30 focus:border-white/30" : "bg-white/40 border-black/10 text-slate-900 placeholder:text-slate-500 hover:bg-white/60 focus:bg-white/60 focus:border-black/30"} backdrop-blur-sm border rounded-lg h-10 px-3 transition-all duration-200`}
              placeholder="Issuing Organization"
            />

            <div className="grid grid-cols-2 gap-3">
              <input
                type="text"
                value={cert.issueDate}
                onChange={(e) =>
                  handleUpdate(cert.id, "issueDate", e.target.value)
                }
                className={`w-full ${isDark ? "bg-black/20 border-white/10 text-white placeholder:text-white/40 hover:bg-black/30 focus:bg-black/30 focus:border-white/30" : "bg-white/40 border-black/10 text-slate-900 placeholder:text-slate-500 hover:bg-white/60 focus:bg-white/60 focus:border-black/30"} backdrop-blur-sm border rounded-lg h-10 px-3 transition-all duration-200`}
                placeholder="Issue Date (MM/YYYY)"
              />

              <input
                type="text"
                value={cert.expiryDate}
                onChange={(e) =>
                  handleUpdate(cert.id, "expiryDate", e.target.value)
                }
                className={`w-full ${isDark ? "bg-black/20 border-white/10 text-white placeholder:text-white/40 hover:bg-black/30 focus:bg-black/30 focus:border-white/30" : "bg-white/40 border-black/10 text-slate-900 placeholder:text-slate-500 hover:bg-white/60 focus:bg-white/60 focus:border-black/30"} backdrop-blur-sm border rounded-lg h-10 px-3 transition-all duration-200`}
                placeholder="Expiry Date (MM/YYYY)"
              />
            </div>
          </div>
        </div>
      ))}

      <button
        onClick={handleAdd}
        className={`w-full flex items-center justify-center gap-2 ${isDark ? "bg-gradient-to-r from-teal-500 to-teal-600 hover:from-teal-600 hover:to-teal-700 text-white shadow-lg" : "bg-gradient-to-r from-slate-700 to-slate-800 hover:from-slate-800 hover:to-slate-900 text-white shadow-lg"} border-0 rounded-lg py-2.5 transition-all duration-300 font-medium`}
      >
        <Plus className="w-5 h-5" />
        Add Certification
      </button>
    </div>
  )
}
