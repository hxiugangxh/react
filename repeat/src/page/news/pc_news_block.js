import React from 'react';
import {BrowserRouter as Router, Link} from 'react-router-dom';
import {Card} from 'antd';

export default class PCNewsBlock extends React.Component {

  constructor() {
    super();
    this.state = {
      news: ''
    };
  }

  componentWillMount() {
    let myFetchOptions = {
      method: 'GET'
    };
    let URL = 'http://newsapi.gugujiankong.com/Handler.ashx'
      + '?action=getnews&type=' + this.props.type
      + '&count=' + this.props.count;
    fetch(URL, myFetchOptions).then(response => response.json()).then(json => this.setState({news: json}));
  };

  render() {
    const {news} = this.state;
    const newsList = news.length
      ? news.map((newsItem, index) => (
        <li key={index}>
          <Link to={`details/${newsItem.uniquekey}`} target="_blank">
            {newsItem.title}
          </Link>
        </li>
      ))
      : '没有加载到任何新闻';
    return (
      <Router>
        <div class="topNewsList">
          <Card>
            <ul>
              {newsList}
            </ul>
          </Card>
        </div>
      </Router>
    );
  }
}