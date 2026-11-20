import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import Counter from './components/Counter.jsx'
import { RouterContextProvider } from 'react-router'
import { RouterProvider } from "react-router/dom";
import router from './routers/index.jsx'



createRoot(document.getElementById('root')).render(
  <StrictMode>
     <RouterProvider router={router} />,
  </StrictMode>,
)
