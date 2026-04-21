# Skill: Testing Standards & Validation Patterns

## TDD Workflow
1. **Red:** Create a `.spec.ts` file describing the expected behavior.
2. **Green:** Implement the logic in the `.ts` file using the `inject()` pattern.
3. **Refactor:** Clean up the implementation while keeping tests passing.

## Test Hierarchy
- **Unit Tests (Vitest):** Fast, isolated tests for pure functions, Pipes, and Services.
- **Integration Tests:** Testing components with their templates using `ComponentFixture`.
- **E2E Tests (Playwright):** Testing critical user flows (Login, Checkout, Profile updates).

## Validation & Mocking
- **Component Harnesses:** Use Angular Material's `TestHarness` to interact with Material components in tests.
- **Mocking:** Use `provideHttpClientTesting` for API mocks.
- **Zod:** Use Zod schemas to validate incoming JSON data from APIs before it reaches the Signal state.