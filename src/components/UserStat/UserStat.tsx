import { TLocalUser } from 'types';

import styles from './UserStat.module.scss';

// беру 3 значення з типу
export interface UserStartProps extends Pick<TLocalUser, 'repos' | 'followers' | 'following'> {}

export const UserStart = ({ repos, following, followers }: UserStartProps) => {
  return (
    <div className={styles.userStat}>
      <div className={styles.info}>
        <div className={styles.infoTitle}>Repos</div>
        <div className={styles.infoNumber}>{repos}</div>
      </div>
      <div className={styles.info}>
        <div className={styles.infoTitle}>Following</div>
        <div className={styles.infoNumber}>{following}</div>
      </div>
      <div className={styles.info}>
        <div className={styles.infoTitle}>Followers</div>
        <div className={styles.infoNumber}>{followers}</div>
      </div>
    </div>
  );
};
