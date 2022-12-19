import { TLocalUser } from 'types';
import styles from './UserTitle.module.scss';

//вибираю тільки 3 необхідних параметри з типу
interface UserTitleProps extends Pick<TLocalUser, 'name' | 'login' | 'created'> {}

// налаштування форматування дати
const localDate = new Intl.DateTimeFormat('en-GB', {
  day: 'numeric',
  month: 'short',
  year: 'numeric',
});

export const UserTitle = ({ name, login, created }: UserTitleProps) => {
  // роблю в перемінній потрібний формат дати
  const date = localDate.format(new Date(created));

  return (
    <div className={styles.userTitle}>
      <h2>{name}</h2>
      <h2>{login}</h2>
      <h2>{date}</h2>
    </div>
  );
};
