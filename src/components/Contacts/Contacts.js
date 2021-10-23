import PropTypes from 'prop-types';
import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RiDeleteBin5Fill, RiEditLine } from 'react-icons/ri';
import {
  List,
  Wrapper,
  StyledButton,
  Contact,
  TextWrapper,
  ButtonWrapper,
  NotSettled,
} from './Contacts.styled';
import { getFilteredContacts } from '../../redux/contacts/contacts-selectors';
import * as actions from '../../redux/contacts/contacts-actions';
import contactsOperations from '../../redux/contacts/contacts-operations';
import Dialog from '../Modal';
import modalActions from '../../redux/modal/modal-actions';

const Contacts = () => {
  const [patchContact, setPatchContact] = useState({});
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(contactsOperations.getContacts());
  }, [dispatch]);

  const contactsList = useSelector(getFilteredContacts);

  const deleteContact = id => {
    dispatch(actions.resetFilter());
    dispatch(contactsOperations.deleteContact(id));
    dispatch(contactsOperations.getContacts());
  };

  const editContact = ({ id, name, number }) => {
    setPatchContact({ id, name, number });
    dispatch(modalActions.setModalContent('editForm'));
    dispatch(modalActions.openModal());
    return patchContact;
  };

  const isListEmpty = contactsList.length === 0;
  return (
    <Wrapper>
      {isListEmpty && <p>Your contacts list is still empty.</p>}
      <List>
        {contactsList &&
          contactsList.map(({ name, number, id }) => (
            <Contact key={id}>
              <TextWrapper>
                <b>{name}:</b> {number ? <i>{number}</i> : <NotSettled>-not settled-</NotSettled>}
              </TextWrapper>
              <ButtonWrapper>
                <StyledButton
                  type="button"
                  onClick={() => editContact({ id, name, number })}
                  variant="primary"
                >
                  <RiEditLine />
                </StyledButton>
                <StyledButton type="button" onClick={() => deleteContact(id)} variant="primary">
                  <RiDeleteBin5Fill />
                </StyledButton>
              </ButtonWrapper>
            </Contact>
          ))}
      </List>
      <Dialog contact={patchContact} />
    </Wrapper>
  );
};

Contacts.propTypes = {
  contactsList: PropTypes.arrayOf(
    PropTypes.exact({
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
      id: PropTypes.string.isRequired,
    }),
  ),
  btnDelete: PropTypes.func,
};

export default Contacts;
