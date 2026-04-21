# Skill: Testing Standards & Validation Patterns

## TDD Workflow
1. **Red:** Create a `.spec.ts` describing expected behavior.
2. **Green:** Implement logic using `inject()` and Signals.
3. **Refactor:** Clean up while keeping tests passing.

## Test Hierarchy
- **Unit Tests (Vitest):** Fast, isolated tests for pure logic.
- **Integration Tests:** Testing components with templates using `ComponentFixture`.
- **E2E Tests (Playwright):** Testing critical user flows.

## Validation & Mocking
- **Component Harnesses:** Use Angular Material `TestHarness`.
- **Mocking:** Use `provideHttpClientTesting`.
- **Zod:** Validate incoming JSON data before it reaches the state.