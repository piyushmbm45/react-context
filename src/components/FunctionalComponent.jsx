import React from 'react';
import { useThemeContext, useThemeToogler } from './ThemeProvider';

export const FunctionalComponent = () => {
  const dark = useThemeContext();
  const toogle = useThemeToogler();
  const themeStyle = {
    backgroundColor: !dark ? 'red' : 'yellowgreen',
    color: !dark ? 'white' : 'black',
    margin: '40px',
    padding: '50px',
    borderRadius: !dark ? '10px' : '20px',
  };
  return (
    <>
      <button onClick={toogle}>Toogle Theme</button>
      <div style={themeStyle}>Functional Component Is</div>
    </>
  );
};
