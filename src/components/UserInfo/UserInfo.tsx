import { InfoItem, InfoItemProps } from 'components/InfoItem';
import { TLocalUser } from 'types';

import { ReactComponent as CompanyIcon } from 'assets/icon-company.svg';
import { ReactComponent as LocationIcon } from 'assets/icon-location.svg';
import { ReactComponent as TwitterIcon } from 'assets/icon-twitter.svg';
import { ReactComponent as BlogIcon } from 'assets/icon-website.svg';
import styles from './UserInfo.module.scss';

interface UserInfoProps extends Pick<TLocalUser, 'blog' | 'location' | 'company' | 'twitter'> {}

export const UserInfo = ({ blog, location, twitter, company }: UserInfoProps) => {
  const items: InfoItemProps[] = [
    {
      icon: <LocationIcon />,
      text: location,
    },
    {
      icon: <BlogIcon />,
      text: blog,
      isLink: true,
    },
    {
      icon: <TwitterIcon />,
      text: twitter,
    },
    {
      icon: <CompanyIcon />,
      text: company,
    },
  ];

  return (
    <div className={styles.userInfo}>
      {items.map((item, index) => {
        return <InfoItem {...item} key={index} />;
      })}
    </div>
  );
};
