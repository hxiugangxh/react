import React from 'react';

export default class BodyIndex extends React.Component{

  componentWillMount() {
    // 定义你的逻辑极客
    console.log('BodyIndex - componentWillMount');
  }

  componentDidMount() {
    console.log('BodyIndex - componentDidMount');
  }

  render(){
    let style = {"color":"blue","fontSize":"24px"};

    let userName = '张三';
    let boolInput = false;
    var html = 'I&nbsp;am test&nbsp;html';

    return (
      <div style={style}>
        <h1>这是页面的Body</h1>
        <p>{userName == '' ? '用户尚未登录' : '用户名：' + userName}</p>
        <p><input type='button' value='默认按钮' disabled={boolInput} /> </p>
        {/*内容123*/}
        <p dangerouslySetInnerHTML={{__html : html}}></p>
      </div>
    )
  }
}