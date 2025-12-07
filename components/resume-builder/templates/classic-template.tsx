"use client"

export function ClassicTemplate({ data, isDark }: { data: any; isDark: boolean }) {
  return (
    <div className={`text-sm space-y-4 font-serif ${isDark ? "text-black" : "text-slate-900"}`}>
      {/* Header */}
      <div className="text-center border-b-2 border-black pb-4">
        <h1 className="text-3xl font-bold">{data.personal.fullName || "Your Name"}</h1>
        <div className="flex justify-center gap-4 text-xs mt-2 flex-wrap">
          {data.personal.email && <span>{data.personal.email}</span>}
          {data.personal.phone && <span>{data.personal.phone}</span>}
          {data.personal.location && <span>{data.personal.location}</span>}
        </div>
        
        {data.socials?.length > 0 && (
          <div className="flex justify-center gap-3 text-xs mt-2 flex-wrap">
            {data.socials.map((social: any) => (
              <a
                key={social.id}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline"
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
          <h2 className="text-lg font-bold uppercase tracking-wide">
            Professional Summary
          </h2>
          <p className="text-justify leading-relaxed">{data.summary}</p>
        </div>
      )}

      {/* Experience */}
      {data.experience?.length > 0 && (
        <div>
          <h2 className="text-lg font-bold uppercase tracking-wide">
            Experience
          </h2>
          {data.experience.map((exp: any) => (
            <div key={exp.id} className="mb-3">
              <div className="flex justify-between">
                <span className="font-bold">{exp.jobTitle}</span>
                <span className="text-xs">
                  {exp.startDate} - {exp.endDate}
                </span>
              </div>
              <p className="text-gray-700 text-xs">{exp.company}, {exp.location}</p>
              <p className="text-justify leading-relaxed mt-1">{exp.description}</p>
            </div>
          ))}
        </div>
      )}

      {/* Education */}
      {data.education?.length > 0 && (
        <div>
          <h2 className="text-lg font-bold uppercase tracking-wide">
            Education
          </h2>
          {data.education.map((edu: any) => (
            <div key={edu.id} className="mb-3">
              <div className="flex justify-between">
                <span className="font-bold">{edu.degree}</span>
                <span className="text-xs">{edu.graduationDate}</span>
              </div>
              <p className="text-gray-700 text-xs">{edu.school}</p>
              {edu.description && (
                <p className="text-justify leading-relaxed mt-1">{edu.description}</p>
              )}
            </div>
          ))}
        </div>
      )}

      {/* Skills */}
      {data.skills?.length > 0 && (
        <div>
          <h2 className="text-lg font-bold uppercase tracking-wide">Skills</h2>
          <div className="flex flex-wrap gap-2">
            {data.skills.map((skill: any) => (
              <span
                key={skill.id}
                className="bg-gray-200 text-gray-800 px-2 py-1 rounded text-xs"
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
          <h2 className="text-lg font-bold uppercase tracking-wide">Projects</h2>
          {data.projects.map((project: any) => (
            <div key={project.id} className="mb-3">
              <div className="flex justify-between">
                <span className="font-bold">{project.name}</span>
              </div>
              {project.techStack && (
                <p className="text-gray-700 text-xs">{project.techStack}</p>
              )}
              <p className="text-justify leading-relaxed mt-1">{project.description}</p>
              {(project.url || project.github) && (
                <div className="text-xs mt-1">
                  {project.url && <a href={project.url} className="text-blue-600 hover:underline">{project.url}</a>}
                  {project.github && <a href={project.github} className="text-blue-600 hover:underline ml-2">{project.github}</a>}
                </div>
              )}
            </div>
          ))}
        </div>
      )}

      {/* Certifications */}
      {data.certifications?.length > 0 && (
        <div>
          <h2 className="text-lg font-bold uppercase tracking-wide">Certifications</h2>
          {data.certifications.map((cert: any) => (
            <div key={cert.id} className="mb-2">
              <span className="font-bold">{cert.name}</span>
              <p className="text-gray-700 text-xs">{cert.issuer} - {cert.issueDate}</p>
            </div>
          ))}
        </div>
      )}

      {/* Languages */}
      {data.languages?.length > 0 && (
        <div>
          <h2 className="text-lg font-bold uppercase tracking-wide">Languages</h2>
          <div className="flex flex-wrap gap-2">
            {data.languages.map((lang: any) => (
              <span key={lang.id} className="text-xs">
                {lang.language} - {lang.proficiency}
              </span>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}
