import React from 'react';
import ReactDOM from 'react-dom';
import Header from './components/Header.js';
import Footer from './components/Footer.js';
import BodyIndex from './components/BodyIndex.js';

export default class Index extends React.Component {

  componentWillMount() {
    // 定义你的逻辑极客
    console.log('componentWillMount');
  }

  componentDidMount() {
    console.log('componentDidMount');
  }

  render() {
    return (
      <div>
        <Header/>
        <BodyIndex/>
        <Footer/>
      </div>
    );
  }
}

ReactDOM.render(
  <Index/>,
  document.getElementById('example')
);