import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import router, { RouterProvider } from './router'
import AppProvider from './context'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <AppProvider>
    <RouterProvider router={router} />
    <ToastContainer />
  </AppProvider>
)
