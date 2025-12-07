"use client"

export function PortfolioTemplate({ data, isDark }: { data: any; isDark: boolean }) {
  return (
    <div className="text-sm space-y-6 bg-white">
      {/* Hero Section with Photo */}
      <div className="bg-gradient-to-r from-purple-600 to-pink-600 text-white p-8 rounded-lg">
        <div className="flex gap-6 items-center">
          {data.personal.profileImage && (
            <img
              src={data.personal.profileImage || "/placeholder.svg"}
              alt={data.personal.fullName}
              className="w-40 h-40 rounded-full object-cover border-4 border-white"
            />
          )}
          <div>
            <h1 className="text-4xl font-bold">{data.personal.fullName || "Your Name"}</h1>
            {data.summary && <p className="text-white/90 mt-2 text-lg max-w-md">{data.summary}</p>}
            <div className="flex gap-4 mt-4 flex-wrap text-sm">
              {data.personal.email && <a href={`mailto:${data.personal.email}`}>{data.personal.email}</a>}
              {data.personal.phone && <span>{data.personal.phone}</span>}
              {data.personal.location && <span>{data.personal.location}</span>}
            </div>
            {data.socials?.length > 0 && (
              <div className="flex gap-3 mt-3 flex-wrap">
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
        </div>
      </div>

      {/* Experience */}
      {data.experience?.length > 0 && (
        <div className="px-8">
          <h2 className="text-2xl font-bold text-purple-700 mb-4">Experience</h2>
          {data.experience.map((exp: any) => (
            <div key={exp.id} className="mb-4 pb-4 border-b border-gray-200">
              <div className="flex justify-between items-start">
                <div>
                  <p className="font-bold text-lg text-gray-900">{exp.jobTitle}</p>
                  <p className="text-purple-600 font-semibold">{exp.company}</p>
                  <p className="text-xs text-gray-600">{exp.location}</p>
                </div>
                <p className="text-xs text-gray-500">{exp.startDate} - {exp.endDate}</p>
              </div>
              <p className="text-gray-700 mt-2">{exp.description}</p>
            </div>
          ))}
        </div>
      )}

      {/* Education */}
      {data.education?.length > 0 && (
        <div className="px-8">
          <h2 className="text-2xl font-bold text-purple-700 mb-4">Education</h2>
          {data.education.map((edu: any) => (
            <div key={edu.id} className="mb-3">
              <p className="font-bold text-gray-900">{edu.degree} in {edu.field}</p>
              <p className="text-purple-600 font-semibold">{edu.school}</p>
              <p className="text-xs text-gray-600">{edu.graduationDate}</p>
            </div>
          ))}
        </div>
      )}

      {/* Skills */}
      {data.skills?.length > 0 && (
        <div className="px-8">
          <h2 className="text-2xl font-bold text-purple-700 mb-4">Skills</h2>
          <div className="grid grid-cols-3 gap-3">
            {data.skills.map((skill: any) => (
              <div key={skill.id} className="bg-purple-50 p-3 rounded-lg">
                <p className="font-semibold text-gray-900">{skill.skill}</p>
                <p className="text-xs text-purple-600">{skill.proficiency}</p>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Projects */}
      {data.projects?.length > 0 && (
        <div className="px-8">
          <h2 className="text-2xl font-bold text-purple-700 mb-4">Projects</h2>
          {data.projects.map((project: any) => (
            <div key={project.id} className="mb-4 pb-4 border-b border-gray-200">
              <p className="font-bold text-lg text-gray-900">{project.name}</p>
              {project.techStack && <p className="text-sm text-purple-600 mb-1">{project.techStack}</p>}
              <p className="text-gray-700">{project.description}</p>
            </div>
          ))}
        </div>
      )}

      {/* Certifications */}
      {data.certifications?.length > 0 && (
        <div className="px-8">
          <h2 className="text-2xl font-bold text-purple-700 mb-3">Certifications</h2>
          {data.certifications.map((cert: any) => (
            <p key={cert.id} className="mb-1 text-gray-900">• {cert.name} - {cert.issuer}</p>
          ))}
        </div>
      )}

      {/* Languages */}
      {data.languages?.length > 0 && (
        <div className="px-8 pb-8">
          <h2 className="text-2xl font-bold text-purple-700 mb-3">Languages</h2>
          <div className="flex flex-wrap gap-4">
            {data.languages.map((lang: any) => (
              <div key={lang.id} className="bg-purple-50 px-4 py-2 rounded-lg">
                <p className="font-semibold text-gray-900">{lang.language}</p>
                <p className="text-xs text-purple-600">{lang.proficiency}</p>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}
