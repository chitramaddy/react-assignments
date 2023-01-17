import React from 'react';
import { createRoot } from 'react-dom/client';
import { Header } from './Header';
import { Container } from './Container';
import restaurants from '../../data';
import '../../app.css';

const App = () => {
  return (
    <>
      <Header />
      <Container className="list" restaurants={restaurants} />
    </>
  );
};

const root = createRoot(document.getElementById('root'));
root.render(<App />);
