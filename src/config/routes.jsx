import {
  AuthPage,
  DetailsPage,
  HomePage,
  UserProfilePage,
  WritePage,
} from "../containers";

// pages of app with different paths
export const ROUTES_APP = [
  {
    path: "/auth",
    element: <AuthPage />,
  },
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/detalis/:{id}",
    element: <DetailsPage />,
  },
  {
    path: "/user/:{id}",
    element: <UserProfilePage />,
  },
  {
    path: "/writepage",
    element: <WritePage />,
  },
];
