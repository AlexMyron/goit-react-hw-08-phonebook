import { useSelector } from 'react-redux';
import { Route, Switch } from 'react-router';
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';
import './App.css';
import { Wrapper, StyledLoader, NavWrapper } from './App.styled';
import { getLoader } from './redux/contacts/contacts-selectors';
import authSelectors from './redux/auth/auth-selectors';
import Navigation from './components/Navigation';
import UserMenu from './components/UserMenu/UserMenu';
import AuthNav from './components/AuthNav/AuthNav';
import ContactsView from './views/ContactsView';
import RegisterView from './views/RegisterView';
import LoginView from './views/LoginView';

const App = () => {
  const isLoading = useSelector(getLoader);
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);

  return (
    <Wrapper transparent={isLoading}>
      <NavWrapper>
        <Navigation />
        {isLoggedIn ? <UserMenu /> : <AuthNav />}
      </NavWrapper>
      <Switch>
        <Route path="/" exact>
          <h1>Phonebook</h1>
        </Route>
        <Route path="/register">
          <RegisterView />
        </Route>
        <Route path="/login">{!isLoading && <LoginView />}</Route>
        <Route path="/contacts">{isLoggedIn && <ContactsView />}</Route>
      </Switch>
      {isLoading && (
        <StyledLoader type="ThreeDots" color="#2c2c2c" height={100} width={100} timeout={3000} />
      )}
    </Wrapper>
  );
};

export default App;
