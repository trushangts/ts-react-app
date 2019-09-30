import React, {Component} from 'react';
import {TabContent, TabPane, Nav, NavItem, NavLink, Progress, Label, Input} from 'reactstrap';
import classnames from 'classnames';

class Aside extends Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      activeTab: '1'
    };
  }

  toggle(tab) {
    if (this.state.activeTab !== tab) {
      this.setState({
        activeTab: tab
      });
    }
  }

  render() {
    return (
      <aside className="aside-menu">
        <Nav tabs>
          <NavItem>
            <NavLink className={classnames({ active: this.state.activeTab === '1' })}
                     onClick={() => { this.toggle('1'); }}>
              <i className="icon-list"></i>
            </NavLink>
          </NavItem>
        </Nav>
        <TabContent activeTab={this.state.activeTab}>
          <TabPane tabId="1">
            <div className="callout m-0 py-2 text-muted text-center bg-light text-uppercase">
              <small><b>Today</b></small>
            </div>
            <hr className="transparent mx-3 my-0"/>
            <div className="callout callout-warning m-0 py-3">
              <div className="avatar float-right">
                <img src={'img/avatars/7.jpg'} className="img-avatar" alt="admin@bootstrapmaster.com"/>
              </div>
              <div>Meeting with <strong>Lucas</strong></div>
              <small className="text-muted mr-3"><i className="icon-calendar"></i>&nbsp; 1 - 3pm</small>
              <small className="text-muted"><i className="icon-location-pin"></i>&nbsp; Palo Alto, CA</small>
            </div>
            <hr className="mx-3 my-0"/>
          </TabPane>
        </TabContent>
      </aside>
    )
  }
}

export default Aside;
