"use client"

export function MinimalistTemplate({ data }: { data: any }) {
  return (
    <div className="text-sm space-y-5 text-slate-900">
      {/* Header with optional image */}
      <div className="flex items-start gap-4 pb-4 border-b border-slate-200">
        {data.personal.profileImage && (
          <img
            src={data.personal.profileImage || "/placeholder.svg"}
            alt={data.personal.fullName}
            className="w-20 h-20 rounded-full object-cover"
          />
        )}
        <div className="flex-1">
          <h1 className="text-2xl font-light tracking-wide">{data.personal.fullName || "Your Name"}</h1>
          <p className="text-xs text-slate-600 mt-1">{data.personal.location}</p>
          <div className="flex gap-3 text-xs mt-2 text-slate-700">
            {data.personal.email && <span>{data.personal.email}</span>}
            {data.personal.phone && <span>{data.personal.phone}</span>}
          </div>
        </div>
      </div>

      {data.summary && (
        <div>
          <p className="text-xs leading-relaxed text-slate-700">{data.summary}</p>
        </div>
      )}

      {data.experience?.length > 0 && (
        <div>
          <h3 className="text-xs font-semibold uppercase tracking-widest mb-3">Experience</h3>
          {data.experience.map((exp: any) => (
            <div key={exp.id} className="mb-4">
              <p className="font-medium text-xs">{exp.jobTitle}</p>
              <p className="text-xs text-slate-600">{exp.company} • {exp.startDate} - {exp.endDate}</p>
              <p className="text-xs text-slate-700 mt-1 leading-relaxed">{exp.description}</p>
            </div>
          ))}
        </div>
      )}

      {data.education?.length > 0 && (
        <div>
          <h3 className="text-xs font-semibold uppercase tracking-widest mb-3">Education</h3>
          {data.education.map((edu: any) => (
            <div key={edu.id} className="mb-3">
              <p className="font-medium text-xs">{edu.degree}</p>
              <p className="text-xs text-slate-600">{edu.school} • {edu.graduationDate}</p>
            </div>
          ))}
        </div>
      )}

      {data.skills?.length > 0 && (
        <div>
          <h3 className="text-xs font-semibold uppercase tracking-widest mb-2">Skills</h3>
          <p className="text-xs text-slate-700 leading-relaxed">{data.skills.map((s: any) => s.skill).join(" • ")}</p>
        </div>
      )}
    </div>
  )
}
