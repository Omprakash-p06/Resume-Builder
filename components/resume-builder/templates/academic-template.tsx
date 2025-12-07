"use client"

export function AcademicTemplate({ data }: { data: any }) {
  return (
    <div className="text-xs space-y-4 text-slate-900 font-serif">
      {/* Formal academic header */}
      <div className="text-center pb-3 border-b-2 border-slate-400">
        {data.personal.profileImage && (
          <div className="flex justify-center mb-3">
            <img
              src={data.personal.profileImage || "/placeholder.svg"}
              alt={data.personal.fullName}
              className="w-20 h-20 rounded-full object-cover border-2 border-slate-400"
            />
          </div>
        )}
        <h1 className="text-xl font-bold">{data.personal.fullName || "Your Name"}</h1>
        <p className="text-xs mt-1">{data.personal.location}</p>
        <div className="text-xs mt-2">
          {data.personal.email && <p>{data.personal.email}</p>}
          {data.personal.phone && <p>{data.personal.phone}</p>}
        </div>
      </div>

      {data.summary && (
        <div>
          <h2 className="text-sm font-bold uppercase mb-2">Profile</h2>
          <p className="text-xs leading-relaxed text-justify">{data.summary}</p>
        </div>
      )}

      {data.education?.length > 0 && (
        <div>
          <h2 className="text-sm font-bold uppercase mb-2">Education</h2>
          {data.education.map((edu: any) => (
            <div key={edu.id} className="mb-2">
              <p className="font-bold text-xs">{edu.degree}</p>
              <p className="text-xs italic">{edu.school}</p>
              <p className="text-xs text-slate-600">{edu.graduationDate}</p>
            </div>
          ))}
        </div>
      )}

      {data.experience?.length > 0 && (
        <div>
          <h2 className="text-sm font-bold uppercase mb-2">Professional Experience</h2>
          {data.experience.map((exp: any) => (
            <div key={exp.id} className="mb-2">
              <p className="font-bold text-xs">{exp.jobTitle}</p>
              <p className="text-xs italic">{exp.company}, {exp.location}</p>
              <p className="text-xs text-slate-600">{exp.startDate} – {exp.endDate}</p>
            </div>
          ))}
        </div>
      )}

      {data.skills?.length > 0 && (
        <div>
          <h2 className="text-sm font-bold uppercase mb-2">Skills</h2>
          <p className="text-xs leading-relaxed">{data.skills.map((s: any) => s.skill).join(", ")}</p>
        </div>
      )}
    </div>
  )
}
