import React from 'react';
import ReactDOM from 'react-dom';
import Index from './Index';
import Error from './js/components/error';
import {
  HashRouter as Router,
  Route,
  Switch,
  Redirect,
  Prompt
} from 'react-router-dom';

export default class Root extends React.Component {
  render() {
    return (
      <Router>
        <div>
          <hr />

          <Switch>
            <Route exact path="/" component={Index}/>
            <Route component={Error}></Route>
          </Switch>
        </div>
      </Router>
    );
  }
}

ReactDOM.render(
  <Root/>,
  $('#example').get(0)
);