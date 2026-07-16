# Codebase Reorganization & Cleanup Summary

This document summarizes the codebase cleanup, files moved, lines of code commented/removed, and dependencies removed to streamline the TechNeekX project.

---

## 1. Removed Unused Dependencies
The following dependencies were identified as unused in the active codebase and have been removed from [package.json](file:///c:/Users/junaid/Desktop/TechNeekX/package.json):

- **`@emailjs/browser`**: EmailJS client package (no imports found in active code).
- **`@emoji-mart/data`**: Emoji mart data (no imports found).
- **`@emoji-mart/react`**: Emoji mart React component (no imports found).
- **`emoji-picker-react`**: Used only in the unused `Chatbot.tsx` component.
- **`next-video`**: The project uses standard HTML5 `<video>` tags instead.
- **`react-icon`**: React Icon wrapper (no imports found, project uses `react-icons` instead).

---

## 2. Reorganized Unused Files & Components
A new [extra/](file:///c:/Users/junaid/Desktop/TechNeekX/extra) folder has been created at the root, and all unused components, hooks, and files have been moved into it to maintain a clean workspace.

### Unused Components (`extra/components/`)
- `BuilderWall.tsx`
- `Chatbot.tsx`
- `CommandPalette.tsx`
- `CommunityPartnersWall.tsx`
- `Contact.tsx`
- `CoreTeam.tsx`
- `CoreTeamHiring.tsx`
- `CurrentProjects.tsx`
- `EliteClub.tsx`
- `EventsOrganized.tsx`
- `FOMOLayer.tsx`
- `LiveActivityFeed.tsx`
- `MovementPositioning.tsx`
- `OnboardingPrompt.tsx`
- `Partnership.tsx`
- `Projects.tsx`
- `ProjectsShowcase.tsx`
- `ProjectsSummary.tsx`
- `SocialProof.tsx`
- `StickyCTA.tsx`
- `SuggestedForYou.tsx`
- `Team.tsx`
- `TeamCard.tsx`
- `TeamSection.tsx`
- `TrustElements.tsx`
- `ViralLoop.tsx`
- `WhatWeDo.tsx`
- `WhyJoin.tsx`

### Unused Hooks (`extra/hooks/`)
- `useUserProfile.ts` (Only referenced in unused `SuggestedForYou` and `OnboardingPrompt` components)

### Unused Config & Declaration Files (`extra/root/`)
- `video.d.ts` (Next-video declaration file, unused)
- `EMAILJS_SETUP.md` (EmailJS instructions, unused)

---

## 3. Cleaned Up Unused Code in Active Components
Unused imports, variables, and commented-out JSX/code blocks have been removed from the active components:

- **[page.tsx (Main Homepage)](file:///c:/Users/junaid/Desktop/TechNeekX/src/app/page.tsx)**:
  - Removed 16 unused component imports.
  - Removed unused React `useState` and `useEffect` imports.
  - Removed commented-out `ScrollProgress` component declaration.
  - Removed commented-out `<ScrollProgress />`, `<StickyCTA />`, and `<section id="hero">` wrapper elements in the JSX.
- **[page.tsx (Journey Page)](file:///c:/Users/junaid/Desktop/TechNeekX/src/app/journey/page.tsx)**:
  - Removed unused imports for `LiveActivityFeed`, `StickyCTA`, and `CommandPalette`.
  - Removed commented-out `<StickyCTA />`, `<CommandPalette />`, and `<LiveActivityFeed />` JSX elements.
- **[About.tsx](file:///c:/Users/junaid/Desktop/TechNeekX/src/components/About.tsx)**:
  - Removed unused import of `PartnersMarquee`.
- **[Navbar.tsx](file:///c:/Users/junaid/Desktop/TechNeekX/src/components/Navbar.tsx)**:
  - Removed unused `useScroll` import from `framer-motion`.
  - Removed unused local reference variable `mobileMenuRef`.
- **[Hero.tsx](file:///c:/Users/junaid/Desktop/TechNeekX/src/components/Hero.tsx)**:
  - Removed unused `FORM_CONFIG` import.
- **[FeaturedProjects.tsx](file:///c:/Users/junaid/Desktop/TechNeekX/src/components/FeaturedProjects.tsx)**:
  - Removed unused `useRef` import.
- **[FeaturedEvents.tsx](file:///c:/Users/junaid/Desktop/TechNeekX/src/components/FeaturedEvents.tsx)**:
  - Removed unused `useRef` import.

---

## 4. Cleaned Up Unused CSS Rules
Unused classes in active stylesheets have been commented out to keep styles clean:

- **[FeaturedProjects.css](file:///c:/Users/junaid/Desktop/TechNeekX/src/styles/FeaturedProjects.css)**:
  - Commented out unused rules: `.featured-projects-bg-video`, `.featured-projects-title-line`, `.featured-card-badges`, `.project-badge`, `.badge-status-live`, `.badge-dot`, `.badge-status-in-progress`, `.badge-status-in-development`, `.badge-ai`, `.badge-icon-purple`.
- **[Gallery.css](file:///c:/Users/junaid/Desktop/TechNeekX/src/styles/Gallery.css)**:
  - Commented out unused lightbox modal rules (since the home page gallery doesn't use a lightbox): `.lightbox-overlay`, `.lightbox-content`, `.lightbox-img-wrapper`, `.lightbox-caption`, `.lightbox-close`, and `.lightbox-close:hover`.
