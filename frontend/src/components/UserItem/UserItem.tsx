import './UserItem.css';

type UserItemProps = {
  email: string;
  number: string;
};

const formatNumber = (number: string) => {
  const part1 = number.slice(0, 2);
  const part2 = number.slice(2, 4);
  const part3 = number.slice(4, 6);

  return `${part1}-${part2}-${part3}`;
};

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

export default UserItem;
