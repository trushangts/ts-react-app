import React, {Component} from "react";
import {Bar, Doughnut, Line, Pie, Polar, Radar} from 'react-chartjs-2';

import {BootstrapTable, TableHeaderColumn} from 'react-bootstrap-table';
import {Link, Switch, Route, Redirect} from 'react-router-dom';
//import configuration from '../../config';

import Widget02 from './Widget02';
import Widget04 from './Widget04';
import {
  Badge,
  Row,
  Col,
  Progress,
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  CardTitle,
  Button,
  ButtonToolbar,
  ButtonGroup,
  ButtonDropdown,
  Label,
  CardColumns,
  Input,
  Table
} from "reactstrap";




class Dashboard extends Component {
	constructor(props) {
		super(props);
		this.state = {
			data:[],
			monthData:[],
			ratingRevenue:[],
			dropdownOpen: false
		};
	}


	//Call API to get all data of administrators
	// componentDidMount(){
	// 	fetch(configuration.baseURL+"dashboard/get-data")
	// 	.then( (response) => {
	// 		return response.json()
	// 	})
	// 	.then( (json) => {
	// 		this.setState({ data: json.data});
	// 	});

	// 	fetch(configuration.baseURL+"dashboard/get-data-monthly")
	// 	.then( (response) => {
	// 		return response.json()
	// 	})
	// 	.then( (json) => {
	// 		this.setState({ monthData: json.data});
	// 	});

	// 	fetch(configuration.baseURL+"dashboard/get-rating-revenue")
	// 	.then( (response) => {
	// 		return response.json()
	// 	})
	// 	.then( (json) => {
	// 		this.setState({ ratingRevenue: json.data});
	// 	});
	// }


	render() {
	return (
		<div className="animated fadeIn dashboard">
			<Row>
	        	<Col sm="6" md="3">
					<Widget04 icon="fa fa-users" color="info" header="10" value="10" invert>Total Consumers</Widget04>
				</Col>
				<Col sm="6" md="3">
					<Widget04 icon="fa fa-reorder" color="success" header="15" value="15" invert>Total Orders</Widget04>
				</Col>
				<Col sm="6" md="3">
					<Widget04 icon="fa fa-shopping-cart" color="warning" header="11" value="11" invert>Total Stores</Widget04>
				</Col>
				<Col sm="6" md="3">
					<Widget04 icon="fa fa-ticket" color="primary" header="5" value="5" invert>Active Vouchers</Widget04>
				</Col>
	        </Row>
			
			<Row>
	        </Row>
            
		</div>
	)}
}

export default Dashboard;