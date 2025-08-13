# Architecture Details

## Application Architecture
The GBC Controller follows a simple React architecture with real-time database synchronization:

### Core Components
- **App.tsx**: Default Vite template component (likely not used in production)
- **Controller.tsx**: Main application component handling match control interface
- **main.tsx**: Application entry point mounting React to DOM

### Data Flow
1. **Real-time Sync**: Firebase Realtime Database listeners update local state
2. **State Management**: Local React state (useState) for form inputs
3. **Data Submission**: Updates sent to Firebase via `update()` function
4. **Type Safety**: `MatchInfoType` ensures consistent data structure

### Data Model
```typescript
type MatchInfoType = {
  title: string;
  blue_teamName: string;
  orange_teamName: string;
  blue_setPoint: number;
  orange_setPoint: number;
  bo: "Bo1" | "Bo3";
};
```

### Firebase Integration
- **Database Path**: `match_info` root reference
- **Real-time Updates**: `onValue` listener with automatic cleanup
- **Write Operations**: `update()` for sending changes

### Build Configuration
- **Single File Build**: Uses `vite-plugin-singlefile` for standalone deployment
- **Windows Compilation**: Bun compiles to native Windows executable
- **External Dependencies**: React Router externalized in build

### Styling Architecture
- **Tailwind CSS**: Utility-first CSS framework
- **Custom Viewport Units**: Uses `vw` units for responsive design
- **Grid Layout**: CSS Grid for component positioning

### Development Features
- **Hot Module Replacement**: Vite dev server with HMR
- **TypeScript**: Full type checking and IntelliSense
- **ESLint**: Code quality and React best practices enforcement