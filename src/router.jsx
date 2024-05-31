import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import Login from "./pages/Login";
import Profile from "./pages/Profile";
import Stuff from "./pages/Stuff";
import Inbound from "./pages/Inbound";
// import InboundCreate from "./pages/InboundCreate";
import Dashboard from "./pages/Dashboard";
import StuffTrash from "./pages/StuffTrash";
import Lending from "./pages/Lending";
// import User from "./pages/User";

export const router = createBrowserRouter([
    { path: '/', element: <App /> },
    { path: '/login', element: <Login /> },
    { path: '/profile', element: <Profile /> },
    { path: '/stuff', element: <Stuff /> },
    { path: '/inbound', element: <Inbound /> },
    // { path: '/inbound-create', element: <InboundCreate /> },
    { path: '/dashboard', element: <Dashboard /> },
    { path: '/stuffs/trash', element: <StuffTrash /> },
    { path: '/Lending', element: <Lending /> },


])