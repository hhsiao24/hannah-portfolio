import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { NavigationWrapper } from './components/Header/NavigationWrapper';
import { HomePage } from './pages/Home.page';

const router = createBrowserRouter(
  [
    {
      path: '',
      element: <NavigationWrapper />, // Wrap the NavigationWrapper
      children: [
        {
          path: '',
          element: <HomePage />, // HomePage as the child route
        },
      ],
    },
  ],
  {
    basename: '/hannah-portfolio',
  }
);

export function Router() {
  return <RouterProvider router={router} />;
}
