import React from 'react'
import {
          Nav,
          NavbarBrand,
          NavbarToggler,
          NavItem,
          NavLink,
} from 'reactstrap';
import HeaderDropdown from './HeaderDropdown';

export default class Header extends React.Component {
  render () {
    
    return (
        <header className="app-header navbar">
          <NavbarToggler className="d-lg-none" onClick={this.mobileSidebarToggle}>
              <span className="navbar-toggler-icon"></span>
          </NavbarToggler>
          <NavbarBrand href="#"></NavbarBrand>
          <NavbarToggler className="d-md-down-none" onClick={this.sidebarToggle}>
              <span className="navbar-toggler-icon"></span>
          </NavbarToggler>

          <Nav className="ml-auto" navbar>
              <HeaderDropdown notif/>
              <HeaderDropdown tasks/>
              <HeaderDropdown mssgs/>
              <HeaderDropdown accnt/>
          </Nav>
        </header>
    )}
}