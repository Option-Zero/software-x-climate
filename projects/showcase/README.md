# Final Projects Showcase

This directory contains documentation and artifacts for the Software for Climate final projects showcase page.

## Overview

The showcase page displays final projects from Software for Climate cohorts, organized by cohort with superlative badges for award-winning projects.

## Features

- **Tailwind CSS**: Modern utility-first CSS framework for polished, responsive UI
- **Airtable Integration**: Loads project data from Airtable API
- **Anchor Links**: Each project has a stable anchor URL for sharing (e.g., `/showcase#project-name`)
- **Superlative Badges**: Awards display with color-coded badges (Best Overall, Most Interesting, Best Execution)
- **Responsive Design**: Mobile-friendly with adaptive layouts
- **Loading States**: Skeleton UI while data loads
- **Playwright Tests**: 8 automated browser tests verify functionality

## Implementation

- **Route**: `/showcase`
- **API Endpoint**: `/api/projects`
- **Data Source**: Airtable Base ID `appiTlFyRhnNrKlLh`, Table `tblXD5Vfd9lUIhd10`
- **Filtering**: Only curated projects (`Curated? === true`) are displayed

## Components

- `Header.tsx` - Page header with course information and CTA
- `Footer.tsx` - Footer with signup CTA
- `CohortSection.tsx` - Groups projects by cohort
- `ProjectCard.tsx` - Collapsible project card with details
- `SuperlativeBadge.tsx` - Award badge component
- `ProjectLinks.tsx` - Project resource links (demo, code, slides, etc.)
- `TeamMembers.tsx` - Team member names
- `LoadingSkeleton.tsx` - Loading placeholder

## Running Tests

```bash
# Run all tests
pnpm playwright test

# Run tests in UI mode
pnpm playwright test --ui

# Run specific test file
pnpm playwright test tests/showcase.spec.ts
```

## Development

```bash
# Start dev server
pnpm dev

# Build for production
pnpm build

# Run linter
pnpm lint
```

## Screenshots

See `showcase-page.png` for a full-page screenshot of the implementation.

## Data Structure

Projects include:

- Name, Description (markdown), Team (comma-separated names)
- Cohort (e.g., "Feb 2025")
- Hero Image (array of images)
- Superlative (array like ["Best Overall"])
- Links: Presentation recording, slides, code repository, demo app, hex notebook
- Flags: Has Superlative, Curated?

## Configuration

Environment variable required:

```
AIRTABLE_API_KEY=your_api_key_here
```

## Design Decisions

1. **Tailwind over MUI**: Used Tailwind CSS for this page per requirements, though rest of site uses MUI
2. **Client-side fetching**: Projects loaded client-side with loading state for better UX
3. **Superlative projects expanded**: Award-winning projects shown expanded by default
4. **Stable anchors**: Project names converted to URL-safe IDs for sharing
5. **Team names as text**: LinkedIn links deferred until data structure includes URLs
