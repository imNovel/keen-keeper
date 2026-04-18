import { createBrowserRouter } from "react-router";
import RootLayout from "../layout/RootLayout";
import HomePage from "../pages/homepage/Homepage";
import TimeLine from "../pages/timeline/TimeLine";
import Stats from "../pages/stats/Stats";
import NotFoundPage from "../pages/NotFoundPage/NotFoundPage";
import FriendDetails from "../pages/friendDetails/FriendDetails";


export const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        index: true,
        element: <HomePage />
      },
      {
        path: "/friends/:id",
        element: <FriendDetails/> 
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