import React from 'react';
import {Row, Col, Menu, Icon} from 'antd';

export default class PCHeader extends React.Component {
  constructor() {
    super();
    this.state = {
      current: 'top'
    };
  };

  handleClick = (e) => {
    this.setState({
      current: e.key
    });
  };

  render() {
    return (
      <header>
        <Row>
          <Col span={2}></Col>
          <Col span={4}>
            <a href="/" class="logo">
              <img src={require("../../images/logo.png")} alt="logo"/>
              <span>ReactNews</span>
            </a>
          </Col>
          <Col span={16}>
            <Menu onClick={this.handleClick} mode="horizontal" selectedKeys={[this.state.current]}>
              <Menu.Item key="top">
                <Icon type="mail"/>头条
              </Menu.Item>
              <Menu.Item key="shehui">
                <Icon type="appstore"/>社会
              </Menu.Item>
              <Menu.Item key="guonei">
                <Icon type="appstore"/>国内
              </Menu.Item>
              <Menu.Item key="guoji">
                <Icon type="appstore"/>国际
              </Menu.Item>
              <Menu.Item key="yule">
                <Icon type="appstore"/>娱乐
              </Menu.Item>
              <Menu.Item key="tiyu">
                <Icon type="appstore"/>体育
              </Menu.Item>
              <Menu.Item key="keji">
                <Icon type="appstore"/>科技
              </Menu.Item>
              <Menu.Item key="shishang">
                <Icon type="appstore"/>时尚
              </Menu.Item>
            </Menu>
          </Col>
          <Col span={2}></Col>
        </Row>
      </header>
    );
  }
}