"use client"

export function StartupTemplate({ data }: { data: any }) {
  return (
    <div className="text-xs space-y-4 text-slate-900">
      {/* Modern startup header with image */}
      <div className="flex items-start gap-4 pb-4 border-b-2 border-orange-500">
        {data.personal.profileImage && (
          <img
            src={data.personal.profileImage || "/placeholder.svg"}
            alt={data.personal.fullName}
            className="w-16 h-16 rounded-lg object-cover"
          />
        )}
        <div className="flex-1">
          <h1 className="text-2xl font-black text-orange-600">{data.personal.fullName || "Your Name"}</h1>
          <p className="text-xs text-orange-500 font-bold mt-1">📍 {data.personal.location}</p>
          <div className="flex gap-3 text-xs mt-2">
            {data.personal.email && <span className="text-slate-600">{data.personal.email}</span>}
            {data.personal.phone && <span className="text-slate-600">{data.personal.phone}</span>}
          </div>
        </div>
      </div>

      {data.summary && (
        <div className="bg-orange-50 border-l-4 border-orange-500 p-3 rounded">
          <p className="text-xs leading-relaxed font-medium">{data.summary}</p>
        </div>
      )}

      {data.projects?.length > 0 && (
        <div>
          <h2 className="text-sm font-black text-orange-600 uppercase mb-2">Key Projects</h2>
          {data.projects.map((project: any) => (
            <div key={project.id} className="mb-3 p-2 bg-orange-50 rounded">
              <p className="font-bold text-xs text-orange-600">{project.name}</p>
              <p className="text-xs mt-1">{project.description}</p>
            </div>
          ))}
        </div>
      )}

      {data.experience?.length > 0 && (
        <div>
          <h2 className="text-sm font-black text-orange-600 uppercase mb-2">Experience</h2>
          {data.experience.map((exp: any) => (
            <div key={exp.id} className="mb-2">
              <p className="font-bold text-xs">{exp.jobTitle}</p>
              <p className="text-xs text-orange-600">{exp.company} • {exp.startDate} - {exp.endDate}</p>
            </div>
          ))}
        </div>
      )}

      {data.skills?.length > 0 && (
        <div>
          <h2 className="text-sm font-black text-orange-600 uppercase mb-2">Skills</h2>
          <div className="flex flex-wrap gap-1">
            {data.skills.map((skill: any) => (
              <span key={skill.id} className="bg-orange-600 text-white px-2 py-1 rounded text-xs font-bold">
                {skill.skill}
              </span>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}
