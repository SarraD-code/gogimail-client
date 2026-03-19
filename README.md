# GogiMail Client

![Version](https://img.shields.io/badge/version-0.0.0-blue.svg)
![License](https://img.shields.io/badge/license-MIT-lightgrey.svg)
![Build](https://img.shields.io/badge/build-passing-brightgreen.svg)

> React + Vite frontend for the GogiMail email marketing application.

## Table of Contents

- [What the project does](#what-the-project-does)
- [Why it’s useful](#why-its-useful)
- [Tech stack](#tech-stack)
- [How to get started](#how-to-get-started)
- [Environment variables](#environment-variables)
- [Available scripts](#available-scripts)
- [Where to get help](#where-to-get-help)
- [Who maintains and contributes](#who-maintains-and-contributes)

## What the project does

GogiMail Client is a browser-based frontend for AI-assisted email campaign creation and management.
It integrates with a backend service (see [gogimail-server](https://github.com/bitbubz/gogimail-server)) and provides:

- Campaign setup and prompt-based email generation
- Audience selector and segment targeting
- Content variant generation and review workflow
- Analytics dashboard for performance insights
- Modern UI with MUI and Sass styling

## Why it’s useful

- Streamlines email marketing by taking AI-generated content from idea to review quickly
- Supports multiple campaign workflows: generate, edit, preview, and publish
- Helps maintain consistency and speed across marketing operations
- UI features reduce manual setup time and improve collaboration

## Tech stack

- React 19 (JSX/TS support via dependencies)
- Vite 7
- MUI (Material UI)
- Axios for HTTP requests
- React Router DOM for client-side routing
- Sass for styles

## How to get started

1. Clone the repository

```bash
git clone https://github.com/SarraD-code/gogimail-client.git
cd gogimail-client
```

2. Install dependencies

```bash
npm install
```

3. Create `.env` from `.example.env`

```bash
copy .example.env .env
```

4. Edit `.env` with backend url and port:

```ini
VITE_PORT=5173
VITE_BACKEND_URL=http://localhost:8080
```

5. Start development server

```bash
npm run dev
```

6. Open app in browser

- http://localhost:5173 (or configured port)

## Environment variables

- `VITE_PORT`: client app port (development)
- `VITE_BACKEND_URL`: backend API URL (e.g., `http://localhost:8080`)

## Available scripts

- `npm run dev`: start development server
- `npm run build`: build production artifacts
- `npm run preview`: preview production build
- `npm run lint`: run ESLint checks

## Where to get help

- Issues: open at https://github.com/SarraD-code/gogimail-client/issues
- Backend repo: https://github.com/bitbubz/gogimail-server
- Check [README.md](README.md) and `.github/` for future docs

## Who maintains and contributes

- Maintainer: `SarraD-code`
- Contributions welcome via pull requests
- No `CONTRIBUTING.md` file in this repo; use GitHub standard PR workflow:
  1. Fork repository
  2. Create feature branch
  3. Add tests/validation
  4. Submit PR

## Notes

- This repo is the frontend only. Full app requires the `gogimail-server` backend.
- Styling follows `src/styles` and components are in `src/components`.
