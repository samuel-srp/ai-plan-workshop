# Skill: Project Setup

## Tech Stack
- **Runtime:** Node.js (LTS)
- **Package Manager:** pnpm
- **Language:** TypeScript 5+

## Installation
1. `pnpm install` - Install dependencies.
2. `pnpm dev` - Start local development server.

## Linting & Formatting
- **ESLint:** Use `eslint-config-prettier` to avoid conflicts.
- **Prettier:** Standardized config with 2-space indentation and single quotes.
- **Git Hooks:** Husky + lint-staged to run `pnpm lint` and `pnpm test:related` on commit.