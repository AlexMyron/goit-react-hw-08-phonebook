import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const NavMenu = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;

  display: flex;
  justify-content: center;
  gap: 20px;
  align-items: center;
`;

export const StyledLink = styled(NavLink)`
  text-decoration: none;
  font-weight: bold;
  padding-top: 10px;
  padding-bottom: 10px;
`;
