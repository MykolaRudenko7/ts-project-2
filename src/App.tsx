import { Container } from "components/Container";
import { Header } from "components/Header";
import { SearchPanel } from "components/SearchPanel";
import { UserCard } from "components/UserCard";

import {defaultUser} from './components/mock'

function App() {
  return (
    <Container>
      <Header/>
      <SearchPanel hasError={true} onSubmit={()=>{}}/>
      <UserCard {...defaultUser}/>
    </Container>
  );
}

export default App;
