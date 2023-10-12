import { useState } from 'react';
import './App.css';
import Form from './components/Form/Form';
import UsersList from './components/UsersList/UsersList';
import { IUser } from './interfaces/IUser';

function App() {
  const [users, setUsers] = useState<IUser[] | null | undefined>(undefined);
  const [count, setCount] = useState<number | null>(null);
  return (
    <main>
      <Form setUsers={setUsers} setCount={setCount} />
      <UsersList users={users} count={count} setCount={setCount} />
    </main>
  );
}

export default App;
