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
  ${'' /* vertical-align: super; */}

  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Contact = styled.li`
  height: 30px;
  display: flex;
  justify-content: space-between;

  :hover,
  :focus {
    -webkit-box-shadow: 0px 1px 1px 0px rgba(0, 90, 159, 0.2);
    -moz-box-shadow: 0px 1px 1px 0px rgba(0, 90, 159, 0.2);
    box-shadow: 0px 1px 1px 0px rgba(0, 90, 159, 0.2);
  }

  :not(:first-child) {
    margin-bottom: 10px;
  }
`;

export const TextWrapper = styled.div`
  display: flex;
  gap: 5px;
  align-items: center;
  justify-content: space-between;
  width: 250px;
`;

export const ButtonWrapper = styled.div`
  display: flex;
  gap: 10px;
`;

export const NotSettled = styled.span`
  font-style: italic;
  opacity: 0.5;
`;
