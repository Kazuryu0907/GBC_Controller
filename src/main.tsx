import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { initializeApp, FirebaseOptions} from "firebase/app";
// import { BrowserRouter,Routes, Route} from "react-router-dom"
import './index.css'
// import App from './App.tsx'
import Controller from "./Controller.tsx";
// import ip from "ip";
// console.log(ip.address());

const firebaseConfig: FirebaseOptions = {
  apiKey: import.meta.env.VITE_API_KEY,
  authDomain: import.meta.env.VITE_AUTH_DOMAIN,
  databaseURL: import.meta.env.VITE_DATABASE_URL,
  projectId: import.meta.env.VITE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_APP_ID,
};
const app = initializeApp(firebaseConfig);
console.dir(firebaseConfig)
console.log(app.name);
createRoot(document.getElementById('root')!).render(
  <StrictMode>
    {/* <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/controller" element={<Controller/>} />
      </Routes>
    </BrowserRouter> */}
    <Controller/>
  </StrictMode>,
)
