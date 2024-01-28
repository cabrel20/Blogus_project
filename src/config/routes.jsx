// pages
import {
  AuthPage,
  DetailsPage,
  HomePage,
  UserProfilePage,
  WritePage,
} from "../containers";

// icons
import { CiUser } from "react-icons/ci";
import { CiBookmark } from "react-icons/ci";

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

// menu profile
export const menuProfile = [
  {
    title: "Profile",
    icon: <CiUser size={20} />,
    link: ROUTES_APP[3].path,
  },
  {
    title: "Stories",
    icon: <CiBookmark size={20} />,
    link: "/",
  },
];
