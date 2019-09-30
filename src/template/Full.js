import React, { Component } from 'react';
import { Link, Switch, Route, Redirect } from 'react-router-dom';
import { Container } from 'reactstrap';
import Header from '../components/Html/Header';
import Footer from '../components/Html/Footer';
// import Sidebar from '../../components/Sidebar/';
// import Breadcrumb from '../../components/Breadcrumb/';
// import Aside from '../../components/Aside/';


// import Dashboard from '../../views/Dashboard/Dashboard';
// import ViewAdministrator from '../../views/Administrator/ViewAdministrator';
// import AddAdministrator from '../../views/Administrator/AddAdministrator';
// import EditAdministrator from '../../views/Administrator/EditAdministrator';



class Full extends Component {
	render() {
		return (
			<div className="app">
				<Header />
				{/* <div className="app-body">
					<Sidebar {...this.props} />
					<main className="main">
						<Breadcrumb />
						<Container fluid>
							<Switch>
								<Route path="/dashboard" name="Category" component={Dashboard} />
								<Route path="/viewadministrator" name="Administrator" component={ViewAdministrator} />
								<Route path="/addadministrator" name="Administrator" component={AddAdministrator} />
								<Route path="/editadministrator" name="Administrator" component={EditAdministrator} />
								<Redirect from="/" to="/login" />
							</Switch>
						</Container>
					</main>
					<Aside />
				</div> */}
				<Footer />
			</div>
		);
	}
}

export default Full;
