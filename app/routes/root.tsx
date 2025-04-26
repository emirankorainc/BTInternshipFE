import { QueryClientProvider } from '@tanstack/react-query';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import '../main.css';
import { queryClient } from '../utils/query-client.ts';
import routeNames from './route-names.tsx';
import { Contact } from '@app/pages/Contact.tsx';
import { Home } from '@app/pages/Home.tsx';
import { Layout } from '@app/components/layout/Layout.tsx';
import { Buckets } from '@app/pages/Buckets.tsx';
import { BucketDetail } from '@app/features/buckets/BucketDetail.tsx';
import { Dashboard } from '@app/pages/Dashboard.tsx';
import { Evaluation } from '@app/pages/Evaluation.tsx';
import { Roles } from '@app/pages/Roles.tsx';
import { Teams } from '@app/pages/Teams.tsx';
import { Users } from '@app/pages/Users.tsx';
import { People } from '@app/pages/People.tsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        path: routeNames.root(),
        element: <Home />,
      },
      {
        path: routeNames.contact(),
        element: <Contact />,
      },
      {
        path: routeNames.buckets(),
        children: [
          { index: true, Component: Buckets },
          { path: ':id', Component: BucketDetail },
        ],
      },
      {
        path: routeNames.dashboard(),
        element: <Dashboard />,
      },
      {
        path: routeNames.evaluation(),
        element: <Evaluation />,
      },
      {
        path: routeNames.roles(),
        element: <Roles />,
      },
      {
        path: routeNames.teams(),
        element: <Teams />,
      },
      {
        path: routeNames.users(),
        element: <Users />,
      },
      {
        path: routeNames.people(),
        element: <People />,
      },
    ],
  },
]);

export default function Root() {
  return (
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
    </QueryClientProvider>
  );
}
