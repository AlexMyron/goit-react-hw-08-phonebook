const getIsLoggedIn = state => state.auth.isLoggedIn;

const getUserName = state => state.auth.user.name;

const getUserEmail = state => state.auth.user.email;

const getUserToken = state => state.auth.token;

const getUserDetails = state => state.auth.user;

const authSelectors = {
  getIsLoggedIn,
  getUserName,
  getUserEmail,
  getUserToken,
  getUserDetails,
};

export default authSelectors;
