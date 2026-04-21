# Skill: Autonomous Workflow & Decision Framework

## 🔄 The Development & Validation Loop
1. **Plan:** Identify scope and CLI commands.
2. **Execute:**
   - Run `ng generate`.
   - Implement logic using `inject()` and Signals.
3. **Internal Review & Cleanup:**
   - **Check for Comments:** Resolve `// TODO`, `// FIXME` or debug logs immediately.
   - **Validation:** Execute `ng lint` and relevant `.spec.ts`.
4. **Commit:**
   - **Timing:** ONLY commit once code is functional, linted, and tests pass.
   - **Standard:** Conventional Commits (`feat(scope): description`).
5. **Final Integration:** Build check for global impacts.

## Decision Framework
- **Architecture:** Follow Angular Style Guide/MCP.
- **Signals vs RxJS:** Signals for state; RxJS for streams/events.
- **UI:** Material for complexity; Tailwind for aesthetics.