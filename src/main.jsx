import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import Stats from './pages/stats/Stats';
import TimeLine from './pages/timeline/TimeLine';
import RootLayout from './layout/RootLayout';
import NotFoundPage from './pages/NotFoundPage/NotFoundPage';
import HomePage from './pages/homepage/Homepage';

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        index: true,
        element: <HomePage />
      },
      {
        path: "/timeline",
        element: <TimeLine />
      },
      {
        path: "/stats",
        element: <Stats />
      }
    ],
    errorElement: <NotFoundPage/>
  },
]);


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
