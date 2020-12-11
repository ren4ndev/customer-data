import { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import AddCustomerPage from './pages/AddCustomerPage';
import CustomersPage from './pages/CustomersPage';
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';

class Routes extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/" render={(props) => <HomePage {...props} />} />
          <Route exact path="/login" render={(props) => <LoginPage {...props} />} />
          <Route exact path="/customers" render={(props) => <CustomersPage {...props} />} />
          <Route exact path="/add-customers" render={(props) => <AddCustomerPage {...props} />} />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default Routes;
