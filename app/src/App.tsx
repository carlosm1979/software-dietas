import React from 'react';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './App.css';
import { Home } from './views/home';
import { FoodCatalog } from './views/catalog';
import { TopBar } from './components/topBar';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/catalog",
    element: <FoodCatalog />,
  },
]);

function App() {
  return (
    <div>
      <TopBar />
      <RouterProvider router={router} />   

    </div>
  );
}

export default App;
