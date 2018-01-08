import React from 'react';

export default class BodyChild extends React.Component {

  render() {
    return (
      <div>
        子页面输入: <input type='text' onChange={this.props.handleChildValueChange} />
        <pre>
          我是父级页面的值: <br />
          分数: {this.props.score} <br />
          学科: {this.props.department} <br />
          学生姓名: {this.props.name}
        </pre>
      </div>
    );
  }
}