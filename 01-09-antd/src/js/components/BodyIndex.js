import React from 'react';
import ReactDom from 'react-dom';
import BodyChild from '../components/BodyChild';
import PropTypes from 'prop-types';
import ReactMixin from 'react-mixin';
import MinxinLog from './mixins';

import { Input, Button } from 'antd';

export default class BodyIndex extends React.Component {
  constructor() {
    super();

    this.state = {
      'userName': '张三',
      'age': 12,
      'childValue': 0
    };

    this.stu = {
      'name': '王五',
      'age': 15
    };
  }

  changeUserInfo() {
    let age = ++this.state.age;
    this.setState({
      'age': age
    });

    // 第一种方式
    /*let btn = document.getElementById('changeUserInfoBtn');
    ReactDom.findDOMNode(btn).style.color = 'red';*/

    // 第二种方式
    console.log(this.refs.changeUserInfoBtn);
    MinxinLog.log();
    ReactDom.findDOMNode(this.refs.changeUserInfoBtn).style.color = 'red';
  };

  handleChildValueChange(event) {
    this.setState({'childValue': event.target.value});
  };

  render() {
    let style = {'color': 'blue', 'fontSize': '24px'};

    return (
      <div style={style}>
        <h1>这是页面的Body</h1>
        <Button type='primary' id='changeUserInfoBtn' ref='changeUserInfoBtn'
                onClick={this.changeUserInfo.bind(this)}>测试click</Button>
        <div>
          <Button type="primary">Primary</Button>
          <Button>Default</Button>
          <Button type="dashed">Dashed</Button>
          <Button type="danger">Danger</Button>
        </div>
        <pre>
          姓名: {this.state.userName} <br/>
          年龄: {this.state.age} <br/>
          学科: {this.props.department} <br/>
          分数: {this.props.score} <br/>
          没有传递: {this.props.default} <br/>
          监听子页面输入: {this.state.childValue}
        </pre>
        <pre>
          输入框: <Input placeholder="Basic usage"/>
        </pre>
        <BodyChild {...this.stu} {...this.props} handleChildValueChange={this.handleChildValueChange.bind(this)}/>
      </div>
    );
  }

}

// 对于传递参数的一些限制
BodyIndex.propTypes = {
  score: PropTypes.number
};

// 若父级页面没有传递值，那么久显示默认值
const defaultProps = {
  default: '这是一个默认值'
};

BodyIndex.defaultProps = defaultProps;

ReactMixin(BodyIndex.propTypes, MinxinLog);