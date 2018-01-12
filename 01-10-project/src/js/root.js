import React from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Redirect
} from 'react-router-dom';

export default class Root extends React.Component {
  render() {
    return (
      <div>
        init project
      </div>
    );
  }
}

ReactDOM.render(
  <Root/>,
  document.getElementById('mainContainer')
);
