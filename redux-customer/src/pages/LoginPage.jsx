import { Component } from 'react';

class LoginPage extends Component {
  render() {
    return (
      <div className="login-page">
        <label htmlFor="email">
          Email
          <input
            type="text"
            name="email"
            id="password"
          />
        </label>
        <label htmlFor="password">
          Email
          <input
            type="text"
            name="password"
            id="password"
          />
        </label>
        <button type="submit">
          Entrar
        </button>
      </div>
    );
  }
}

export default LoginPage;
