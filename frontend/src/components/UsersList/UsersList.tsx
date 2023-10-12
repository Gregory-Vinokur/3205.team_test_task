import { Dispatch, SetStateAction } from 'react';
import { IUser } from '../../interfaces/IUser';
import Spinner from '../Spinner/Spinner';
import UserItem from '../UserItem/UserItem';
import './UsersList.css';

type UsersListProps = {
  users: IUser[] | null | undefined;
  count: number | null;
  setCount: Dispatch<SetStateAction<number | null>>;
};

const UsersList = ({ users, count, setCount }: UsersListProps) => {
  return (
    <div className="users-list">
      <h2 className="user-list__title">Search results:</h2>
      <div className="users-list__container">
        {users && users.length === 0 && (
          <p className="users-list__text">
            There are no users with this email.
          </p>
        )}
        {users === null && <Spinner count={count} setCount={setCount} />}
        {users &&
          users.length > 0 &&
          users.map((user, index) => <UserItem key={index} {...user} />)}
      </div>
    </div>
  );
};

export default UsersList;
