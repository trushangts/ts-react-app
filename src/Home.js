import React from 'react'
import ReactDOM from 'react-dom'
import Header from './Components/Header';
import Footer from './Components/Footer';
import About from './Components/Page/About';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

export default class Home extends React.Component {
  render () {
    return (
        <div>
            <Header />
            <About />
            <Footer />
        </div>        
    )}
}