import React from 'react';
import ReactDOM from 'react-dom';

import Nav from './js/components/nav'

export default class Entry extends React.Component {
  render() {
    return (
      <div>
        Hello React 12313212 <br />
        <Nav />
      </div>
    );
  }
}

ReactDOM.render(
  <Entry/>,
  $("#example").get(0)
)