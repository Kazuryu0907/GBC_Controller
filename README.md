# 🎮 GBC Controller

A modern, beautiful web application for controlling and managing tournament match information in real-time. Built with React, TypeScript, and Firebase for seamless match control and broadcasting.

![GBC Controller](https://img.shields.io/badge/React-18.3.1-blue?logo=react)
![TypeScript](https://img.shields.io/badge/TypeScript-Latest-blue?logo=typescript)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.4.15-38B2AC?logo=tailwind-css)
![Firebase](https://img.shields.io/badge/Firebase-11.8.1-orange?logo=firebase)

## ✨ Features

- **🏆 Real-time Match Control**: Live synchronization of match data via Firebase
- **🎨 Modern UI/UX**: Beautiful gradient backgrounds with glassmorphism effects
- **📱 Responsive Design**: Works perfectly on desktop, tablet, and mobile devices
- **⚡ Fast Performance**: Built with Vite for lightning-fast development and builds
- **🔧 Modular Components**: Reusable, well-structured component architecture
- **🎯 Tournament Ready**: Support for Bo1, Bo3, Bo5 match formats
- **🔴🟠 Team Management**: Blue and Orange team configuration with score tracking

## 🚀 Tech Stack

- **Frontend**: React 18.3.1 + TypeScript
- **Styling**: Tailwind CSS 3.4.15
- **State Management**: Zustand 5.0.1
- **Database**: Firebase Realtime Database 11.8.1
- **Build Tool**: Vite 5.4.10
- **Runtime**: Bun

## 📦 Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/GBC_Controller.git
   cd GBC_Controller
   ```

2. **Install dependencies**
   ```bash
   # Using bun (recommended)
   bun install
   
   # Or using npm
   npm install
   ```

3. **Environment Setup**
   Create a `.env` file in the root directory:
   ```env
   VITE_API_KEY=your_firebase_api_key
   VITE_AUTH_DOMAIN=your_project.firebaseapp.com
   VITE_DATABASE_URL=https://your_project.firebaseio.com
   VITE_PROJECT_ID=your_project_id
   VITE_STORAGE_BUCKET=your_project.appspot.com
   VITE_MESSAGING_SENDER_ID=your_sender_id
   VITE_APP_ID=your_app_id
   ```

4. **Start development server**
   ```bash
   # Using bun
   bun dev
   
   # Or using npm
   npm run dev
   ```

## 🎯 Usage

### Match Control Interface

1. **🏆 Match Title**: Set the tournament or match name
2. **🔵 Blue Team**: Configure blue team name and score
3. **🟠 Orange Team**: Configure orange team name and score  
4. **⚔️ Match Format**: Select Bo1, Bo3, or Bo5 format
5. **🚀 Update**: Real-time sync to Firebase database

### Component Structure

```
src/
├── Controller.tsx          # Main controller component
├── components/            # Reusable UI components
│   ├── TeamInput         # Team name input component
│   ├── ScoreCounter      # Score increment/decrement
│   └── FormatSelector    # Match format selection
├── main.tsx              # Application entry point
└── index.css             # Global styles
```

## 🔧 Development

### Available Scripts

- `bun dev` - Start development server
- `bun build` - Build for production
- `bun preview` - Preview production build
- `bun lint` - Run ESLint

### Firebase Setup

1. Create a Firebase project at [Firebase Console](https://console.firebase.google.com/)
2. Enable Realtime Database
3. Configure database rules for your use case
4. Copy configuration to `.env` file

### Customization

The application uses a modular component system. You can easily:

- **Add new match formats**: Update the `options` array in `FormatSelector`
- **Change team colors**: Modify color classes in `TeamInput` and `ScoreCounter`
- **Customize styling**: Update Tailwind classes or extend the theme

## 🎨 Design Features

- **Gradient Backgrounds**: Beautiful indigo-purple-pink gradients
- **Glassmorphism**: Backdrop blur effects with transparent cards
- **Smooth Animations**: Hover and active state transitions
- **Color-coded Teams**: Blue and orange theme consistency
- **Modern Typography**: Clean, readable font hierarchy

## 🚀 Deployment

### Build for Production

```bash
bun build
```

The `dist/` folder will contain the production-ready files.

### Deploy to Firebase Hosting

```bash
# Install Firebase CLI
npm install -g firebase-tools

# Login and initialize
firebase login
firebase init hosting

# Deploy
firebase deploy
```

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- **Firebase** for real-time database capabilities
- **Tailwind CSS** for the beautiful styling framework
- **React** community for excellent ecosystem
- **Vite** for blazing-fast development experience

---

**dev by Kazuryu** 💫

Built with ❤️ for the gaming community