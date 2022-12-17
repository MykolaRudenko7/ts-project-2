import { ThemeTumbler } from 'components/ThemeTumbler';
import styles from './Header.module.scss';


export const Header = () => (
  <div className={styles.header} >
    <div className={styles.logo}>
      definder
    </div>
    <ThemeTumbler/>
  </div>
);
