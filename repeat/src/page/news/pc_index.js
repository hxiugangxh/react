import React from 'react';
import PCHeader from './pc_header';
import '../../css/news/pc.css';
import PCNewsContainer from './pc_newscontainer';

export default class PCIndex extends React.Component {
  render() {
    return (
      <div>
        <PCHeader/>
        <PCNewsContainer/>
      </div>
    );
  }
}