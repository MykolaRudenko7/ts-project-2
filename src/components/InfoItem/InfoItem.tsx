import { ReactNode } from 'react';

import styles from './InfoItem.module.scss';

export interface InfoItemProps {
  icon: ReactNode;
  text?: string | null;
  isLink?: boolean;
}

export const InfoItem = ({ icon, text, isLink }: InfoItemProps) => {
  const currentText = text || '...';
  let currentHref: string = '';
  // якщо лінк є, то в перемінну записую (якщо він має текст і починається з http) - то просто те, що прийшло з серверу, якщо ні, додаю до нього початок лінку
  if (isLink) {
    currentHref = text && text.startsWith('http') ? text : `https//${text}`;
  }

  return (
    // якщо тексту нема, то відступ
    <div className={`${styles.infoItem} ${text ? '' : `${styles.empty}`}`}>
      {icon}

      <div>
        {isLink && text ? (
          <a href={currentHref} target="_blank" rel="noreferrer" className={styles.link}>
            {currentText}
          </a>
        ) : (
          currentText
        )}
      </div>
    </div>
  );
};
