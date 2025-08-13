# Code Style and Conventions

## TypeScript Configuration
- Uses TypeScript ~5.6.2 with strict type checking
- Project references setup with separate configs for app and node
- Modern ES2020+ features enabled

## Code Style
- **ESLint**: Configured with TypeScript ESLint, React hooks, and React refresh plugins
- **Formatting**: Uses recommended ESLint rules for TypeScript and React
- **Import Style**: ES6 modules with `type: "module"` in package.json

## React Conventions
- **Function Components**: Uses arrow functions for components (e.g., `Controller = () => {}`)
- **Hooks**: Follows React hooks rules (enforced by eslint-plugin-react-hooks)
- **State Management**: Uses Zustand for global state, useState for local state
- **Effects**: Uses useEffect for Firebase listeners with proper cleanup

## Naming Conventions
- **Variables**: camelCase (e.g., `blueTeamName`, `orangeTeamName`)
- **Types**: PascalCase with "Type" suffix (e.g., `MatchInfoType`)
- **Components**: PascalCase (e.g., `Controller`, `App`)
- **Constants**: camelCase for React components assigned to const

## Styling
- **CSS Framework**: Tailwind CSS with utility classes
- **Class Names**: Tailwind utility classes (e.g., `w-[95vw]`, `grid grid-cols-5`)
- **Responsive Design**: Uses Tailwind's responsive prefixes and viewport units

## Firebase Integration
- Uses Firebase Realtime Database with proper typing
- Implements real-time listeners with cleanup in useEffect
- Data structure follows snake_case for database fields (e.g., `blue_teamName`)

## File Organization
- Component files use `.tsx` extension
- CSS files are separate (`.css`)
- Assets organized in dedicated `assets/` folder