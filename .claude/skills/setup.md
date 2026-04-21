# Skill: Angular Environment & Infrastructure Setup

## Tech Stack
- **Framework:** Angular 20+ (Modern Standalone Architecture).
- **UI Framework:** Angular Material (CDK & Material Components).
- **Styling:** Tailwind CSS (Utility-first approach).
- **Package Manager:** pnpm (Strict dependency resolution).
- **Language:** TypeScript 5.x (Strict mode enabled).

## Installation & Initialization
1. **Global Tools:** `npm install -g @angular/cli`.
2. **Project Setup:** `pnpm install`.
3. **Tailwind Setup:** Ensure `tailwind.config.js` and `postcss.config.js` are correctly mapped to `src/**/*.{html,ts}`.
4. **Dev Server:** `ng serve` or `pnpm start`.

## Scaffolding Rules (CLI First)
Never create files manually. Always use the CLI to ensure metadata, spec files, and styles are correctly linked:
- **Component:** `ng g c features/feature-name/components/name --display-block`
- **Service:** `ng g s core/services/name`
- **Directive:** `ng g d shared/directives/name`
- **Pipe:** `ng g p shared/pipes/name`

## Linters & Formatters
- **ESLint:** Use `@angular-eslint`. Enforce template-specific rules like `template/no-any` and `template/accessibility-label-for`.
- **Prettier:** Standardized config (2-space, single quotes). Must include Tailwind plugin for consistent class ordering.
- **Git Hooks:** Husky must run `lint-staged` on every commit. `lint-staged` should trigger `eslint --fix`, `prettier --write`, and relevant `vitest` tests.