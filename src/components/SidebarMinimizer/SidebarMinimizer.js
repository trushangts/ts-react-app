import React, {Component} from 'react';

class SidebarMinimizer extends Component {

  sidebarMinimize() {
    document.body.classList.toggle('sidebar-minimized');
  }

  brandMinimize() {
    document.body.classList.toggle('brand-minimized');
  }
  //onClick={(event) => { this.sidebarMinimize(); this.brandMinimize() }}
  render() {
    return (
      <button className="sidebar-minimizer" type="button" ></button>
    )
  }
}

export default SidebarMinimizer;
