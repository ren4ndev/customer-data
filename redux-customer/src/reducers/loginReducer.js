const INITIAL_STATE = {
  loggedIn: false,
}

const loginReducer = (state = INITIAL_STATE, action) => {
  switch(action.type) {
    case 'LOGIN':
      return {...state, loggedIn: action.loggedIn };
    default:
      return state;
  }
}

export default loginReducer;
