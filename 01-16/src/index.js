import React from 'react';
import 'antd/dist/antd.css';
import zhCN from 'antd/lib/locale-provider/zh_CN';
import moment from 'moment';
import 'moment/locale/zh-cn';

moment.locale('zh-cn');
import './css/pc.css';

import PCHeader from './js/components/pc_header';

export default class Index extends React.Component {
  render() {
    return (
      <div>
        <PCHeader/>
      </div>
    );
  }
}