import { useSelector } from 'react-redux';
import authSelectors from '../../redux/auth/auth-selectors';

const UserData = () => {
  const data = useSelector(authSelectors.getUserDetails);
  const { name, email } = data;
  // console.log(name, email);
  return (
    <div>
      <p>
        <i>{name}</i>
      </p>
      <p>
        <i>{email}</i>
      </p>
    </div>
  );
};

export default UserData;
