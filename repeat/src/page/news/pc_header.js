import React from 'react';
import {Row, Col} from 'antd';
import {
  Menu,
  Icon,
  Tabs,
  Form,
  Input,
  Button,
  Modal
} from 'antd';
import {Link} from 'react-router-dom';
import '../../css/news/pc.css';

const FormItem = Form.Item;
const TabPane = Tabs.TabPane;

class PCHeader extends React.Component {
  constructor() {
    super();
    this.state = {
      current: 'top',
      modalVisible: false,
      action: 'login',
      hasLogined: false,
      userNickName: '',
      userid: 0,
      getFieldDecorator: {}
    };
  };

  setModalVisible(value) {
    this.setState({modalVisible: value});
  }

  handleClick = (e) => {
    console.log(e.key, e);
    if (e.key === 'register') {
      this.setModalVisible(true);
    }
    this.setState({
      current: e.key
    });
  };

  Modal = () => {
    let {getFieldDecorator} = this.props.form;
    return (
      <Modal title="用户中心" wrapClassName="vertical-center-modal" visible={this.state.modalVisible}
             onCancel={() => this.setModalVisible(false)} onOk={() => this.setModalVisible(false)} okText="关闭">
        <Tabs type="card" onChange={this.callback}>
          <TabPane tab="登录" key="1">
            <Form onSubmit={this.handleSubmit.bind(this)}>
              <FormItem label="账号">
                {getFieldDecorator('userName', {})(
                  <Input prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="请输入账号..." />
                )}
              </FormItem>
              <FormItem label="密码">
                {getFieldDecorator('password', { })(
                  <Input prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="请输入密码..." />
                )}
              </FormItem>
              <Button type="primary" htmlType="submit">登录</Button>
            </Form>
          </TabPane>
          <TabPane tab="注册" key="2">
            <Form onSubmit={this.handleSubmit.bind(this)}>
              <FormItem label="账户">
                {getFieldDecorator('r_userName', {})(
                  <Input prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="请输入账号..." />
                )}
              </FormItem>
              <FormItem label="密码">
                {getFieldDecorator('r_password', {})(
                  <Input prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="请输入密码..." />
                )}
              </FormItem>
              <FormItem label="确认密码">
                {getFieldDecorator('r_confirmPassword', {})(
                  <Input prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="再次输入密码..." />
                )}
              </FormItem>
              <Button type="primary" htmlType="submit">注册</Button>
            </Form>
          </TabPane>
        </Tabs>
      </Modal>
    );
  };

  handleOk = (e) => {
    this.setModalVisible(false);
  };
  handleCancel = (e) => {
    this.setModalVisible(false);
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      console.log('Received values of form: ', values);
    });
  };

  callback = (key) => {
    if (key === 1) {
      this.setState({action: 'login'});
    } else if (key === 2) {
      this.setState({action: 'register'});
    }
  };

  render() {
    const userShow = this.state.hasLogined
      ? <Menu.Item key="logout" class="register">
        <Button type="primary" htmlType="button">{this.state.userNickName}</Button>
        &nbsp;&nbsp;
        <Link target="_blank" to={`/usercenter`}>
          <Button type="dashed" htmlType="button">个人中心</Button>
        </Link>
        &nbsp;&nbsp;
        <Button type="ghost" htmlType="button" onClick={this.logout.bind(this)}>退出</Button>
      </Menu.Item>
      : <Menu.Item key="register" class="register">
        <Icon type="appstore"/>注册/登录
      </Menu.Item>;


    return (
      <header>
        <Row>
          <Col span={2}></Col>
          <Col span={4}>
            <a href="/" class="logo">
              <img src={require('../../images/logo.png')} alt="logo"/>
              <span>ReactNews</span>
            </a>
          </Col>
          <Col span={16}>
            <Menu
              onClick={this.handleClick}
              selectedKeys={[this.state.current]}
              mode="horizontal"
            >
              <Menu.Item key="top">
                <Icon type="mail"/>头条
              </Menu.Item>
              <Menu.Item key="shehui">
                <Icon type="appstore"/>社会
              </Menu.Item>
              <Menu.Item key="guonei">
                <Icon type="laptop"/>国内
              </Menu.Item>
              <Menu.Item key="guoji">
                <Icon type="setting"/>国际
              </Menu.Item>
              <Menu.Item key="yule">
                <Icon type="inbox"/>娱乐
              </Menu.Item>
              <Menu.Item key="tiyu">
                <Icon type="schedule"/>体育
              </Menu.Item>
              <Menu.Item key="keji">
                <Icon type="copyright"/>科技
              </Menu.Item>
              <Menu.Item key="shishang">
                <Icon type="form"/>时尚
              </Menu.Item>
              {userShow}
            </Menu>
          </Col>
          <Col span={2}></Col>
        </Row>
        {this.Modal()}
      </header>
    );
  }
}

export default PCHeader = Form.create({})(PCHeader);