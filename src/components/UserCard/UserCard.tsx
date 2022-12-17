import { UserStart } from 'components/UserStat';
import { TLocalUser } from 'types';

import styles from './UserCard.module.scss';

interface UserCardProps extends TLocalUser {}

export const UserCard = (props: UserCardProps) => (
  <div className={styles.userCard}>
    <UserStart repos={props.repos} followers={props.followers} following={props.following} />
  </div>
);
