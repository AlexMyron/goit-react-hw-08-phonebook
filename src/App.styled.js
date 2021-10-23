import styled from '@emotion/styled';
import Loader from 'react-loader-spinner';

export const Wrapper = styled.div`
  position: relative;
  width: 80%;
  margin: auto;

  ${'' /* border: 1px solid #001569; */}

  opacity: ${props => (props.transparent ? 0.5 : 1)};
`;

export const StyledLoader = styled(Loader)`
  position: absolute;
  top: 100px;
  left: 100px;
`;

export const NavWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 40px;

  border-bottom: 1px solid #2b4054;
`;
