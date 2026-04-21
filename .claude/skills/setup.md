# Skill: Angular Environment Setup

## Tech Stack
- **Framework:** Angular 20+
- **Package Manager:** pnpm (preferred)
- **Language:** TypeScript 5.x

## Installation
1. `npm install -g @angular/cli`
2. `pnpm install`
3. `ng serve`

## Scaffolding Rules
Always use the CLI to maintain metadata and consistency:
- Component: `ng g c path/to/component`
- Service: `ng g s path/to/service`
- Guard: `ng g g path/to/guard`

## Linting & Formatting
- **ESLint:** Enforce `@angular-eslint/template/accessibility`.
- **Prettier:** 2-space, single quotes, trailing commas.
- **Git Hooks:** Husky + lint-staged.