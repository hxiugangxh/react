import React from 'react';
import MobileHeader from './mobile_header';
import '../../css/news/mobile.css';
import MobileFooter from './mobile_footer';

export default class MobileIndex extends React.Component {
  render() {
    return (
      <div>
        <MobileHeader/>
        <MobileFooter/>
      </div>
    );
  };
}
