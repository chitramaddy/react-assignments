import React from 'react';
import { createRoot } from 'react-dom/client';
import { Header } from './Header';
import { Container } from './Container';
import '../../app.css';

const App = () => {
  return (
    <>
      <Header />
      <Container className="list" />
    </>
  );
};

const root = createRoot(document.getElementById('root'));
root.render(<App />);
