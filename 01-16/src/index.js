import React from 'react';
import 'antd/dist/antd.css';
import zhCN from 'antd/lib/locale-provider/zh_CN';
import moment from 'moment';
import 'moment/locale/zh-cn';

moment.locale('zh-cn');

import PCFooter from './js/components/pc_footer'

export default class Index extends React.Component {
  render() {
    return (
      <div>1
        <img src={require('./images/manhua.png')} />
        <PCFooter />
      </div>
    );
  }
}