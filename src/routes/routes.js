import { lazy } from "react";

const Home = lazy(() => import('../pages/Home.page'));
const Login = lazy(() => import('../pages/Login.page'));
const Dashboard = lazy(() => import('../pages/Dashboard.page'));

const routes = [
    {
        name: 'Home',
        path: '/',
        component: Home,
        exact: true,
        authentication: false
    },
    {
        name: 'Dashboard',
        path: '/dashboard',
        component: Dashboard,
        exact: true,
        authentication: true
    },
    {
        name: 'Login',
        path: '/login',
        component: Login,
        exact: true,
        authentication: false
    }

];

export default routes;