import { NavMenu, StyledLink } from './Navigation.styled';

const HomeView = () => {
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
        <StyledLink
          to="/contacts"
          activeStyle={{
            fontWeight: 'bold',
            color: '#024ab5',
          }}
        >
          Contacts
        </StyledLink>
      </li>
    </NavMenu>
  );
};
export default HomeView;
