import { UserInfo } from 'components/UserInfo';
import { UserStart } from 'components/UserStat';
import { UserTitle } from 'components/UserTitle';
import { TLocalUser } from 'types';

import styles from './UserCard.module.scss';

// всі поля пропсів наслідуються з типу
interface UserCardProps extends TLocalUser {}

export const UserCard = (props: UserCardProps) => (
  <div className={styles.userCard}>
    <img loading="lazy" src={props.avatar} alt={props.name} className={styles.avatar} />
    <UserTitle name={props.name} login={props.login} created={props.created} />

    {/* на випадок відсутності пропсу, вивожку текст і додатковий стиль */}
    <p className={`${styles.bio} ${props.bio ? '' : `${styles.empty}`}`}>
      {props.bio || 'This profile has not bio'}
    </p>

    <UserStart repos={props.repos} followers={props.followers} following={props.following} />

    <UserInfo
      blog={props.blog}
      location={props.location}
      company={props.company}
      twitter={props.twitter}
    />
  </div>
);
