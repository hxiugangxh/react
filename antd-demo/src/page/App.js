import React, {Component} from 'react';
import logo from '../images/logo.svg';
import '../css/App.css';
import {Button} from 'antd';
import PCIndex from './news/pc_index';
import MobileIndex from './news/mobile_index';
import MediaQuery from 'react-responsive';

class App extends Component {
  render() {
    return (
      <div>
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo"/>
            <h1 className="App-title">Welcome to React</h1>
          </header>
        </div>

        <MediaQuery query='(min-device-width: 1224px)'>
          <PCIndex/>
        </MediaQuery>
        <MediaQuery query='(max-device-width: 1224px)'>
          <MobileIndex/>
        </MediaQuery>
      </div>
    );
  }
}

export default App;
