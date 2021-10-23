import styled from '@emotion/styled';

export const StyledForm = styled.form`
  width: 600px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 15px;
  padding-left: 20px;
  padding-right: 20px;
  padding-top: 60px;
  padding-bottom: 40px;
  margin-top: 60px;
  margin-left: auto;
  margin-right: auto;

  -webkit-box-shadow: 0px 5px 10px 2px rgba(34, 60, 80, 0.2);
  -moz-box-shadow: 0px 5px 10px 2px rgba(34, 60, 80, 0.2);
  box-shadow: 0px 5px 10px 2px rgba(34, 60, 80, 0.2);
`;
export const StyledInput = styled.input`
  width: 80%;
  font-size: 20px;
  padding: 5px;
`;

export const StyledBtn = styled.button`
  padding-top: 5px;
  padding-bottom: 5px;
  padding-left: 20px;
  padding-right: 20px;
  font-size: 20px;

  transition: all 250ms ease;

  border-radius: 4px;
  ${'' /* border: 1px solid #2b4054; */}
  border: none;
  ${'' /* outline: none; */}
  background-color: #ffffff;

  -webkit-box-shadow: 0px 2px 5px 2px rgba(34, 60, 80, 0.2);
  -moz-box-shadow: 0px 2px 5px 2px rgba(34, 60, 80, 0.2);
  box-shadow: 0px 2px 5px 2px rgba(34, 60, 80, 0.2);

  :hover {
    background-color: #2c7dc9;
    color: #ffffff;
    border-color: #2c7dc9;
  }
`;
