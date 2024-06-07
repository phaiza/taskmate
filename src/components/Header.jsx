import { useEffect, useState } from 'react';
import Logo from '../assets/logo.png';

export const Header = () => {
  const [theme, setTheme] = useState(
    JSON.parse(localStorage.getItem('theme')) || 'light'
  );

  useEffect(() => {
    document.documentElement.removeAttribute('class');
    document.documentElement.classList.add(theme);
    localStorage.setItem('theme', JSON.stringify(theme));
  }, [theme]);
  return (
    <header>
      <div className="logo">
        <img src={Logo} alt="Taskmate Logo" />
        <span>Taskmate</span>
      </div>
      <div className="themeSelector">
        <span
          onClick={() => setTheme('light')}
          className={theme == 'light' ? 'activeTheme light' : 'light'}
        ></span>
        <span
          onClick={() => setTheme('medium')}
          className={theme == 'medium' ? 'activeTheme medium' : 'medium'}
        ></span>
        <span
          onClick={() => setTheme('dark')}
          className={theme == 'dark' ? 'activeTheme dark' : 'dark'}
        ></span>
        <span
          onClick={() => setTheme('gOne')}
          className={theme == 'gOne' ? 'activeTheme gOne' : 'gOne'}
        ></span>
        <span
          onClick={() => setTheme('gTwo')}
          className={theme == 'gTwo' ? 'activeTheme gTwo' : 'gTwo'}
        ></span>
        <span
          onClick={() => setTheme('gThree')}
          className={theme == 'gThree' ? 'activeTheme gThree' : 'gThree'}
        ></span>
      </div>
    </header>
  );
};
