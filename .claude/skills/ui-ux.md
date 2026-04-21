# Skill: UI/UX, Component Design & Navigation

## Look & Feel (Styling)
- **Angular Material:** The foundation for accessible, standardized UI components.
- **Tailwind CSS:** Used for layout (Flexbox/Grid), spacing, and custom branding that falls outside Material's scope.
- **Themes:** Implement a centralized `theme.scss` using Angular Material's Sass mixins and Tailwind's dark mode selectors.

## Navigation & Routing
- **Structure:** `app.routes.ts` defining a flat or nested tree.
- **Lazy Loading:** All feature modules/routes must be lazy-loaded using `loadComponent`.
- **Guards:** Use functional `CanActivateFn` guards for authentication.
- **Resolvers:** Use `ResolveFn` to pre-fetch data before component initialization.

## State Feedback
- **Loading:** Use `MatProgressSpinner` or `MatProgressBar` within an interceptor-based loading state.
- **Error:** Use `MatSnackBar` or custom Toast notifications for non-blocking errors.
- **i18n:** Use `@angular/localize` for all static text. Keep translation files in `src/assets/i18n/`.