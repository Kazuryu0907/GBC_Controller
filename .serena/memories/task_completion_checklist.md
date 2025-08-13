# Task Completion Checklist

## Before Completing Any Development Task

### 1. Code Quality Checks
- [ ] Run `bun run lint` to check for ESLint violations
- [ ] Run `bun run build` to ensure TypeScript compilation passes
- [ ] Fix any type errors or linting issues

### 2. Testing
- [ ] Test the application locally with `bun dev`
- [ ] Verify Firebase connectivity and real-time updates work
- [ ] Test all form inputs and state changes
- [ ] Check responsive design on different screen sizes

### 3. Code Review
- [ ] Ensure code follows established conventions
- [ ] Check that TypeScript types are properly defined
- [ ] Verify proper cleanup of useEffect listeners
- [ ] Confirm Tailwind classes are used appropriately

### 4. Build Verification
- [ ] Run `bun run build` successfully
- [ ] Test production build with `bun run preview`
- [ ] For Windows deployment: Run `bun run publish:win` if needed

### 5. Git Workflow (if applicable)
- [ ] Stage changes with appropriate commit messages
- [ ] Ensure no sensitive data (Firebase config) is committed
- [ ] Push to appropriate branch

## Notes
- The project uses Bun as the runtime and package manager
- Firebase configuration should be properly secured
- Windows-specific build outputs target bun-windows-x64-modern
- Always test real-time functionality with Firebase before completion