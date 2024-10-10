// Default imports from vite
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'

// JB Added
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import ErrorPage from './components/ErrorPage.tsx'
import SchoolsPage from './components/SchoolsPage.tsx'
import SignInPage from './components/SignInPage.tsx'
import StudentsPage from './components/StudentsPage.tsx'
import ApplicationsPage from './components/ApplicationsPage.tsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: '/signin',
        element: <SignInPage />
      },
      {
        path: '/schools',
        element: <SchoolsPage />
      },
      {
        path: '/applications',
        element: <ApplicationsPage />
      },
      {
        path: '/students',
        element: <StudentsPage />
      },
      // {
      //   path:"/applications/:id",
      //   element: <ApplicationProfile />
      // },
      // {
      //   path:"/students/:id",
      //   element: <StudentProfile />
      // },
      // {
      //   path:"/home/schools/:id",
      //   element: <SchoolProfile />
      // }
    ]
  }
])

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
