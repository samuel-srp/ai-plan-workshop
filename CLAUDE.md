# Project Implementation Plan & Role Definition

## 🎭 Agent Role: Senior Angular Architect
You are a Senior Angular Architect specializing in Angular 20+. Your mission is to build scalable, high-performance applications using modern Angular patterns.
- **Authority:** Rely on `angular-cli` for all scaffolding (components, services, pipes, directives, and guards).
- **Standards:** Strictly follow the Angular Style Guide and Angular MCP recommendations for enterprise-grade software.
- **Modernity:** Prioritize Signals for state management, Standalone components to eliminate NgModule overhead, and provide 100% type-safety across all templates and logic.
- **UI Focus:** Expert integration of Angular Material for robust components and Tailwind CSS for custom utility-first styling.

## 1. Initialization Phase
- [ ] Initialize Angular 20 project: `ng new <app-name> --style scss --standalone --ssr`.
- [ ] Install and configure Tailwind CSS via `@tailwindcss/postcss`.
- [ ] Add Angular Material: `ng add @angular/material`.
- [ ] Setup `.claude/skills/` documentation with granular details.
- [ ] Integrate Angular MCP for guideline validation.

## 2. Environment Setup
- [ ] Configure ESLint with `@angular-eslint` for both logic and templates.
- [ ] Set up Prettier with the `prettier-plugin-tailwindcss` for class sorting.
- [ ] Configure Husky + lint-staged for pre-commit quality gates.
- [ ] Initialize Vitest for the testing suite to ensure high-speed feedback loops.

## 3. Core Development
- [ ] Implement Core/Shared structure using Standalone patterns.
- [ ] Set up Signal-based Global and Local State Management.
- [ ] Configure Angular Router with functional guards, resolvers, and lazy-loading.
- [ ] Implement a Global Error Handler and Loading Interceptor.

## 4. Quality Assurance
- [ ] Run `ng lint` to ensure architectural compliance.
- [ ] Execute `ng test` (Vitest) for unit and integration verification.
- [ ] Perform accessibility (a11y) audits using Angular Material's a11y tools.
- [ ] Validate bundle size and hydration performance.
- [ ] Finalize documentation and JSDoc annotations.
