"use client"

interface SummaryFormProps {
  data: string
  onChange: (data: string) => void
  isDark: boolean
}

export function SummaryForm({ data, onChange, isDark }: SummaryFormProps) {
  return (
    <div>
      <label className={`block ${isDark ? "text-white/80" : "text-slate-700"} text-sm font-medium mb-2`}>
        Professional Summary
      </label>
      <textarea
        value={data}
        onChange={(e) => onChange(e.target.value)}
        className={`w-full ${isDark ? "bg-black/20 border-white/10 text-white placeholder:text-white/40 hover:bg-black/30 focus:bg-black/30 focus:border-white/30" : "bg-white/40 border-black/10 text-slate-900 placeholder:text-slate-500 hover:bg-white/60 focus:bg-white/60 focus:border-black/30"} backdrop-blur-sm border rounded-lg p-3 transition-all duration-200 resize-none h-32`}
        placeholder="Write a brief summary about yourself..."
      />
    </div>
  )
}
