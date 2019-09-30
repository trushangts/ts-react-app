import React, {Component} from 'react';
import {Container, Row, Col, CardGroup, Card, CardBody, Button, Input, InputGroup, InputGroupAddon} from 'reactstrap';
import configuration from '../../config';
import {ToastContainer, toast} from 'react-toastify';
import {Link, Switch, Route, Redirect} from 'react-router-dom';

class Login extends Component {
    constructor(props) {
		super(props);
		this.state = {
           fields: {},
           errors: {}
        }
    }

    handleValidation(){
        let fields = this.state.fields;
        let errors = {};
        let formIsValid = true;

        //Email
        if(!fields["email"]){
           formIsValid = false;
           errors["email"] = "Please enter email.";
        }

        if(typeof fields["email"] !== "undefined"){
            let lastAtPos = fields["email"].lastIndexOf('@');
            let lastDotPos = fields["email"].lastIndexOf('.');

            if (!(lastAtPos < lastDotPos && lastAtPos > 0 && fields["email"].indexOf('@@') == -1 && lastDotPos > 2 && (fields["email"].length - lastDotPos) > 2)) {
              formIsValid = false;
              errors["email"] = "Please enter valid email address.";
            }
        }

        // password
        if(!fields["password"]){
           formIsValid = false;
           errors["password"] = "Please enter password.";
        }


       this.setState({errors: errors});
       return formIsValid;
    }

    handleChange(field, e){
        let fields = this.state.fields;
        fields[field] = e.target.value;
        this.setState({fields});
    }

    handleForgotPassword(){
       this.props.history.push('/forgotpassword');
    }

  	handleLogin(e){
		  e.preventDefault();
		  
  		this.props.history.push('/dashboard');
	}

    render() {
		const containerStyle = {
	  		top:'80px'
		};
		return (
		  <div className="app flex-row align-items-center login-bg">
		  <ToastContainer position="top-right" autoClose={5000} style={containerStyle}/>
			<Container>

				<div className="login-form">
				  <CardGroup>
					<Card className="p-4">
					  <CardBody>
						<h1>Login</h1>
						<p className="text-muted">Sign In to your account</p>
						<InputGroup className="mb-3">
						  <div className="input-group-prepend">
							<span className="input-group-text">
							  <i className="icon-user"></i>
							</span>
						  </div>
						  <input type="text" className="form-control textbox" placeholder="Email" onChange={this.handleChange.bind(this, "email")} value={this.state.fields["email"]}/>
						</InputGroup>
						<span style={{color: "red",fontSize:"15px"}}>{this.state.errors["email"]}</span>
						<InputGroup className="mb-4">
						  <div className="input-group-prepend">
							<span className="input-group-text">
							  <i className="icon-lock"></i>
							</span>
						  </div>
						  <input type="password" className="form-control textbox" placeholder="Password" onChange={this.handleChange.bind(this, "password")} value={this.state.fields["password"]}/>
						</InputGroup>
						<span style={{color: "red",fontSize:"15px"}}>{this.state.errors["password"]}</span>
						<Row>
						  <Col xs="6">
							<Button color="primary" className="px-4" onClick={this.handleLogin.bind(this)}>Login</Button>
						  </Col>
						  <Col xs="6" className="text-right">
							<Button color="link" className="px-0 forgot-btn" onClick={this.handleForgotPassword.bind(this)}>Forgot password?</Button>
						  </Col>
						</Row>
					  </CardBody>
					</Card>
				  </CardGroup>
				</div>
			</Container>
		  </div>
		);
	  }
	}

export default Login;
