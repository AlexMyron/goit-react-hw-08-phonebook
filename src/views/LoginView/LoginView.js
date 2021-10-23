import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { StyledForm, StyledInput, StyledBtn } from './LoginView.styled';
import Button from 'react-bootstrap/Button';
import authOperations from '../../redux/auth/auth-operations';
import { useHistory, useLocation, useRouteMatch } from 'react-router';

const LoginView = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();

  const history = useHistory();

  const handleChange = ({ target: { name, value } }) => {
    switch (name) {
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
    dispatch(authOperations.login({ email, password }));
    setEmail('');
    setPassword('');

    history.push('/contacts');
  };

  return (
    <StyledForm onSubmit={handleSubmit}>
      <StyledInput
        type="email"
        name="email"
        placeholder="email"
        autoFocus
        onChange={handleChange}
        value={email}
        required
      />
      <StyledInput
        type="password"
        name="password"
        placeholder="password"
        onChange={handleChange}
        value={password}
        required
      />
      <Button type="submit" size="lg">
        Login
      </Button>
    </StyledForm>
  );
};
export default LoginView;
