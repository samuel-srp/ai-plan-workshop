# Skill: Angular Testing Standards

## TDD Workflow
1. Write failing test spec (`.spec.ts`).
2. Write logic using `inject()` and Signals.
3. Refactor.

## Test Hierarchy
1. **Unit Tests:** Business logic, Pipes, and pure Services (Vitest).
2. **Component Tests:** Harnesses for UI interaction.
3. **E2E Tests:** Playwright for critical user journeys.

## Validation Patterns
- Use **Angular Component Harnesses** for stable DOM testing.
- Mock external dependencies using `provideMockStore` or custom providers.