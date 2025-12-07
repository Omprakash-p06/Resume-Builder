"use client"

export function ModernTemplate({ data, isDark }: { data: any; isDark: boolean }) {
  return (
    <div className={`space-y-4 text-sm ${isDark ? "text-gray-900" : "text-slate-900"}`}>
      {/* Header with accent */}
      <div className="bg-gradient-to-r from-teal-600 to-teal-700 text-white p-6 rounded-lg mb-4">
        <h1 className="text-4xl font-bold">{data.personal.fullName || "Your Name"}</h1>
        <div className="flex gap-6 mt-3 text-sm flex-wrap">
          {data.personal.email && <span>{data.personal.email}</span>}
          {data.personal.phone && <span>{data.personal.phone}</span>}
          {data.personal.location && <span>{data.personal.location}</span>}
        </div>
        {data.socials?.length > 0 && (
          <div className="flex gap-3 mt-3 text-sm flex-wrap">
            {data.socials.map((social: any) => (
              <a
                key={social.id}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline"
              >
                {social.platform}
              </a>
            ))}
          </div>
        )}
      </div>

      {/* Professional Summary */}
      {data.summary && (
        <div>
          <h2 className="text-lg font-bold text-teal-700 border-b-2 border-teal-700 pb-2">
            Professional Summary
          </h2>
          <p className="leading-relaxed mt-2">{data.summary}</p>
        </div>
      )}

      {/* Experience */}
      {data.experience?.length > 0 && (
        <div>
          <h2 className="text-lg font-bold text-teal-700 border-b-2 border-teal-700 pb-2">
            Experience
          </h2>
          {data.experience.map((exp: any) => (
            <div key={exp.id} className="mt-3 pl-4 border-l-4 border-teal-600">
              <div className="flex justify-between">
                <span className="font-bold">{exp.jobTitle}</span>
                <span className="text-xs text-gray-600">
                  {exp.startDate} - {exp.endDate}
                </span>
              </div>
              <p className={`text-xs ${isDark ? "text-gray-600" : "text-slate-600"}`}>{exp.company}, {exp.location}</p>
              <p className="leading-relaxed mt-1 text-xs">{exp.description}</p>
            </div>
          ))}
        </div>
      )}

      {/* Education */}
      {data.education?.length > 0 && (
        <div>
          <h2 className="text-lg font-bold text-teal-700 border-b-2 border-teal-700 pb-2">
            Education
          </h2>
          {data.education.map((edu: any) => (
            <div key={edu.id} className="mt-3">
              <div className="flex justify-between">
                <span className="font-bold">{edu.degree}</span>
                <span className="text-xs text-gray-600">{edu.graduationDate}</span>
              </div>
              <p className="text-gray-600 text-xs">{edu.school}</p>
            </div>
          ))}
        </div>
      )}

      {/* Skills */}
      {data.skills?.length > 0 && (
        <div>
          <h2 className="text-lg font-bold text-teal-700 border-b-2 border-teal-700 pb-2">
            Skills
          </h2>
          <div className="flex flex-wrap gap-2 mt-2">
            {data.skills.map((skill: any) => (
              <span
                key={skill.id}
                className="bg-teal-100 text-teal-700 px-3 py-1 rounded-full text-xs font-medium"
              >
                {skill.skill}
              </span>
            ))}
          </div>
        </div>
      )}

      {/* Projects */}
      {data.projects?.length > 0 && (
        <div>
          <h2 className="text-lg font-bold text-teal-700 border-b-2 border-teal-700 pb-2">
            Projects
          </h2>
          {data.projects.map((project: any) => (
            <div key={project.id} className="mt-3 pl-4 border-l-4 border-teal-600">
              <span className="font-bold">{project.name}</span>
              {project.techStack && (
                <p className="text-xs text-teal-600 mt-1">{project.techStack}</p>
              )}
              <p className="text-xs leading-relaxed mt-1">{project.description}</p>
            </div>
          ))}
        </div>
      )}

      {/* Certifications */}
      {data.certifications?.length > 0 && (
        <div>
          <h2 className="text-lg font-bold text-teal-700 border-b-2 border-teal-700 pb-2">
            Certifications
          </h2>
          {data.certifications.map((cert: any) => (
            <div key={cert.id} className="mt-2">
              <span className="font-bold text-sm">{cert.name}</span>
              <p className="text-xs text-gray-600">{cert.issuer}</p>
            </div>
          ))}
        </div>
      )}

      {/* Languages */}
      {data.languages?.length > 0 && (
        <div>
          <h2 className="text-lg font-bold text-teal-700 border-b-2 border-teal-700 pb-2">
            Languages
          </h2>
          <div className="flex flex-wrap gap-2 mt-2">
            {data.languages.map((lang: any) => (
              <span key={lang.id} className="text-xs text-teal-700">
                {lang.language} ({lang.proficiency})
              </span>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}
