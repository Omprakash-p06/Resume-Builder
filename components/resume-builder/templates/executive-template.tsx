"use client"

export function ExecutiveTemplate({ data }: { data: any }) {
  return (
    <div className="text-xs space-y-4 text-slate-900">
      {/* Sophisticated header with image support */}
      <div className="flex items-center gap-6 pb-4 border-b-2 border-blue-900">
        {data.personal.profileImage && (
          <img
            src={data.personal.profileImage || "/placeholder.svg"}
            alt={data.personal.fullName}
            className="w-24 h-24 rounded-full object-cover border-2 border-blue-900"
          />
        )}
        <div className="flex-1">
          <h1 className="text-3xl font-bold text-blue-900">{data.personal.fullName || "Your Name"}</h1>
          <p className="text-sm text-blue-700 mt-1 font-semibold">{data.personal.location}</p>
          <div className="flex gap-4 mt-2 text-xs">
            {data.personal.email && <span className="text-blue-700">{data.personal.email}</span>}
            {data.personal.phone && <span className="text-blue-700">{data.personal.phone}</span>}
          </div>
        </div>
      </div>

      {data.summary && (
        <div className="bg-blue-50 p-3 rounded border-l-4 border-blue-900">
          <p className="text-xs leading-relaxed text-slate-800">{data.summary}</p>
        </div>
      )}

      {data.experience?.length > 0 && (
        <div>
          <h2 className="text-sm font-bold text-blue-900 uppercase mb-2">Professional Experience</h2>
          {data.experience.map((exp: any) => (
            <div key={exp.id} className="mb-3 pl-3 border-l-2 border-blue-200">
              <p className="font-bold text-xs">{exp.jobTitle}</p>
              <p className="text-xs text-blue-700">{exp.company} • {exp.startDate} – {exp.endDate}</p>
              <p className="text-xs mt-1 leading-relaxed">{exp.description}</p>
            </div>
          ))}
        </div>
      )}

      {data.education?.length > 0 && (
        <div>
          <h2 className="text-sm font-bold text-blue-900 uppercase mb-2">Education</h2>
          {data.education.map((edu: any) => (
            <div key={edu.id} className="mb-2">
              <p className="font-bold text-xs">{edu.degree}</p>
              <p className="text-xs text-blue-700">{edu.school} • {edu.graduationDate}</p>
            </div>
          ))}
        </div>
      )}

      {data.skills?.length > 0 && (
        <div>
          <h2 className="text-sm font-bold text-blue-900 uppercase mb-2">Core Competencies</h2>
          <div className="flex flex-wrap gap-2">
            {data.skills.map((skill: any) => (
              <span key={skill.id} className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-xs font-medium">
                {skill.skill}
              </span>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}
