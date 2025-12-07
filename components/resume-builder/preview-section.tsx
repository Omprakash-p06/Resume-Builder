"use client"

import { ClassicTemplate } from "./templates/classic-template"
import { ModernTemplate } from "./templates/modern-template"
import { CreativeTemplate } from "./templates/creative-template"
import { MinimalistTemplate } from "./templates/minimalist-template"
import { ExecutiveTemplate } from "./templates/executive-template"
import { CreativeProTemplate } from "./templates/creative-pro-template"
import { AcademicTemplate } from "./templates/academic-template"
import { StartupTemplate } from "./templates/startup-template"
import { PhotoTemplate } from "./templates/photo-template"
import { PortfolioTemplate } from "./templates/portfolio-template"

interface PreviewSectionProps {
  resumeData: any
  template: string
}

export function PreviewSection({ resumeData, template }: PreviewSectionProps) {
  return (
    <div className="bg-black/40 border-white/10 backdrop-blur-xl border rounded-2xl p-6 transition-all duration-300 animate-slide-in-down shadow-lg">
      <h2 className="text-white font-bold mb-4">Resume Preview</h2>

      <div
        id="resume-preview"
        className="bg-white rounded-lg p-6 shadow-lg transition-all duration-300 animate-scale-in max-h-[600px] overflow-y-auto lg:max-h-[calc(100vh-300px)]"
      >
        {template === "classic" && <ClassicTemplate data={resumeData} />}
        {template === "modern" && <ModernTemplate data={resumeData} />}
        {template === "creative" && <CreativeTemplate data={resumeData} />}
        {template === "minimalist" && <MinimalistTemplate data={resumeData} />}
        {template === "executive" && <ExecutiveTemplate data={resumeData} />}
        {template === "creative-pro" && <CreativeProTemplate data={resumeData} />}
        {template === "academic" && <AcademicTemplate data={resumeData} />}
        {template === "startup" && <StartupTemplate data={resumeData} />}
        {template === "photo" && <PhotoTemplate data={resumeData} />}
        {template === "portfolio" && <PortfolioTemplate data={resumeData} />}
      </div>
    </div>
  )
}
