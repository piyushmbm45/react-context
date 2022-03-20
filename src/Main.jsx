import React from 'react';
import { FunctionalComponent } from './components/FunctionalComponent';
import { ThemeProvider } from './components/ThemeProvider';

export const Main = () => {
  return (
    <ThemeProvider>
      <FunctionalComponent />
    </ThemeProvider>
  );
};
