import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import contactsOperations from '../../redux/contacts/contacts-operations';

import { useDispatch } from 'react-redux';
import actions from '../../redux/modal/modal-actions';

const EditForm = ({ contact }) => {
  const dispatch = useDispatch();

  const { id, name, number } = contact;
  const handleChanges = e => {
    e.preventDefault();
    const formData = new FormData(e.target),
      formDataObj = Object.fromEntries(formData.entries());
    formDataObj.id = id;

    dispatch(contactsOperations.patchContact(formDataObj));
    dispatch(actions.closeModal());
  };

  return (
    <Form onSubmit={handleChanges}>
      <Form.Group as={Row} className="mb-3" controlId="formPlaintextName">
        <Form.Label column sm="2">
          Name
        </Form.Label>
        <Col sm="10">
          <Form.Control defaultValue={name} name="name" />
        </Col>
      </Form.Group>

      <Form.Group as={Row} className="mb-3" controlId="formPlaintextNumber">
        <Form.Label column sm="2">
          Phone
        </Form.Label>
        <Col sm="10">
          <Form.Control
            type="tel"
            defaultValue={number}
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Номер телефона должен состоять из цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
            placeholder="not settled"
          />
        </Col>
      </Form.Group>
      <Button variant="primary" type="submit">
        Save Changes
      </Button>
    </Form>
  );
};

export default EditForm;
