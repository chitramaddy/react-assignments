import React from 'react';
import { createRoot } from 'react-dom/client';
import { Header } from './src/components/Header';
import { Container } from './src/components/Container';
import { Footer } from './src/components/Footer';
import { About } from './src/components/About';
import { Error } from './src/components/Error';
import '/app.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

const App = () => {
  return (
    <>
      <Header />
      <Container className="list" />
      <Footer />
    </>
  );
};

const appRouter = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <Error />,
  },
  {
    path: '/about',
    element: <About />,
  },
  {
    path: '/about',
    element: <About />,
  },
]);

const root = createRoot(document.getElementById('root'));
root.render(<RouterProvider router={appRouter} />);
