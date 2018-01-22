import React from 'react';
import ReactDOM from 'react-dom';
import './css/index.css';
import App from './page/App';
import registerServiceWorker from './registerServiceWorker';
import $ from 'jquery';

ReactDOM.render(<App/>, $('#root').get(0));
registerServiceWorker();
