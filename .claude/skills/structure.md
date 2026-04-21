# Skill: Architecture, Naming, & Quality Standards

## Tech Stack Integration
- **Framework:** Angular 20+ focusing on **Signals** for reactivity.
- **UI:** Angular Material for complex logic; Tailwind CSS for layouts and fine-grained UI.

## Naming Conventions
- **Files:** `feature.type.ts` (kebab-case).
- **Variables:** camelCase; PascalCase for classes.
- **Observables:** Suffix with `$`.
- **Signals:** Descriptive names (e.g., `userProfile`).

## Code Quality & Patterns
- **Signals:** Use `signal`, `computed`, and `effect`. Avoid manual change detection.
- **Dependency Injection:** Use `inject()` function at the class field level.
- **Control Flow:** Use modern `@if`, `@for`, `@switch` syntax.
- **Types:** Strict null checks are non-negotiable.

## Error Handling & Comments
- **Global Handler:** Implement `GlobalErrorHandler`.
- **Comments:** JSDoc for complex logic. Use `TODO:` and `FIXME:` tags with descriptions.