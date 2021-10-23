import { useSelector, useDispatch } from 'react-redux';
import Button from 'react-bootstrap/Button';
import { Wrapper, DetailsBtn, StyledButton } from './UserMenu.styled';
import authSelectors from '../../redux/auth/auth-selectors';
import authOperations from '../../redux/auth/auth-operations';

import actions from '../../redux/modal/modal-actions';

const UserMenu = () => {
  const userEmail = useSelector(authSelectors.getUserEmail);
  const isLoggedIn = useSelector(authSelectors.getUserToken);
  const token = useSelector(authSelectors.getUserToken);
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(authOperations.logout(token));
  };

  const getData = () => {
    dispatch(authOperations.getContactData());
    dispatch(actions.setModalContent('userData'));
    dispatch(actions.openModal());
  };
  return (
    <>
      {isLoggedIn && (
        <Wrapper>
          <DetailsBtn type="button" onClick={getData}>
            {userEmail}
          </DetailsBtn>
          <StyledButton variant="light" type="button" onClick={handleClick}>
            Log out
          </StyledButton>
        </Wrapper>
      )}
    </>
  );
};

export default UserMenu;
