# Skill: UI/UX, Component Design & Navigation

## Look & Feel (Styling)
- **Angular Material:** Foundation for accessible components.
- **Tailwind CSS:** Layout, spacing, and custom branding.
- **Themes:** Centralized `theme.scss` using Material Sass mixins and Tailwind dark mode.

## Navigation & Routing
- **Structure:** Centralized `app.routes.ts`.
- **Lazy Loading:** All routes must use `loadComponent`.
- **Guards:** Use functional `CanActivateFn` guards.
- **Resolvers:** Use `ResolveFn` to pre-fetch data.

## State Feedback
- **Loading:** Interceptor-based loading state with `MatProgressBar`.
- **Error:** `MatSnackBar` for non-blocking errors.
- **i18n:** `@angular-localize` for static text.