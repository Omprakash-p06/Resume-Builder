"use client"

export function CreativeProTemplate({ data }: { data: any }) {
  return (
    <div className="text-xs space-y-4 text-slate-900">
      {/* Creative header with image */}
      <div className="bg-gradient-to-r from-purple-600 to-pink-600 text-white p-6 rounded-lg mb-2">
        <div className="flex items-center gap-4">
          {data.personal.profileImage && (
            <img
              src={data.personal.profileImage || "/placeholder.svg"}
              alt={data.personal.fullName}
              className="w-20 h-20 rounded-full object-cover border-4 border-white"
            />
          )}
          <div className="flex-1">
            <h1 className="text-2xl font-bold">{data.personal.fullName || "Your Name"}</h1>
            <p className="text-sm text-white/90 mt-1">{data.personal.location}</p>
            <div className="flex gap-4 mt-2 text-xs">
              {data.personal.email && <span>{data.personal.email}</span>}
              {data.personal.phone && <span>{data.personal.phone}</span>}
            </div>
          </div>
        </div>
      </div>

      {data.summary && (
        <div className="border-l-4 border-purple-600 pl-3">
          <p className="text-xs leading-relaxed italic">{data.summary}</p>
        </div>
      )}

      <div className="grid grid-cols-2 gap-4">
        {data.experience?.length > 0 && (
          <div>
            <h2 className="text-sm font-bold text-purple-600 uppercase mb-2">Experience</h2>
            {data.experience.map((exp: any) => (
              <div key={exp.id} className="mb-2">
                <p className="font-bold text-xs">{exp.jobTitle}</p>
                <p className="text-xs text-purple-600">{exp.company}</p>
                <p className="text-xs text-slate-600 mt-1">{exp.description}</p>
              </div>
            ))}
          </div>
        )}

        {data.education?.length > 0 && (
          <div>
            <h2 className="text-sm font-bold text-purple-600 uppercase mb-2">Education</h2>
            {data.education.map((edu: any) => (
              <div key={edu.id} className="mb-2">
                <p className="font-bold text-xs">{edu.degree}</p>
                <p className="text-xs text-purple-600">{edu.school}</p>
              </div>
            ))}
          </div>
        )}
      </div>

      {data.skills?.length > 0 && (
        <div className="bg-purple-50 p-3 rounded">
          <h2 className="text-sm font-bold text-purple-600 uppercase mb-2">Skills</h2>
          <div className="flex flex-wrap gap-2">
            {data.skills.map((skill: any) => (
              <span key={skill.id} className="bg-purple-200 text-purple-800 px-2 py-1 rounded-full text-xs">
                {skill.skill}
              </span>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}
