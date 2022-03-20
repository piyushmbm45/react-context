import React, { useContext } from 'react';
import { ThemeContext } from '../Main';

export const FunctionalComponent = () => {
  const theme = useContext(ThemeContext);
  console.log(theme);
  function themeStyle(dark) {
    return {
      backgroundColor: !dark ? 'red' : 'yellowgreen',
      color: !dark ? 'white' : 'black',
      margin: '40px',
      padding: '50px',
      borderRadius: !dark ? '10px' : '20px',
    };
  }
  return <div style={themeStyle(theme)}>Functional Component</div>;
};
