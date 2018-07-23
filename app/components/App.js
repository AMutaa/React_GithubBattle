import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Nav from './Nav';
import Home from './Home';
import Compare from './Compare';
import Popular from './Popular';
import Results from './Results'
class App extends Component {
  render() {
    return (
      <Router>
        <div className='container'>
          <Nav />

          <Switch>
            <Route exact path='//' component={Home} />
            <Route exact path='/compare' component={Compare} />
            <Route path='/compare/results' component={Results} />
            <Route path='/popular' component={Popular} />
            <Route
              render={function () {
                return <p>Not Found</p>;
              }}
            />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
