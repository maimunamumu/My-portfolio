import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { RouterProvider } from 'react-router'
import { router } from './routes/route.jsx'
import TargetCursor from './components/TargetCursor.jsx'
import AuthProvider from './Context/AuthProvider.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>


    <AuthProvider>
      <TargetCursor spinDuration={2} hideDefaultCursor={true}></TargetCursor>
      <RouterProvider router={router} >

      </RouterProvider>
    </AuthProvider>
  </StrictMode>,
)
