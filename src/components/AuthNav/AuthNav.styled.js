import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const StyledLink = styled(NavLink)`
  text-decoration: none;
  font-weight: bold;
`;

export const NavMenu = styled.ul`
  display: flex;
  gap: 20px;

  list-style: none;
`;
