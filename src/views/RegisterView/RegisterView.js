import { StyledForm, StyledInput, StyledBtn } from './RegisterView.styled';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { authOperations } from '../../redux/auth/auth-operations';
import Button from 'react-bootstrap/Button';
import { useHistory } from 'react-router-dom';

const RegisterView = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();
  const history = useHistory();

  const handleChange = ({ target: { name, value } }) => {
    switch (name) {
      case 'name':
        return setName(value);
      case 'email':
        return setEmail(value);
      case 'password':
        return setPassword(value);
      default:
        return;
    }
  };

  const handleSubmit = e => {
    e.preventDefault();

    dispatch(authOperations.register({ name, email, password }));
    setName('');
    setEmail('');
    setPassword('');
    history.push('/contacts');
  };

  return (
    <StyledForm onSubmit={handleSubmit}>
      <StyledInput
        type="text"
        name="name"
        placeholder="Your name"
        autoFocus
        onChange={handleChange}
        value={name}
        required
        autocomplete="off"
      />
      <StyledInput
        type="email"
        name="email"
        placeholder="Your email"
        onChange={handleChange}
        value={email}
        required
        autocomplete="off"
      />
      <StyledInput
        type="password"
        name="password"
        placeholder="Create a password"
        onChange={handleChange}
        value={password}
        required
      />
      <Button type="submit" size="lg">
        Register
      </Button>
    </StyledForm>
  );
};

export default RegisterView;
