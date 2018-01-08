import React from 'react';
import ReactDOM from 'react-dom';
import Header from './components/Header.js';
import Footer from './components/Footer.js';
import BodyIndex from './components/BodyIndex.js';

export default class Index extends React.Component {
  render() {
    return (
      <div>
        <Header/>
        <BodyIndex score={99} department={'数学'} />
        <Footer/>
      </div>
    );
  }
}

ReactDOM.render(
  <Index/>,
  document.getElementById('example')
);