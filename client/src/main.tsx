// Default imports from vite
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'

// JB Added
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import ErrorPage from './components/ErrorPage.tsx'
import SchoolsPage from './components/SchoolsPage.tsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: '/schools',
        element: <SchoolsPage />
      },
      {
        path: '/applications',
        element: <App />
      },
      {
        path: '/students',
        element: <App />
      },
      {
        path:"/applications/:id",
        element: <App />
      },
      {
        path:"/students/:id",
        element: <App />
      },
      {
        path:"/home/schools/:id",
        element: <App />
      }
    ]
  }
])

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
