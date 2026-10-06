# Operon Documentation & User Guide

A mobile-friendly, minimalistic, premium interactive user guide and documentation system for the **Operon School Management Platform**.

---

## 1. Project Overview & Vision

The Operon Documentation project provides comprehensive, step-by-step guidance across the entire lifecycle of school operations on the Operon platform—from initial onboarding and institutional configuration to academic workflows, financial collections, staff administration, and parent communication.

### Key Highlights
- **Minimalist SaaS Aesthetic**: Clean interface, generous whitespace, high readability, and signature Operon blue accents.
- **Multimodal Learning**: Combines numbered step instructions, zoomable screenshots, contextual visual annotations, and video walkthroughs.
- **Structured Content Model**: Clean decoupling of documentation content data from UI rendering components.
- **Responsive by Design**: Engineered for seamless experience across mobile phones, tablets, laptops, and wide desktop displays.

---

## 2. Directory Architecture & Purpose

```
operon_guide_webdoc/
├── public/
│   └── documentation/
│       ├── images/
│       │   ├── original/           # Untouched raw source screenshots
│       │   └── annotated/          # Annotated screenshots with highlights/callouts
│       ├── videos/                 # Section-specific video walkthrough files
│       │   ├── registration/
│       │   ├── school-setup/
│       │   ├── academic-management/
│       │   ├── finance/
│       │   ├── communication/
│       │   └── administration/
│       └── branding/
│           └── operon/             # Official Operon brand assets (logos, badges)
│
├── src/
│   ├── app/
│   │   └── docs/                   # App routing & page layouts
│   ├── components/
│   │   └── documentation/          # Reusable documentation UI components
│   │       ├── DocumentationLayout/
│   │       ├── DocumentationSidebar/
│   │       ├── DocumentationHeader/
│   │       ├── GuidePage/
│   │       ├── GuideSection/
│   │       ├── GuideStep/
│   │       ├── ScreenshotViewer/
│   │       ├── VideoViewer/
│   │       ├── ImageAnnotation/
│   │       ├── TableOfContents/
│   │       └── PreviousNextNavigation/
│   ├── config/
│   │   └── documentation/          # Sidebar navigation tree and site configuration
│   ├── content/
│   │   └── documentation/          # Decoupled guide content data modules
│   │       ├── getting-started/
│   │       ├── registration/
│   │       ├── school-setup/
│   │       ├── academic-management/
│   │       ├── finance/
│   │       ├── communication/
│   │       └── administration/
│   └── types/
│       └── documentation/          # TypeScript contracts and data structures
│
├── artifacts/
│   └── documentation/              # Design artifacts, annotations, verification reports
│       ├── screenshots/
│       ├── annotated/
│       └── verification/
│
├── operon_video_guide/             # Pre-existing raw assets (preserved untouched)
│   └── 1. Registration             # Original source walkthrough video
└── README.md
```

---

## 3. Source Repository vs. Production Assets Workflow

### Source Material Repository (`operon_video_guide/`)
- The `operon_video_guide/` directory at the project root is the **raw source material repository**.
- **Rules**:
  - Keep `operon_video_guide/` strictly at the project root.
  - Do NOT move it into `public/`.
  - Do NOT rename, modify, compress, delete, or reorganize its contents.
  - New raw walkthrough videos will be added here gradually.

### Asset Processing Workflow Pipeline

```
operon_video_guide/ (Raw source material)
       ↓
Video provided for analysis
       ↓
Workflow extracted & documented
       ↓
Relevant screenshots identified
       ↓
Screenshots annotated (dimming, markers, outlines)
       ↓
Final documentation assets prepared
       ↓
Only finalized assets copied/referenced into:
  • public/documentation/videos/<section>/
  • public/documentation/images/original/<section>/
  • public/documentation/images/annotated/<section>/
```

---

## 4. Production Asset & Content Guidelines

### Where Original Screenshots Belong
Place raw, unmodified screenshots extracted for production directly in:
```
public/documentation/images/original/<feature-or-section>/
```
*Rule: Source screenshots must remain completely untouched and preserved at their full original resolution.*

### Where Annotated Screenshots Belong
Place edited or annotated versions (with dimming, highlights, callout markers, or outlines) in:
```
public/documentation/images/annotated/<feature-or-section>/
```
*Rule: Never overwrite an original image with an annotated image.*

### Where Videos Belong
Place finalized local walkthrough video files (`.mp4`, `.webm`) into their respective feature subdirectories under:
```
public/documentation/videos/<section-name>/
```
Examples:
- `public/documentation/videos/registration/registration-walkthrough.mp4`
- `public/documentation/videos/school-setup/school-profile-overview.mp4`

### Asset Naming Conventions
Use clear, predictable, kebab-case naming:
```
registration/
├── step-01-registration-page.png
├── step-01-registration-page-annotated.png
├── step-02-school-information.png
├── step-02-school-information-annotated.png
└── registration-walkthrough.mp4
```

---

## 5. Documentation Content Structure

Guide content is decoupled from React UI components. Each guide definition adheres to the `Guide` interface (`src/types/documentation/guide.ts`):

- **`title`**: Concise action title (e.g., *Register Your School*)
- **`shortDescription`**: High-level summary of what the guide covers
- **`whyItMatters`**: Institutional relevance and operational context
- **`prerequisites`**: Required permissions or previous steps
- **`steps`**: Array of ordered steps:
  - `stepNumber`, `title`, `instruction`, `subSteps`
  - `screenshot`: Object referencing original/annotated image, alt text, caption, and coordinate annotations
  - `tip` & `warning` callouts
- **`video`**: Optional video asset reference (`src`, `title`, `duration`)
- **`relatedGuides`**, **`previousGuide`**, **`nextGuide`**: Seamless navigation links

---

## 6. Adding New Documentation Sections

1. **Update Navigation Config**: Add the section or guide item to `src/config/documentation/navigation.config.ts`.
2. **Create Content Module**: Add the guide definition file under `src/content/documentation/<section>/<guide-slug>.ts`.
3. **Register Guide**: Export and register the guide in `src/content/documentation/index.ts`.
4. **Place Media Assets**: Add original/annotated screenshots to `public/documentation/images/` and walkthrough videos to `public/documentation/videos/`.
