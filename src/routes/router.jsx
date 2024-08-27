import { createBrowserRouter } from 'react-router-dom';
import CreateEmployee from '../pages/CreateEmployee';
import EmployeeList from '../pages/EmployeeList';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <CreateEmployee />,
  },
  {
    path: 'list',
    element: <EmployeeList />,
  },
  {
    path: '*',
    element: <CreateEmployee />,
  },
]);
