import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { ToastContainer, toast } from 'react-toastify';
import Button from 'react-bootstrap/Button';
import 'react-toastify/dist/ReactToastify.css';
import { Label, FormSection } from './Form.styled';
import { getContacts } from '../../redux/contacts/contacts-selectors';
import contactsOperations from '../../redux/contacts/contacts-operations';

const Form = () => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const dispatch = useDispatch();

  const contacts = useSelector(getContacts);

  const handleChange = ({ target: { name, value } }) => {
    switch (name) {
      case 'name':
        setName(value);
        break;
      case 'number':
        setNumber(value);
        break;
      default:
        return;
    }
  };

  const resetInput = () => {
    setName('');
    setNumber('');
  };

  const checkForDouble = (newName, contacts) => {
    const isDouble = contacts.find(contact => contact.name === newName);
    if (isDouble) toast(`${newName} is already in contacts`);
    return isDouble;
  };

  const handleSubmit = e => {
    e.preventDefault();

    if (checkForDouble(name, contacts)) {
      resetInput();
      return;
    }

    dispatch(contactsOperations.postContact({ name, number }));
    dispatch(contactsOperations.getContacts());

    resetInput();
  };

  return (
    <FormSection onSubmit={handleSubmit}>
      <h2>Add contacts</h2>
      <Label>
        Name
        <input
          onChange={handleChange}
          value={name}
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
          required
        />
      </Label>
      <Label>
        Number
        <input
          onChange={handleChange}
          type="tel"
          name="number"
          value={number}
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
          required
        />
      </Label>
      <Button type="submit">Add contact</Button>
      <ToastContainer
        position="top-center"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </FormSection>
  );
};

export default Form;
