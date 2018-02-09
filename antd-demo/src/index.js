import React from 'react';
import ReactDOM from 'react-dom';
import './css/index.css';
import App from './page/App';
import registerServiceWorker from './registerServiceWorker';
import $ from 'jquery';

import {
  HashRouter as Router,
  Route,
  Switch
} from 'react-router-dom';
import PCNewsDetails from './page/news/pc_news_details';

export default class Index extends React.Component {
  render() {
    return (
      <Router>
        <div>
          <Switch>
            <Route exact path="/" component={App}/>
            <Route path="/details/:uniquekey" component={PCNewsDetails}></Route>
          </Switch>
        </div>
      </Router>
    );
  }
}


ReactDOM.render(<Index/>, $('#root').get(0));
registerServiceWorker();
