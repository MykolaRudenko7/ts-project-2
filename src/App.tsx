import { useState } from 'react';

import { Container } from 'components/Container';
import { Header } from 'components/Header';
import { SearchPanel } from 'components/SearchPanel';
import { UserCard } from 'components/UserCard';
import { defaultUser } from './components/mock';

import { isGitHubUser } from 'utils/typeguards';
import { TGitHubUser, TLocalUser, TUserError } from 'types';
import { extractLocalUser } from 'utils/extract-local-ures';



function App() {
  const [user, setUser] = useState<TLocalUser | null>(defaultUser);

  const fetchUser = async (username: string) => {
    const response = await fetch(`https://api.github.com/users/${username}`);
    const user = (await response.json()) as TGitHubUser | TUserError;

    // перевірка typeGuard
    if (isGitHubUser(user)) {
      // перевожу тип у лоальний
      setUser(extractLocalUser(user))
    } else {
      setUser(null)
    }
  };

  return (
    <Container>
      <Header />
      <SearchPanel hasError={!user} onSubmit={fetchUser} />
      {user && <UserCard {...user} />}
    </Container>
  );
}

export default App;
