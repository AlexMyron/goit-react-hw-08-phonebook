import styled from '@emotion/styled';

export const Wrapper = styled.div`
  ${'' /* width: 40%; */}
  margin-bottom: 50px;
  padding: 20px;
  background-color: orange;

  -webkit-box-shadow: 0px 5px 10px 2px rgba(34, 60, 80, 0.2);
  -moz-box-shadow: 0px 5px 10px 2px rgba(34, 60, 80, 0.2);
  box-shadow: 0px 5px 10px 2px rgba(34, 60, 80, 0.2);
`;

export const Label = styled.label`
  display: flex;
  align-items: center;
  gap: 5px;
  padding-top: 10px;
`;
