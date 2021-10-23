import styled from '@emotion/styled';

export const Button = styled.button`
  width: 120px;

  transition: all 250ms ease;
  &:hover,
  :focus {
    background-color: skyblue;
  }
`;

export const Contact = styled.li`
  height: 30px;
  display: flex;
  justify-content: space-between;
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
