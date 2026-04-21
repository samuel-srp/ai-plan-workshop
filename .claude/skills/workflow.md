# Skill: Angular Workflow

## Autonomous Development Loop
- Plan -> `ng generate` -> Logic -> Test -> Commit.

## Decision Framework
- Follow Angular MCP for architectural alignment.
- Prioritize "Standalone" components over NgModules.
- Use `Signals` for local state; `RxJS` for data streams.

## Commit Standards
- Conventional Commits: `feat(scope): description`.
- Automated PR checks for bundle size regressions.