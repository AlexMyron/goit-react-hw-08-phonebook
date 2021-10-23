import axios from 'axios';
import { NavMenu, StyledLink } from './AuthNav.styled';

const AuthNav = () => {
  return (
    <NavMenu>
      <li>
        <StyledLink
          to="/login"
          activeStyle={{
            fontWeight: 'bold',
            color: '#024ab5',
          }}
        >
          Login
        </StyledLink>
      </li>
      <li>
        <StyledLink
          to="/register"
          activeStyle={{
            fontWeight: 'bold',
            color: '#024ab5',
          }}
        >
          Register
        </StyledLink>
      </li>
    </NavMenu>
  );
};

export default AuthNav;
