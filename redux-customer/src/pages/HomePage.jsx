import { Component } from 'react';
import { Link } from 'react-router-dom';

class HomePage extends Component {
  render() {
    return (
      <div className="home-page">
        <Link to="/login">LOGIN</Link>
      </div>
    );
  }
}

export default HomePage;
