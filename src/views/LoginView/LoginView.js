import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router';
import { ToastContainer, toast } from 'react-toastify';
import { StyledForm, StyledInput } from './LoginView.styled';
import Button from 'react-bootstrap/Button';
import authOperations from '../../redux/auth/auth-operations';
import authSelectors from '../../redux/auth/auth-selectors';

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

  const handleSubmit = async e => {
    e.preventDefault();

    const isAuth = await dispatch(authOperations.login({ email, password }));
    isAuth.payload
      ? history.push('/contacts')
      : toast(`${email} is not authorized or the password is wrong`);
    setEmail('');
    setPassword('');
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
      <ToastContainer
        position="top-center"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </StyledForm>
  );
};
export default LoginView;
