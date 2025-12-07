# Resume Builder - Code Documentation

This document explains the architecture and key components of the Resume Builder application.

---

## Architecture Overview

The application follows Next.js 15 App Router structure with a component-based architecture:

```
app/                    → Next.js pages and routing
components/             → Reusable React components
├── resume-builder/     → Main application components
│   ├── forms/          → Individual form components for each resume section
│   └── templates/      → Resume template renderers
└── ui/                 → shadcn/ui base components
lib/                    → Utility functions and services
hooks/                  → Custom React hooks
```

---

## Page Components

### Home Page (`app/page.tsx`)

**Purpose**: Landing page where users enter basic details before building their resume.

**Key Features**:
- Form collects: First Name, Last Name, Email, Phone, Location, Job Title
- Stores user data in `localStorage.resumeUser`
- Redirects to `/builder` on submission
- Glassmorphism design with frosted glass effect

**Data Flow**:
```
User Input → localStorage.resumeUser → Redirect to /builder
```

---

### Builder Page (`app/builder/page.tsx`)

**Purpose**: Wrapper page that renders the main ResumeBuilder component.

**Renders**: `<ResumeBuilder />` component

---

## Core Components

### ResumeBuilder (`components/resume-builder/resume-builder.tsx`)

**Purpose**: Main orchestrator component that manages all resume data and state.

**State Management**:
```typescript
resumeData: {
  personal: { fullName, email, phone, location, linkedIn, portfolio, profileImage }
  summary: string
  experience: Array<{ id, jobTitle, company, location, startDate, endDate, description }>
  education: Array<{ id, school, degree, field, graduationDate, description }>
  skills: Array<{ id, category, skill, proficiency }>
  projects: Array<{ id, name, description, techStack, url, github }>
  certifications: Array<{ id, name, issuer, issueDate, expiryDate }>
  languages: Array<{ id, language, proficiency }>
  socials: Array<{ id, platform, url }>
}
```

**Auto-Save System**:
- Uses `useCallback` with debounce (500ms)
- Saves to `localStorage.resumeData` and `localStorage.resumeTemplate`
- Handles `QuotaExceededError` gracefully with toast notification

---

### FormSection (`components/resume-builder/form-section.tsx`)

**Purpose**: Left panel containing all input forms in an accordion layout.

**Features**:
- Template selector dropdown (10 templates available)
- Accordion sections for each resume category
- Action buttons: Download PDF, Export JSON, Clear Data

**Template Detection**:
```typescript
const PHOTO_TEMPLATES = ["photo", "portfolio", "creative-pro"]
const showPhotoUpload = PHOTO_TEMPLATES.includes(template)
```

---

### PreviewSection (`components/resume-builder/preview-section.tsx`)

**Purpose**: Right panel showing real-time resume preview.

**Key Element**:
```html
<div id="resume-preview">
  <!-- Template component rendered here -->
</div>
```

The `id="resume-preview"` is used by the PDF export function to capture the preview.

---

## Form Components (`components/resume-builder/forms/`)

Each form manages a specific section of resume data:

| Component | Purpose |
|-----------|---------|
| `personal-info-form.tsx` | Name, contact, links, profile image upload |
| `summary-form.tsx` | Professional summary textarea |
| `experience-form.tsx` | Work experience entries (add/edit/delete) |
| `education-form.tsx` | Education entries |
| `skills-form.tsx` | Skills with category and proficiency |
| `projects-form.tsx` | Project entries with tech stack and links |
| `certifications-form.tsx` | Certification entries |
| `languages-form.tsx` | Language proficiency entries |
| `socials-form.tsx` | Social media platform links |

**Common Pattern**:
```typescript
interface FormProps {
  data: DataType
  onChange: (data: DataType) => void
  isDark: boolean
}
```

---

## Template Components (`components/resume-builder/templates/`)

10 resume templates available:

| Template | Style | Photo Support |
|----------|-------|---------------|
| `classic-template.tsx` | Traditional professional | No |
| `modern-template.tsx` | Clean, contemporary | No |
| `creative-template.tsx` | Bold, colorful | No |
| `minimalist-template.tsx` | Simple, clean | No |
| `executive-template.tsx` | Senior professional | No |
| `academic-template.tsx` | Academic/research focus | No |
| `startup-template.tsx` | Modern startup style | No |
| `photo-template.tsx` | With profile photo | Yes |
| `portfolio-template.tsx` | Designer portfolio | Yes |
| `creative-pro-template.tsx` | Creative with photo | Yes |

---

## PDF Export (`lib/pdf-export.ts`)

**Function**: `exportResumeAsPDF(elementId, fileName)`

**Process**:
1. Find element by ID (`resume-preview`)
2. Temporarily adjust styles for full capture
3. Use `html2canvas` to convert DOM to canvas
4. Calculate A4 page dimensions
5. Create PDF with `jsPDF`
6. Handle multi-page content automatically
7. Trigger download

**Key Configuration**:
```typescript
html2canvas(element, {
  scale: 2,              // High resolution
  useCORS: true,         // Cross-origin images
  backgroundColor: '#ffffff',
  windowWidth: element.scrollWidth,
  windowHeight: element.scrollHeight,
})
```

---

## Data Persistence

**localStorage Keys**:
| Key | Purpose |
|-----|---------|
| `resumeUser` | Initial user details from home page |
| `resumeData` | Full resume content |
| `resumeTemplate` | Selected template name |
| `resumeTheme` | Theme preference (dark/light) |

**Data Flow**:
```
Home Page → resumeUser → Builder loads → resumeData
                    ↓
         Auto-save every 500ms
                    ↓
         localStorage.resumeData
```

---

## Styling

- **CSS Framework**: Tailwind CSS 4
- **Design System**: Glassmorphism with frosted glass effects
- **Colors**: Gradient backgrounds (teal → slate → orange)
- **Animations**: Slide-in, fade-in, scale transitions

**Common Classes**:
```css
bg-black/40 backdrop-blur-xl      /* Frosted glass background */
border-white/10                   /* Subtle borders */
text-white/80                     /* Semi-transparent text */
rounded-2xl                       /* Rounded corners */
transition-all duration-300       /* Smooth transitions */
```

---

## Developers

**Omprakash and Vishwajith**
