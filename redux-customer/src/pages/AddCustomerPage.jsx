import { Component } from 'react';
import { Link } from 'react-router-dom';

class AddCustomerPage extends Component {
  render() {
    return (
      <div className="add-customer-page">
        <label htmlFor="name">
          Nome
          <input
            type="text"
            name="name"
            id="name"
          />
        </label>
        <label htmlFor="age">
          Idade
          <input
            type="text"
            name="age"
            id="age"
          />
        </label>
        <label htmlFor="email">
          Email
          <input
            type="text"
            name="email"
            id="email"
          />
        </label>
        <button type="submit">
          Cadastrar
        </button>
        <Link to="/customers">CLIENTE CADASTRADOS</Link>
      </div>
    );
  }
}

export default AddCustomerPage;