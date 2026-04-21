# Skill: Architecture, Naming, & Quality Standards

## Tech Stack Integration
- **Framework:** Angular 20+ focusing on **Signals** for reactivity.
- **UI:** Hybrid approach—Angular Material for complex components (Tables, Dialogs, Datepickers) and Tailwind CSS for layouts and fine-grained UI adjustments.

## Naming Conventions
- **Files:** Follow `feature.type.ts` (e.g., `user-profile.component.ts`, `auth.service.ts`).
- **Variables:** camelCase for instances; PascalCase for classes/types.
- **Observables:** Suffix with `$` (e.g., `userList$`).
- **Signals:** No specific suffix, but prefer descriptive names (e.g., `currentUser`).

## Code Quality & Patterns
- **Signals:** Use `signal`, `computed`, and `effect` for local state. Avoid `ChangeDetectorRef.detectChanges()`.
- **Dependency Injection:** Exclusively use the `inject()` function at the class field level for better composability and type safety.
- **Control Flow:** Use the `@if`, `@for`, `@switch` block syntax.
- **Types:** Interfaces over Types for public APIs. Strict null checks are non-negotiable.

## Error Handling & Comments
- **Global Handler:** Implement a `GlobalErrorHandler` class extending Angular's base.
- **Services:** Use `catchError` in RxJS streams to handle API failures gracefully.
- **Comments:** Use JSDoc for complex business logic. Use `TODO:` and `FIXME:` tags with descriptions to track technical debt.