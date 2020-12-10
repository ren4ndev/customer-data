import { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import AddCustomerPage from './pages/AddCustomerPage';
import CustomersPage from './pages/CustomersPage';
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';

class Routes extends Component {
  render() {
    return (
      <Switch>
        <Route exact path="/" render={HomePage} />
        <Route exact path="/login" render={LoginPage} />
        <Route exact path="/customers" render={CustomersPage} />
        <Route exact path="/add-customers" render={AddCustomerPage} />
      </Switch>
    );
  }
}

export default Routes;
