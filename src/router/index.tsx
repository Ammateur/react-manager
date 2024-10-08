import { createHashRouter, Navigate } from 'react-router-dom';
import Welcome from '@/views/Welcome';
import Login from '@/views/Login';
import Error404 from '@/views/404';
import Error403 from '@/views/403';
const routes = [
  {
    path: '/',
    element: <Welcome />
  },
  {
    path: '/login',
    element: <Login />
  },
  {
    path: '/404',
    element: <Error404 />
  },
  {
    path: '/403',
    element: <Error403 />
  },
  {
    path: '*',
    element: <Navigate to='/404' />
  }
];
const router = createHashRouter(routes);
export default router;
