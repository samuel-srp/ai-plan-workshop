# Skill: Angular 20+ Architecture

## Tech Stack
- **Framework:** Angular 20+ (Standalone focus).
- **State Management:** Angular Signals & RxJS.
- **CLI:** `angular-cli` for all generation tasks.

## Naming Conventions
- **Components:** `name.component.ts` (PascalCase class).
- **Services:** `name.service.ts`.
- **Directives/Pipes:** `name.directive.ts`, `name.pipe.ts`.
- **Routes:** Centralized `app.routes.ts` with lazy-loading.

## Code Quality
- **Signals:** Use Signals for UI state to optimize change detection (OnPush).
- **Control Flow:** Use modern `@if`, `@for`, and `@switch` syntax.
- **Dependency Injection:** Use the `inject()` function over constructor injection.
- **Error Handling:** Global ErrorHandler implementation for telemetry.