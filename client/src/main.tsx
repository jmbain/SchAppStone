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
import ApplyToSchoolForm from './components/ApplyToSchoolForm.tsx'
import HomePage from './components/Home.tsx'
import SchoolProfile from './components/SchoolProfile.tsx'
import MySchoolsPage from './components/MySchoolsPage.tsx'
import UserPage from './components/UserPage.tsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: '/home',
        element: <HomePage />
      },
      {
        path: '/signin',
        element: <SignInPage />
      },
      {
        path: '/schools',
        element: <SchoolsPage />
      },
      {
        path: '/myschools',
        element: <MySchoolsPage />
      },
      {
        path: '/applications',
        element: <ApplicationsPage />
      },
      {
        path: '/students',
        element: <StudentsPage />
      },
      {
        path: '/apply',
        element: <ApplyToSchoolForm />
      },
      // {
      //   path:"/applications/:id",
      //   element: <ApplicationProfile />
      // },
      // {
      //   path:"/students/:id",
      //   element: <StudentProfile />
      // },
      {
        path:"/schools/:id",
        element: <SchoolProfile />
      },
      {
        path:"/user", // reminder to update to include /:id so that parameter accesses correct user?
        element: <UserPage />
      },
    ]
  }
])

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
