# Skill: Testing & Validation

## TDD Workflow
1. Write a failing test case.
2. Write minimum code to pass.
3. Refactor while maintaining green status.

## Test Hierarchy
1. **Unit Tests:** Business logic and utility functions (Vitest).
2. **Integration Tests:** Component interactions and hooks.
3. **E2E Tests:** Critical user paths (Playwright).

## Validation Patterns
- Use **Zod** for schema validation at API boundaries.
- Ensure 80%+ code coverage on core logic.