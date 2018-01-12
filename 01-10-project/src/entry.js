import React from 'react';
import ReactDOM from 'react-dom';

export default class Entry extends React.Component {
  render() {
    return (
      <div>
        我是头部
      </div>
    );
  }
}

ReactDOM.render(
  <Entry/>,
  document.getElementById('example')
);
