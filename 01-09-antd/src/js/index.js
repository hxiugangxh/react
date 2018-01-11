import React from 'react';
import ReactDOM from 'react-dom';
import 'antd/dist/antd.css';
import Header from './components/Header';
import Footer from './components/Footer';
import BodyIndex from './components/BodyIndex';

export default class Index extends React.Component {
  render() {
    return (
      <div>
        <Header/>
        <BodyIndex score={99} department={'数学'}/>
        <Footer/>
      </div>
    );
  }
}
