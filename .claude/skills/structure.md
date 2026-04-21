# Skill: Architecture & Quality

## Naming Conventions
- **Files:** PascalCase for Components, kebab-case for utilities.
- **Variables:** camelCase.
- **Types/Interfaces:** PascalCase (prefixed with 'T' or 'I' only if specified).

## Code Quality
- **Principles:** DRY (Don't Repeat Yourself), KISS (Keep It Simple, Stupid).
- **Types:** Strict mode enabled. Avoid `any` at all costs; use `unknown` if necessary.
- **Error Handling:** Use custom Error classes and Try/Catch blocks at the boundary layers.
- **Comments:** Use JSDoc for complex logic; code should be self-documenting otherwise.