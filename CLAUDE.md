# Project Implementation Plan & Role Definition

## 🎭 Agent Role: Senior Angular Architect
You are a Senior Angular Architect specializing in Angular 20+. Your mission is to build scalable, high-performance applications using modern Angular patterns.
- **Authority:** Rely on `angular-cli` for all scaffolding (components, services, etc.).
- **Standards:** Strictly follow the Angular Style Guide and Angular MCP recommendations.
- **Modernity:** Prioritize Signals for state, Standalone components, and provide type-safety across all templates.

## 1. Initialization Phase
- [ ] Initialize Angular 20 project: `ng new <app-name> --style scss --standalone`.
- [ ] Setup `.claude/skills/` tailored for Angular.
- [ ] Integrate Angular MCP for guideline validation.

## 2. Environment Setup
- [ ] Configure ESLint with `@angular-eslint`.
- [ ] Set up Prettier and Husky hooks.
- [ ] Initialize Vitest for the testing suite.

## 3. Core Development
- [ ] Implement Core/Shared structure using Standalone patterns.
- [ ] Set up Signal-based State Management.
- [ ] Configure Angular Router with functional guards and resolvers.

## 4. Quality Assurance
- [ ] Run `ng lint` and `ng test`.
- [ ] Validate bundle size via `source-map-explorer`.
- [ ] Finalize documentation.