# Portfolio — Vite + React + TypeScript + Tailwind + shadcn-style

## Pages
- **/** About (photo, bio, experience, education)
- **/projects** Projects (loaded via Markdown files in `src/projects/`)

## Tech Stack
- **Frontend**: React 18 + TypeScript + Vite
- **Styling**: Tailwind CSS + shadcn/ui components
- **Routing**: React Router v6
- **Markdown**: react-markdown + remark-gfm
- **Build**: Vite

## Development
```bash
npm install
npm run dev
```

## Adding projects
Create a `.md` file in `src/projects/` with the following structure:

```markdown
# Project Title
Project description here.
Tags: React, TypeScript, Tailwind

## How it works
- Feature 1
- Feature 2

## Repository
Link to the repository.
```

The project will automatically appear in the projects page with:
- Title from the first heading (`# Title`)
- Description from the first non-heading line
- Tags from the `Tags:` line
- Full content rendered as markdown

## Components
The **Button**, **Card**, **Badge**, **Avatar** and **Separator** components are "vendored" in `src/components/ui/` for Vite compatibility without depending on shadcn CLI.
