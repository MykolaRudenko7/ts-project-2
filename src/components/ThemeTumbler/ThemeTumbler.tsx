import { useEffect, useState } from 'react';

import { ReactComponent as darkIcon } from '../../assets/icon-moon.svg';
import { ReactComponent as lightIcon } from '../../assets/icon-sun.svg';

import styles from './ThemeTumbler.module.scss';

export const ThemeTumbler = () => {
  const [isDark, setDark] = useState(false);
  const themeText = isDark ? 'Light' : 'Dark';
  const ThemeIcon = isDark ? lightIcon : darkIcon;


  useEffect(()=> {
    document.body.setAttribute('data-theme', isDark ? 'light' : 'dark');
  }, [isDark])

  return (
    <div className={styles.themeTumbler} onClick={() => setDark(!isDark)}>
      <span>{themeText}</span>
      <ThemeIcon className={styles.icon}/>
    </div>
  );
};
