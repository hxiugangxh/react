import React from 'react';

export default class Child extends React.Component {

  render() {
    console.log(this.props);
    console.log(this.props.match.params.id);
    return (
      <div>
        <h3>测试{this.props.match.params.id}</h3>
      </div>
    );
  }
}