import React from 'react';
import './App.scss';
import { Dashboard } from './pages/dashboard';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { SearchPage } from './pages/search';
import { Layout } from './Layout ';

export const routesConfig = [
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Dashboard />,
      },
      {
        path: "search",
        element: <SearchPage />,
      },
    ]
  },
];
const router = createBrowserRouter(routesConfig);


function App() {
  return (
    <RouterProvider router={router} fallbackElement={<p>Loading...</p>} />
  );
}

export default App;
