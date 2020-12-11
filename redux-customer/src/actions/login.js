const LOGIN = 'LOGIN';

const login = (value) => {
  return {
    type: LOGIN,
    loggedIn: value,
  }
}

export default login;
