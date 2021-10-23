import styled from '@emotion/styled';
import Button from 'react-bootstrap/Button';

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
`;

export const DetailsBtn = styled.button`
  padding-top: 10px;
  padding-bottom: 10px;
  color: #0d6efd;

  border: none;
  background-color: transparent;
  :hover {
    color: #343aeb;
  }
`;

export const StyledButton = styled(Button)`
  :hover,
  :focus {
    background-color: #7aaffd;
    color: #ffffff;
  }
`;
