import React from 'react';
import {Card} from 'antd';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';

export default class PCNewsBlock extends React.Component {
  constructor() {
    super();
    this.state = {
      news: ''
    };
  }

  componentWillMount() {
    var myFetchOptions = {
      method: 'GET'
    };
    let URL = 'http://newsapi.gugujiankong.com/Handler.ashx'
      + '?action=getnews'
      + '&type=' + this.props.type
      + '&count=' + this.props.count;
    fetch(URL, myFetchOptions).then(response => response.json()).then(json => this.setState({news: json}));
  };

  render() {
    const {news} = this.state;
    const overStyle = {
      width: '90%',
      whiteSpace: 'nowrap',
      overflow: 'hidden',
      textOverflow: 'ellipsis'
    };
    const newsList = news.length
      ? news.map((newsItem, index) => (
        <li key={index} style={overStyle}>
          <Link to={`details/${newsItem.uniquekey}`} target="_blank">
            {newsItem.title}
          </Link>
        </li>
      ))
      : '没有加载到任何新闻';
    return (
      <div class="topNewsList">
        <Card>
          <Router>
            <ul>
              {newsList}
            </ul>
          </Router>
        </Card>
      </div>
    );
  };
}
