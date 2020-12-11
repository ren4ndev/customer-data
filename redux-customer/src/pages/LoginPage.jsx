import { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import login from '../actions/login';

class LoginPage extends Component {
  constructor(props) {
    super(props);
    this.validateLogin = this.validateLogin.bind(this);
    this.changeInput = this.changeInput.bind(this);
    this.state = {
      email: '',
      password: '',
      redirect: false,
    }
  }

  changeInput ({ target }) {
    const { name, value } = target;
    this.setState({ [name]: value });
  }

  validateLogin () {
    const { login } = this.props;
    const { email, password } = this.state;
    const userEmail = 'oliveira.renan.rg@gmail.com'
    const userPassWord = '123456';
    console.log('clicado');
    if (email === userEmail && password === userPassWord) {
      login(true);
      this.setState({ redirect: true });
    } else {
      login(false);
      console.log('login invalido');
    }
  }

  render() {
    const { email, password, redirect } = this.state;
    if (redirect) {
      return <Redirect to="/customers" />;
    } else {
      return (
        <div className="login-page">
          <label htmlFor="email">
            Email
            <input
              type="text"
              name="email"
              id="email"
              value={email}
              onChange={this.changeInput}
            />
          </label>
          <label htmlFor="password">
            Senha
            <input
              type="password"
              name="password"
              id="password"
              value={password}
              onChange={this.changeInput}
            />
          </label>
          <button
            type="submit"
            onClick={this.validateLogin}
          >
            Entrar
          </button>
        </div>
      );
    }
    
  }
}

const mapStateToProps = (state) => ({
  loggedIn: state.loginReducer.loggedIn,
})

const mapDispatchToProps = (dispatch) => ({
  login: (value) => dispatch(login(value)),
})

export default connect(mapStateToProps, mapDispatchToProps)(LoginPage);
