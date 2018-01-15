import React from 'react';
import {Prompt} from 'react-router-dom';

export default class Jspangb extends React.Component {
  render() {
    return (
      <div>
        B页面
        {this.props.match.params.id}
        <Prompt message="残忍离开？"/>
      </div>
    );
  }
}