import React from 'react';
import { createRoot } from 'react-dom/client';
import { Header } from './src/components/Header';
import { Container } from './src/components/Container';
import { Footer } from './src/components/Footer';
import { About } from './src/components/About';
import { Contact } from './src/components/Contact';
import { Error } from './src/components/Error';
import '/app.css';
import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom';
import RestaurantMenu from './src/components/RestaurantMenu';

const App = () => {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
};

const appRouter = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <Error />,
    children: [
      {
        path: '/',
        element: <Container />,
      },
      {
        path: '/about',
        element: <About />,
        children: [
          {
            path: ':id',
            element: <Container />,
          },
        ],
      },
      {
        path: '/contact',
        element: <Contact />,
      },
      {
        path: '/restaurant/:id',
        element: <RestaurantMenu />,
      },
    ],
  },
]);

const root = createRoot(document.getElementById('root'));
root.render(<RouterProvider router={appRouter} />);
