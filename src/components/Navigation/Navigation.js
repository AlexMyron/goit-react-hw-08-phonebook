import { useSelector } from 'react-redux';
import { NavMenu, StyledLink } from './Navigation.styled';
import * as selectors from '../../redux/auth/auth-selectors';

const HomeView = () => {
  const isLoggedIn = useSelector(selectors.default.getIsLoggedIn);

  return (
    <NavMenu>
      <li>
        <StyledLink
          to="/"
          activeStyle={{
            fontWeight: 'bold',
            color: '#024ab5',
          }}
        >
          Home
        </StyledLink>
      </li>
      <li>
        {isLoggedIn && (
          <StyledLink
            to="/contacts"
            activeStyle={{
              fontWeight: 'bold',
              color: '#024ab5',
            }}
          >
            Contacts
          </StyledLink>
        )}
      </li>
    </NavMenu>
  );
};
export default HomeView;
