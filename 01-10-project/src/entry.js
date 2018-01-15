import React from 'react';
import ReactDOM from 'react-dom';

import Jspang from './js/components/jspang';
import Jspangb from './js/components/jspangb';
import Jspangc from './js/components/jspangc';
import NavBar from './js/components/navBar';
import Error from './js/components/error';
import {
  HashRouter as Router,
  Route,
  Switch,
  Redirect,
  Prompt
} from 'react-router-dom';

export default class Entry extends React.Component {
  render() {
    return (
      <Router basename="demo">
        <div>
          <NavBar/>
          <hr/>

          <Switch>
            <Route exact path="/" component={Jspang}/>
            <Route path="/Jspangb/:id" component={Jspangb}/>
            <Route path="/Jspangc" component={Jspangc}/>
            <Redirect from="/redirect" to="/Jspangb"/>
            <Route component={Error}></Route>
          </Switch>

        </div>
      </Router>
    );
  }
}

ReactDOM.render(
  <Entry/>,
  $('#example').get(0)
);