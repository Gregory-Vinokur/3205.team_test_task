import { formatNumber } from './UserItem.service';
import './UserItem.styles.scss';
import { UserItemProps } from './UserItem.types';

const UserItem = ({ email, number }: UserItemProps) => {
  const formattedNumber = formatNumber(number);
  return (
    <div className="user-item">
      <p>
        <span className="user-item__title">Email:</span>
        {email}
      </p>
      <p>
        <span className="user-item__title">Number:</span>
        {formattedNumber}
      </p>
    </div>
  );
};

export { UserItem };
