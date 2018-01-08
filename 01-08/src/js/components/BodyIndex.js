import React from 'react';
import BodyChild from '../components/BodyChild';
import PropTypes from 'prop-types';

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
      'age':  15
    }
  }

  changeUserInfo() {
    let age = ++this.state.age;
    this.setState({
      'age': age
    });

  };

  handleChildValueChange(event) {
    this.setState({'childValue': event.target.value})
  };

  render() {
    let style = {'color': 'blue', 'fontSize': '24px'};

    return (
      <div style={style}>
        <h1>这是页面的Body1</h1>
        <input type='button' value='测试click' onClick={this.changeUserInfo.bind(this)}/>
        <pre>
          姓名: {this.state.userName} <br/>
          年龄: {this.state.age} <br/>
          学科: {this.props.department} <br/>
          分数: {this.props.score} <br />
          没有传递: {this.props.default} <br />
          监听子页面输入: {this.state.childValue}
        </pre>
        <BodyChild {...this.stu} {...this.props} handleChildValueChange={this.handleChildValueChange.bind(this)}/>
      </div>
    );
  }

}

// 对于传递参数的一些限制
BodyIndex.propTypes = {
  score: PropTypes.number
}

// 若父级页面没有传递值，那么久显示默认值
const defaultProps = {
  default: '这是一个默认值'
}

BodyIndex.defaultProps = defaultProps;