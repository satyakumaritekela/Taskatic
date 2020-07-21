import Error from "../Components/Error/Error";
//import Signup from "../Components/SignUp/SignUp";
import Login from "../Components/Login/Login";
import Landing from "../Components/Landing/Landing"
import Home from "../Components/Home/Home";
import ContactUs from "../Components/ContactUs/ContactUs";
import ForgotPassword from "../Components/ForgotPassword/ForgotPassword";
import ResetPassword from "../Components/ResetPassword/ResetPassword";
import Task from "../Components/Task/Task";
import Projects from "../Components/Projects/Projects";
import AboutUs from "../Components/AboutUs/AboutUs";
import Profile from "../Components/Profile/Profile";
import People from "../Components/People/People";
import ProjectDetailMain from "../Components/Projects/ProjectDetail/ProjectDetailMain/ProjectDetailMain";
import { Reports } from "../Components/Reports/Reports";
import { Comments } from "../Components/Comments/Comments";
import { InviteUser } from "../Components/InviteUser/InviteUser";
import AddUser from "../Components/AddUser/AddUser";
import Calendar from "../views/calendar";
import Notifications from "../views/notification";

const routes = [
  {
    path: "/home",
    exact: true,
    component: Home,
  },
  {
    path: "/about-us",
    exact: true,
    component: AboutUs,
  },
  {
    path: "/contact-us",
    exact: true,
    component: ContactUs,
  },
  {
    path: "/forgotpassword",
    exact: true,
    component: ForgotPassword,
  },
  {
    path: "/resetpassword",
    exact: true,
    component: ResetPassword,
  },
  {
    path: "/profile",
    exact: true,
    component: Profile,
  },
  {
    path: "/projects",
    exact: true,
    component: Projects,
  },
  {
    path: "/project/activesprint",
    exact: true,
    component: ProjectDetailMain,
  },
  {
    path: "/project/people",
    exact: true,
    component: People,
  },
  {
    path: "/people/:id",
    exact: true,
    component: Profile,
  },
  {
    path: "/login",
    exact: true,
    component: Landing,
  },
  {
    path: "/project/reports",
    exact: true,
    component: Reports,
  },
  {
    path: "/calendar",
    exact: true,
    component: Calendar,
  },
  {
    path: "/notifications",
    exact: true,
    component: Notifications,
  },
  {
    path: "/inviteUser",
    exact: true,
    component: InviteUser,
  },
  {
    path: "/addUser",
    exact: true,
    component: AddUser,
  },
  {
    path: "/comments",
    exact: true,
    component: Comments,
  },
  {
    path: "/",
    exact: true,
    component: Landing,
  },
  {
    path: "/*",
    component: Error,
  },
];

export default routes;
