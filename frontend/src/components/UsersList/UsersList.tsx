import { Spinner } from '../Spinner';
import { UserItem } from '../UserItem';
import { UsersListProps } from './UserList.types';
import './UsersList.styles.scss';

const UsersList = ({ users, count, setCount }: UsersListProps) => {
  return (
    <div className="users-list">
      <h2 className="users-list__title">Search results:</h2>
      <div className="users-list__container">
        {users && users.length === 0 && (
          <p className="users-list__text">
            There are no users matching the request.
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

export { UsersList };
