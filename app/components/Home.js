import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Home extends Component {
  render() {
    return (
      <div className="home-container">
        <h1>Compare Github Users....</h1>
        <Link className="button" to="/Compare">
          Compare
        </Link>
      </div>
    );
  }
}

export default Home;
