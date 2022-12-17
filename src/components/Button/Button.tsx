import { ReactNode } from 'react';
import styles from './Button.module.scss';

interface ButtonProps {
  children?: ReactNode;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
}

export const Button = ({ children, onClick }: ButtonProps) => (
  <button type='submit' className={styles.button} onClick={onClick}>
    {children}
  </button>
);
