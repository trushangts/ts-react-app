import React from 'react'
import ReactDOM from 'react-dom'
import Header from './Components/Header';
import Footer from './Components/Footer';

export default class Home extends React.Component {
  render () {
    return (
        <div>
            <Header />
                Home page Here
            <Footer />
        </div>        
    )}
}