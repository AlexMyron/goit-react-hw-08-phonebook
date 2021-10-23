import styled from '@emotion/styled';
import Button from 'react-bootstrap/Button';

export const List = styled.ul`
  list-style: none;
  padding: 0;

  display: flex;
  flex-direction: column;
  gap: 5px;

  font-size: 18px;
`;

export const Wrapper = styled.div`
  padding: 20px;
  width: 60%;

  -webkit-box-shadow: 0px 5px 10px 2px rgba(34, 60, 80, 0.2);
  -moz-box-shadow: 0px 5px 10px 2px rgba(34, 60, 80, 0.2);
  box-shadow: 0px 5px 10px 2px rgba(34, 60, 80, 0.2);
`;

export const StyledButton = styled(Button)`
  vertical-align: super;
`;
