import React from 'react';
import 'antd/dist/antd.css';
import zhCN from 'antd/lib/locale-provider/zh_CN';
import moment from 'moment';
import 'moment/locale/zh-cn';

moment.locale('zh-cn');
import './css/pc.css';
import './css/mobile.css';

import PCIndex from './js/components/pc_index';
import MobileIndex from './js/components/mobile_index';
import MediaQuery from 'react-responsive';

export default class Index extends React.Component {
  render() {
    return (
      <div>
        <MediaQuery query='(min-device-width: 1224px)'>
          <PCIndex/>
        </MediaQuery>
        <MediaQuery query='(max-device-width: 1224px)'>
          <MobileIndex/>
        </MediaQuery>
      </div>
    );
  }
}