import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Label, FormSection } from './Form.styled';
import { getItems } from '../../redux/phonebook/contacts-selectors';
import * as phonebookOperations from '../../redux/phonebook/phonebook-operations';

const Form = () => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const dispatch = useDispatch();

  const contacts = useSelector(getItems);

  const onChange = e => {
    const { value, name } = e.currentTarget;
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

    (() => dispatch(phonebookOperations.postContact({ name, number })))({ name, number });

    resetInput();
  };

  return (
    <FormSection onSubmit={handleSubmit}>
      <Label>
        Name
        <input
          onChange={onChange}
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
          onChange={onChange}
          type="tel"
          name="number"
          value={number}
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
          required
        />
      </Label>
      <button type="submit">Add contact</button>
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
