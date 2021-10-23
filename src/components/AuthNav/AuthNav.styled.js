import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const NavMenu = styled.ul`
  display: flex;
  gap: 20px;
  margin: 0;
  padding-top: 10px;
  padding-bottom: 10px;

  list-style: none;
`;

export const StyledLink = styled(NavLink)`
  text-decoration: none;
  font-weight: bold;
  padding-top: 10px;
  padding-bottom: 10px;
`;
