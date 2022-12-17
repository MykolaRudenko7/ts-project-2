import { Button } from 'components/Button';
import React from 'react';

import { ReactComponent as SearchIcon } from '../../assets/icon-search.svg';
import styles from './SearchPanel.module.scss';

interface SearchPanelProps {
  hasError: boolean;
  onSubmit: (text: string) => void;
}

type FormFields = {
  username: HTMLInputElement;
};

export const SearchPanel = ({ hasError, onSubmit }: SearchPanelProps) => {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement & FormFields>) => {
    e.preventDefault();
    const textInput = e.currentTarget.username.value;

    if (textInput) {
      onSubmit(textInput);
      e.currentTarget.reset();
    }
  };

  return (
    <form action="submit" onSubmit={handleSubmit} autoComplete="off">
      <div className={styles.searchPanel}>
        <label htmlFor="search" className={styles.label}>
          <SearchIcon />
        </label>
        <input
          type="text"
          className={styles.textField}
          id="search"
          name="username"
          placeholder="Search GitGub profile..."
        />
        {hasError && <div className={styles.error}>No result</div>}
        <Button>Search</Button>
      </div>
    </form>
  );
};
