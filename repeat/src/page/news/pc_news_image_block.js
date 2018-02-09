import React from 'react';
import {BrowserRouter as Router, Link} from 'react-router-dom';
import {Card} from 'antd';

export default class PCNewsImageBlock extends React.Component {
  constructor() {
    super();
    this.state = {
      news: ''
    };
  }

  componentWillMount() {
    console.log('componentWillMount');
    let myFetchOptions = {
      method: 'GET'
    };
    let URL = 'http://newsapi.gugujiankong.com/Handler.ashx'
      + '?action=getnews&type=' + this.props.type
      + '&count=' + this.props.count;
    fetch(URL, myFetchOptions).then(response => response.json()).then(json => this.setState({news: json}));
  };

  render() {
    const styleImage = {
      display: 'block',
      width: this.props.imageWidth,
      height: '90px'
    };
    const styeH3 = {
      width: this.props.imageWidth,
      whiteSpace: 'nowrap',
      overflow: 'hidden',
      textOverflow: 'ellipsis'
    };
    const {news} = this.state;
    const newsList = news.length
      ? news.map((newsItem, index) => (
        <div key={index} class="imageblock">
          <Router>
            <Link to={`details/${newsItem.uniquekey}`} target="_blank">
              <div class="custom-image">
                <img alt="" style={styleImage} src={newsItem.thumbnail_pic_s}/>
              </div>
              <div class="custom-card">
                <h3 style={styeH3}>{newsItem.title}</h3>
                <p style={styeH3}>{newsItem.author_name}</p>
              </div>
            </Link>
          </Router>
        </div>
      ))
      : '没有加载到任何新闻';
    return (
      <div class="topNewsList">
        <Card title={this.props.cartTitle} bordered={true} style={{
          width: this.props.width
        }}>
          {newsList}
        </Card>
      </div>
    );
  }
}