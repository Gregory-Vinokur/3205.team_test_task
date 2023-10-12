import { useState } from 'react';
import './App.css';
import Form from './components/Form/Form';
import UsersList from './components/UsersList/UsersList';
import { IUser } from './interfaces/IUser';

function App() {
  const [users, setUsers] = useState<IUser[] | null | undefined>(undefined);
  return (
    <main>
      <Form setUsers={setUsers} />
      <UsersList users={users} />
    </main>
  );
}

export default App;
