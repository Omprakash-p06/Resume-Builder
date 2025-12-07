# Resume Builder

A modern, beautiful resume builder application built with Next.js and React. Create professional resumes with multiple templates, export to PDF, and manage your resume data with ease.

## Features

- **Multiple Templates**: Choose from 8 professionally designed resume templates (Classic, Modern, Creative, Minimalist, Executive, Creative Pro, Academic, Startup)
- **Profile Picture Support**: Add a professional photo to your resume
- **Social Media Links**: Include links to LinkedIn, GitHub, Portfolio, and other social platforms
- **Comprehensive Sections**: Personal Information, Summary, Experience, Education, Skills, Projects, Certifications, Languages, Social Links
- **PDF Export**: Download your resume as a high-quality PDF
- **JSON Export**: Backup and restore your resume data
- **Auto-Save**: Your data is automatically saved to browser storage
- **Dark Theme**: Beautiful frosted glass UI with a modern aesthetic
- **Responsive Design**: Works perfectly on desktop and mobile devices

## Prerequisites

- Node.js 18+
- npm or yarn

## Installation

1. **Clone or Download the Project**
   ```bash
   git clone <repository-url>
   cd Resume-Builder
   ```

2. **Install Dependencies**
   > ⚠️ **Important:** This project uses React 19, which has peer dependency conflicts with some packages. You MUST use the `--legacy-peer-deps` flag.
   ```bash
   npm install --legacy-peer-deps
   ```

3. **Install cross-env (if not already installed)**
   > This is needed for the dev script to work across different operating systems.
   ```bash
   npm install cross-env --save-dev --legacy-peer-deps
   ```

4. **Run the Development Server**
   ```bash
   npm run dev
   ```

5. **Open in Browser**
   - Navigate to [http://localhost:3000](http://localhost:3000)
   - Enter your details on the home page
   - Click "Start Building Resume" to access the builder

## Project Structure

```
React Project/
├── app/
│   ├── layout.tsx          # Root layout with metadata
│   ├── page.tsx            # Home page - user details form
│   ├── globals.css         # Global styles
│   └── builder/
│       └── page.tsx        # Resume builder page
├── components/
│   ├── resume-builder/
│   │   ├── resume-builder.tsx    # Main builder component
│   │   ├── header.tsx            # App header
│   │   ├── footer.tsx            # App footer
│   │   ├── form-section.tsx      # Left panel forms
│   │   ├── preview-section.tsx   # Right panel preview
│   │   ├── forms/                # Individual form components
│   │   └── templates/            # Resume template components
│   └── ui/                       # Reusable UI components
├── lib/
│   ├── pdf-export.ts       # PDF export functionality
│   └── utils.ts            # Utility functions
├── hooks/                  # Custom React hooks
├── public/                 # Static assets
├── documentation/
│   └── notes.md            # Detailed code documentation
└── package.json
```

## Technologies Used

- **Framework**: Next.js 15 (App Router)
- **UI Library**: React 19
- **Styling**: Tailwind CSS 4
- **PDF Export**: jsPDF + html-to-image
- **Icons**: Lucide React
- **Storage**: Browser localStorage

## Data Storage

Your resume data is stored locally in your browser using `localStorage`:
- ✅ Your data never leaves your device
- ✅ No account or login required
- ✅ Complete privacy
- ⚠️ Clearing browser data will delete your resume
- ⚠️ Data is not synced across devices

**Tip**: Use the "Export as JSON" feature to backup your resume data!

## Troubleshooting

### npm install fails with peer dependency errors
```bash
npm install --legacy-peer-deps
```

### Data Not Saving?
- Check if your browser allows localStorage
- If you see "Storage Full" notification, export data as JSON and clear old data

### PDF Export Issues?
- Ensure all required information is filled in
- Try using Chrome or Edge for best results

## Developers

Developed by **Omprakash and Vishwajith**

## License

This project is open-source and available for personal and commercial use.
