import Form from '../../components/Form';
import Contacts from '../../components/Contacts';
import Filter from '../../components/Filter';
import { Wrapper } from './ContactsView.styled';

const ContactsView = () => {
  return (
    <Wrapper>
      {/* <h2>Contacts</h2> */}
      <div>
        <Filter />
        <Form />
      </div>
      <Contacts />
    </Wrapper>
  );
};

export default ContactsView;
