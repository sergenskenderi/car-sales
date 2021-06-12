import React from 'react';
import Home from './Home';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Car from './Car';

const App = (props) => {
  return (
    <div className="boxes">
      <Router>
        <Switch>
          <Route exact path="/">
          <Home />
          </Route>
          <Route exact path="/selected/:name">
            <Car />
          </Route>
      </Switch>
      </Router>
    </div>
  );
};

export default App;
