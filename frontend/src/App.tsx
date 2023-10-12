import { useState } from 'react';
import './App.styles.scss';
import { Form, UsersList } from './components';
import { IUser } from './interfaces/IUser';

function App() {
  const [users, setUsers] = useState<IUser[] | null | undefined>(undefined);
  const [count, setCount] = useState<number | null>(null);
  return (
    <main className="main">
      <Form setUsers={setUsers} setCount={setCount} />
      <UsersList users={users} count={count} setCount={setCount} />
    </main>
  );
}

export default App;
