import React from 'react';
import { createRoot } from 'react-dom/client';
import { Header } from './src/components/Header';
import { Container } from './src/components/Container';
import '/app.css';

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
