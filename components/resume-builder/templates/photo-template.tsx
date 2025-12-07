"use client"

export function PhotoTemplate({ data, isDark }: { data: any; isDark: boolean }) {
  return (
    <div className="text-sm space-y-4 bg-white">
      {/* Header with Photo */}
      <div className="flex gap-6 bg-gradient-to-r from-blue-50 to-indigo-50 p-6 rounded-lg">
        {data.personal.profileImage && (
          <div className="flex-shrink-0">
            <img
              src={data.personal.profileImage || "/placeholder.svg"}
              alt={data.personal.fullName}
              className="w-32 h-32 rounded-full object-cover border-4 border-indigo-600"
            />
          </div>
        )}
        <div className="flex-1">
          <h1 className="text-3xl font-bold text-gray-900">{data.personal.fullName || "Your Name"}</h1>
          <p className="text-indigo-600 font-semibold text-lg mt-1">Professional Resume</p>
          <div className="space-y-1 mt-3 text-sm text-gray-700">
            {data.personal.email && <p>{data.personal.email}</p>}
            {data.personal.phone && <p>{data.personal.phone}</p>}
            {data.personal.location && <p>{data.personal.location}</p>}
          </div>
          {data.socials?.length > 0 && (
            <div className="flex gap-2 mt-2 text-xs flex-wrap">
              {data.socials.map((social: any) => (
                <a
                  key={social.id}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-indigo-600 hover:underline"
                >
                  {social.platform}
                </a>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Professional Summary */}
      {data.summary && (
        <div className="px-6">
          <h2 className="text-lg font-bold text-indigo-700 mb-2">Professional Summary</h2>
          <p className="text-gray-700 leading-relaxed">{data.summary}</p>
        </div>
      )}

      {/* Experience */}
      {data.experience?.length > 0 && (
        <div className="px-6">
          <h2 className="text-lg font-bold text-indigo-700 mb-3">Professional Experience</h2>
          {data.experience.map((exp: any) => (
            <div key={exp.id} className="mb-3">
              <div className="flex justify-between">
                <p className="font-bold text-gray-900">{exp.jobTitle}</p>
                <p className="text-xs text-gray-600">{exp.startDate} - {exp.endDate}</p>
              </div>
              <p className="text-sm text-indigo-600 font-semibold">{exp.company}</p>
              <p className="text-xs text-gray-600 mb-1">{exp.location}</p>
              <p className="text-sm text-gray-700">{exp.description}</p>
            </div>
          ))}
        </div>
      )}

      {/* Education */}
      {data.education?.length > 0 && (
        <div className="px-6">
          <h2 className="text-lg font-bold text-indigo-700 mb-3">Education</h2>
          {data.education.map((edu: any) => (
            <div key={edu.id} className="mb-2">
              <div className="flex justify-between">
                <p className="font-bold text-gray-900">{edu.degree}</p>
                <p className="text-xs text-gray-600">{edu.graduationDate}</p>
              </div>
              <p className="text-sm text-indigo-600">{edu.school}</p>
              {edu.description && <p className="text-sm text-gray-700 mt-1">{edu.description}</p>}
            </div>
          ))}
        </div>
      )}

      {/* Skills */}
      {data.skills?.length > 0 && (
        <div className="px-6">
          <h2 className="text-lg font-bold text-indigo-700 mb-2">Skills</h2>
          <div className="flex flex-wrap gap-2">
            {data.skills.map((skill: any) => (
              <span key={skill.id} className="bg-indigo-100 text-indigo-700 px-3 py-1 rounded-full text-xs font-medium">
                {skill.skill}
              </span>
            ))}
          </div>
        </div>
      )}

      {/* Projects */}
      {data.projects?.length > 0 && (
        <div className="px-6">
          <h2 className="text-lg font-bold text-indigo-700 mb-3">Projects</h2>
          {data.projects.map((project: any) => (
            <div key={project.id} className="mb-3">
              <p className="font-bold text-gray-900">{project.name}</p>
              {project.techStack && <p className="text-xs text-indigo-600 mb-1">{project.techStack}</p>}
              <p className="text-sm text-gray-700">{project.description}</p>
            </div>
          ))}
        </div>
      )}

      {/* Certifications */}
      {data.certifications?.length > 0 && (
        <div className="px-6">
          <h2 className="text-lg font-bold text-indigo-700 mb-2">Certifications</h2>
          {data.certifications.map((cert: any) => (
            <div key={cert.id} className="mb-1">
              <p className="font-bold text-sm text-gray-900">{cert.name}</p>
              <p className="text-xs text-gray-600">{cert.issuer}</p>
            </div>
          ))}
        </div>
      )}

      {/* Languages */}
      {data.languages?.length > 0 && (
        <div className="px-6">
          <h2 className="text-lg font-bold text-indigo-700 mb-2">Languages</h2>
          <div className="flex flex-wrap gap-3">
            {data.languages.map((lang: any) => (
              <span key={lang.id} className="text-sm text-gray-700">
                {lang.language} - <span className="font-semibold text-indigo-600">{lang.proficiency}</span>
              </span>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}
