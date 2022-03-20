import React, { useState } from 'react';
import { FunctionalComponent } from './components/FunctionalComponent';
import { ClassComponent } from './components/ClassComponent';

export const ThemeContext = React.createContext();

export const Main = () => {
  const [themeDark, setThemeDark] = useState(true);
  console.log(themeDark);
  const onButtonClick = () => {
    setThemeDark(!themeDark);
  };
  return (
    <ThemeContext.Provider value={themeDark}>
      <button type="submit" onClick={() => onButtonClick()}>
        Toogle Theme
      </button>
      <FunctionalComponent />
      <ClassComponent />
    </ThemeContext.Provider>
  );
};
