"use client"

export function CreativeTemplate({ data, isDark }: { data: any; isDark: boolean }) {
  return (
    <div className={`space-y-4 text-sm ${isDark ? "text-gray-900" : "text-slate-900"}`}>
      {/* Header with creative gradient */}
      <div className="bg-gradient-to-br from-orange-400 via-pink-400 to-purple-500 text-white p-8 rounded-2xl">
        <h1 className="text-4xl font-black">{data.personal.fullName || "Your Name"}</h1>
        {data.summary && (
          <p className="mt-3 text-sm text-white/90 max-w-md italic">{data.summary}</p>
        )}
      </div>

      {/* Contact Info */}
      <div className="grid grid-cols-2 gap-3">
        {data.personal.email && (
          <div className="bg-orange-50 p-3 rounded-lg">
            <p className="text-orange-600 font-bold text-xs">Email</p>
            <p className={`${isDark ? "text-gray-800" : "text-slate-800"} text-sm`}>{data.personal.email}</p>
          </div>
        )}
        {data.personal.phone && (
          <div className="bg-purple-50 p-3 rounded-lg">
            <p className="text-purple-600 font-bold text-xs">Phone</p>
            <p className={`${isDark ? "text-gray-800" : "text-slate-800"} text-sm`}>{data.personal.phone}</p>
          </div>
        )}
        {data.personal.location && (
          <div className="bg-pink-50 p-3 rounded-lg">
            <p className="text-pink-600 font-bold text-xs">Location</p>
            <p className={`${isDark ? "text-gray-800" : "text-slate-800"} text-sm`}>{data.personal.location}</p>
          </div>
        )}
      </div>

      {/* Experience */}
      {data.experience?.length > 0 && (
        <div>
          <h2 className="text-lg font-black text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-purple-600">
            Experience
          </h2>
          <div className="space-y-2 mt-2">
            {data.experience.map((exp: any) => (
              <div key={exp.id} className="bg-gray-50 p-4 rounded-xl border-l-4 border-orange-400">
                <div className="flex justify-between">
                  <span className="font-bold text-gray-900">{exp.jobTitle}</span>
                  <span className="text-xs text-gray-600">
                    {exp.startDate} - {exp.endDate}
                  </span>
                </div>
                <p className="text-gray-600 text-xs">{exp.company}</p>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Skills */}
      {data.skills?.length > 0 && (
        <div>
          <h2 className="text-lg font-black text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-purple-600">
            Skills
          </h2>
          <div className="flex flex-wrap gap-2 mt-2">
            {data.skills.map((skill: any) => (
              <span
                key={skill.id}
                className="bg-gradient-to-r from-orange-200 to-purple-200 text-gray-800 px-3 py-1 rounded-full text-xs font-bold"
              >
                {skill.skill}
              </span>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}
