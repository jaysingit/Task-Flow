# TaskFlow

A simple, single-page todo list app built with React, TypeScript, and Tailwind CSS.

## Features

- Add tasks via a text input, with validation that blocks empty/whitespace-only entries and shows an inline error message
- Reset button to clear the input and any validation error
- Delete individual tasks
- Auto-numbered task list (1, 2, 3, ...)
- Fixed header (title, images, input, and action buttons) with an independently scrollable task list below it

## Tech Stack

- [React 19](https://react.dev/) + [TypeScript](https://www.typescriptlang.org/)
- [Vite](https://vite.dev/) for dev server and build tooling
- [Tailwind CSS v4](https://tailwindcss.com/) for styling
- [React Compiler](https://react.dev/learn/react-compiler) (via Babel plugin) for automatic memoization

## Getting Started

Install dependencies:

```bash
npm install
```

Run the dev server:

```bash
npm run dev
```

Build for production:

```bash
npm run build
```

Preview the production build:

```bash
npm run preview
```

Lint the project:

```bash
npm run lint
```

## Project Structure

```
src/
  App.tsx                  # Root component: state, form submission, layout
  components/
    ImageHeader.tsx         # Title and header images
    Input.tsx               # Controlled text input for new tasks
    Button.tsx              # Reusable button (submit/reset/button)
    ItemList.tsx            # Renders the task list with delete actions
  types/
    utils.ts                # Shared TypeScript types (Items, ReactSetState)
```
