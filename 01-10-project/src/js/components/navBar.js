import React from 'react';
import {NavLink} from 'react-router-dom';
import '../../css/nav.css';

export default class NavBar extends React.Component {
  render() {
    return (
      <div>
        <div>
          <NavLink exact to='/' className="blue">Jspanga</NavLink> |&nbsp;
          <NavLink to='/Jspangb/123' activeClassName='active'>Jspangb</NavLink> |&nbsp;
          <NavLink to='/Jspangc' activeClassName='active'>Jspangc</NavLink> |&nbsp;
          <NavLink to='/react' activeClassName='active'>404</NavLink>|&nbsp;
          <NavLink to='/redirect' activeClassName='active'>Redirect</NavLink>
        </div>
      </div>);
  }
}