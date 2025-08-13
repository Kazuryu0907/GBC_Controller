# GBC Controller - Project Overview

## Purpose
GBC Controller is a React-based web application for controlling and managing match information for what appears to be gaming tournaments or competitions. The application provides a controller interface to manage match details including team names, scores, and match format (Bo1/Bo3).

## Tech Stack
- **Frontend Framework**: React 18.3.1 with TypeScript
- **Build Tool**: Vite 5.4.10
- **Styling**: Tailwind CSS 3.4.15
- **State Management**: Zustand 5.0.1
- **Database**: Firebase 11.8.1 (Realtime Database)
- **Runtime**: Bun (for building and compilation)
- **Package Manager**: Bun (evidenced by bun.lockb)

## Project Structure
```
├── public/           # Static assets
├── src/             # Source code
│   ├── assets/      # React assets (SVG files)
│   ├── App.tsx      # Main app component (default Vite template)
│   ├── Controller.tsx # Main controller component for match management
│   ├── main.tsx     # Entry point
│   └── *.css        # Styling files
├── package.json     # Dependencies and scripts
├── vite.config.ts   # Vite configuration
├── eslint.config.js # ESLint configuration
└── tailwind.config.js # Tailwind CSS configuration
```

## Key Features
- Real-time match information control via Firebase
- Team name management (Blue/Orange teams)
- Score tracking with set points
- Match format selection (Bo1/Bo3)
- Live synchronization across connected clients