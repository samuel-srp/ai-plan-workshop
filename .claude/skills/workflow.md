# Skill: Autonomous Workflow & Decision Framework

## Autonomous Development Loop
1. **Plan:** Review `CLAUDE.md` and current state.
2. **Scaffold:** Use `ng generate` to create the necessary files.
3. **Logic:** Implement functionality using Angular 20 best practices.
4. **Test:** Run `vitest` to verify changes.
5. **Commit:** Document changes following standards.

## Decision Framework
- **Architecture:** Check the "Angular Style Guide" or "Angular MCP" for the recommended pattern.
- **Signals vs RxJS:** Use Signals for state that changes over time; use RxJS for asynchronous events (HTTP, WebSockets).
- **UI:** Prefer Material for complex logic (Modals/Inputs), Tailwind for aesthetics.

## Commit & PR Standards
- **Commits:** Conventional Commits (e.g., `feat(ui): add material data table with tailwind spacing`).
- **PRs:** Must contain:
    - Description of "Why" and "How".
    - Screenshot for UI changes.
    - Confirmation that `ng lint` and `ng test` passed locally.