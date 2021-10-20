import { useSelector } from 'react-redux';
import { Route, Switch } from 'react-router';
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';
import './App.css';
import Form from './components/Form';
import Contacts from './components/Contacts';
import Filter from './components/Filter';
import { Wrapper, StyledLoader } from './App.styled';
import { getLoader } from './redux/phonebook/contacts-selectors';
import * as Views from './views';

const App = () => {
  const isLoading = useSelector(getLoader);

  return (
    <Wrapper transparent={isLoading}>
      <Switch>
        <Route></Route>
      </Switch>
      <Views.RegisterView />
      {isLoading && (
        <StyledLoader type="ThreeDots" color="#2c2c2c" height={100} width={100} timeout={3000} />
      )}
      <h1>Phonebook</h1>
      <Form />
      <h2>Contacts</h2>
      <Filter />
      <Contacts />
    </Wrapper>
  );
};

export default App;
