"use client"
import { ChevronDown, Download } from "lucide-react"
import { PersonalInfoForm } from "./forms/personal-info-form"
import { SummaryForm } from "./forms/summary-form"
import { ExperienceForm } from "./forms/experience-form"
import { EducationForm } from "./forms/education-form"
import { SkillsForm } from "./forms/skills-form"
import { ProjectsForm } from "./forms/projects-form"
import { CertificationsForm } from "./forms/certifications-form"
import { LanguagesForm } from "./forms/languages-form"
import { SocialsForm } from "./forms/socials-form"

interface FormSectionProps {
  resumeData: any
  setResumeData: (data: any) => void
  activeSection: string
  setActiveSection: (section: string) => void
  template: string
  setTemplate: (template: string) => void
  onExportJSON: () => void
  onClearData: () => void
  onExportPDF: () => void
}

const PHOTO_TEMPLATES = ["photo", "portfolio", "creative-pro"]

export function FormSection({
  resumeData,
  setResumeData,
  activeSection,
  setActiveSection,
  template,
  setTemplate,
  onExportJSON,
  onClearData,
  onExportPDF,
}: FormSectionProps) {
  const sections = [
    { id: "personal", label: "Personal Information" },
    { id: "summary", label: "Professional Summary" },
    { id: "experience", label: "Experience" },
    { id: "education", label: "Education" },
    { id: "skills", label: "Skills" },
    { id: "projects", label: "Projects" },
    { id: "certifications", label: "Certifications" },
    { id: "languages", label: "Languages" },
    { id: "socials", label: "Social Media Links" },
  ]

  const showPhotoUpload = PHOTO_TEMPLATES.includes(template)

  return (
    <div className="space-y-4 animate-slide-in-up">
      {/* Template Selector */}
      <div className="bg-black/40 border-white/10 backdrop-blur-xl border rounded-2xl p-4 transition-all duration-300 hover:shadow-lg">
        <label className="block text-white/80 text-sm font-medium mb-3">Resume Template</label>
        <select
          value={template}
          onChange={(e) => setTemplate(e.target.value)}
          className="w-full bg-black/20 border-white/10 text-white hover:bg-black/30 focus:bg-black/30 focus:border-white/30 backdrop-blur-sm border rounded-lg h-10 px-3 transition-all duration-200"
        >
          <option value="classic">Classic</option>
          <option value="modern">Modern</option>
          <option value="creative">Creative</option>
          <option value="minimalist">Minimalist</option>
          <option value="executive">Executive</option>
          <option value="creative-pro">Creative Pro (with Photo)</option>
          <option value="academic">Academic</option>
          <option value="startup">Startup</option>
          <option value="photo">Photo Resume</option>
          <option value="portfolio">Portfolio (with Photo)</option>
        </select>
      </div>

      {/* Sections Accordion */}
      <div className="space-y-3">
        {sections.map((section, index) => (
          <div
            key={section.id}
            className="bg-black/40 border-white/10 backdrop-blur-xl border rounded-2xl overflow-hidden transition-all duration-300 hover:shadow-lg"
            style={{
              animation: `slideInUp 0.5s ease-out ${index * 0.05}s backwards`,
            }}
          >
            <button
              onClick={() => setActiveSection(activeSection === section.id ? "" : section.id)}
              className="w-full flex items-center justify-between p-4 hover:bg-white/5 transition-all duration-300"
            >
              <span className="text-white font-medium">{section.label}</span>
              <ChevronDown
                className={`w-5 h-5 text-white/60 transition-transform duration-300 ${
                  activeSection === section.id ? "rotate-180" : ""
                }`}
              />
            </button>

            {activeSection === section.id && (
              <div className="border-t border-white/10 bg-black/20 p-4 animate-fade-in">
                {section.id === "personal" && (
                  <PersonalInfoForm
                    data={resumeData.personal}
                    onChange={(data) => setResumeData({ ...resumeData, personal: data })}
                    isDark={true}
                    showPhotoUpload={showPhotoUpload}
                  />
                )}
                {section.id === "summary" && (
                  <SummaryForm
                    data={resumeData.summary}
                    onChange={(data) => setResumeData({ ...resumeData, summary: data })}
                    isDark={true}
                  />
                )}
                {section.id === "experience" && (
                  <ExperienceForm
                    data={resumeData.experience}
                    onChange={(data) => setResumeData({ ...resumeData, experience: data })}
                    isDark={true}
                  />
                )}
                {section.id === "education" && (
                  <EducationForm
                    data={resumeData.education}
                    onChange={(data) => setResumeData({ ...resumeData, education: data })}
                    isDark={true}
                  />
                )}
                {section.id === "skills" && (
                  <SkillsForm
                    data={resumeData.skills}
                    onChange={(data) => setResumeData({ ...resumeData, skills: data })}
                    isDark={true}
                  />
                )}
                {section.id === "projects" && (
                  <ProjectsForm
                    data={resumeData.projects}
                    onChange={(data) => setResumeData({ ...resumeData, projects: data })}
                    isDark={true}
                  />
                )}
                {section.id === "certifications" && (
                  <CertificationsForm
                    data={resumeData.certifications}
                    onChange={(data) => setResumeData({ ...resumeData, certifications: data })}
                    isDark={true}
                  />
                )}
                {section.id === "languages" && (
                  <LanguagesForm
                    data={resumeData.languages}
                    onChange={(data) => setResumeData({ ...resumeData, languages: data })}
                    isDark={true}
                  />
                )}
                {section.id === "socials" && (
                  <SocialsForm
                    data={resumeData.socials || []}
                    onChange={(data) => setResumeData({ ...resumeData, socials: data })}
                    isDark={true}
                  />
                )}
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Action Buttons */}
      <div className="space-y-2 pt-4">
        <button
          onClick={onExportPDF}
          className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-teal-500/80 to-teal-600/80 backdrop-blur-sm border border-teal-400/30 hover:from-teal-500 hover:to-teal-600 text-white font-medium rounded-lg py-2 transition-all duration-300 transform hover:scale-[1.02] active:scale-95 shadow-lg hover:shadow-xl"
        >
          <Download className="w-4 h-4" />
          Download as PDF
        </button>

        <button
          onClick={onExportJSON}
          className="w-full bg-white/20 border-white/20 hover:bg-white/30 text-white backdrop-blur-sm border font-medium rounded-lg py-2 transition-all duration-300 transform hover:scale-[1.02] active:scale-95"
        >
          Export as JSON
        </button>
        <button
          onClick={onClearData}
          className="w-full bg-red-500/20 backdrop-blur-sm border border-red-500/30 hover:bg-red-500/30 text-red-200 font-medium rounded-lg py-2 transition-all duration-300 transform hover:scale-[1.02] active:scale-95"
        >
          Clear All Data
        </button>
      </div>
    </div>
  )
}
