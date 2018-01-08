import React from 'react';
var footerCss = require('../../css/footer.css');

export default class Footer extends React.Component {
  render() {
    console.log(footerCss);
    return (
      <footer className={footerCss.minFooter}>
        <h1>这是页面的底部</h1>
      </footer>
    );
  }
}