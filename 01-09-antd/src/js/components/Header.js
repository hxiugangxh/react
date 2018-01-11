import React from 'react';

export default class Header extends React.Component {

  // 构造
  constructor(props) {
    super(props);

    // 初始状态
    this.state = {
      miniHeader: false
    };
  }

  switchHeader() {
    this.setState({
      miniHeader: !this.state.miniHeader
    });
  };

  render() {
    const styleComponentHeader = {
      header: {
        backgroundColor: '#333333',
        color: '#ffffff',
        paddingTop: (this.state.miniHeader)? "3px": "15px",
        paddingBottom: (this.state.miniHeader)? "3px": "15px"
      }
    };

    return (
      <header className="headerFontSize" style={styleComponentHeader.header} onClick={this.switchHeader.bind(this)}>
        <h1>这是页面的头部{match.params.id}</h1>
      </header>
    );
  }
}