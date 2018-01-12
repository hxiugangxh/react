import React from 'react';
import ReactDOM from 'react-dom';
import Index from './index';
import ComponentList from './components/ComponentList';
import Header from './components/Header';
import Footer from './components/Footer';
import Child from './components/Child';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Redirect
} from 'react-router-dom';

export default class Root extends React.Component {
  render() {
    return (
      <Router>
        <div>
          <h2>账号</h2>
          <ul>
            <li><Link to="/react-router">React Router</Link></li>
            <li><Link to="/leoashin">LeoAshin</Link></li>
            <li><Link to="/justjavac">justjavac</Link></li>
            <li><Link to="/reacttraining">React Training</Link></li>
          </ul>

          <Route path="/:id" component={Child}/>
        </div>
      </Router>
    );
  }
}

ReactDOM.render(
  <Root/>,
  document.getElementById('example')
);
