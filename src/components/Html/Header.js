import React from 'react'
import ReactDOM from 'react-dom'

export default class Header extends React.Component {
  render () {
    
    return (
        <div>
            
            <div className="d-flex flex-column flex-md-row align-items-center p-3 px-md-4 mb-3 bg-white border-bottom shadow-sm">
              <h5 className="my-0 mr-md-auto font-weight-normal">TechnoStacks</h5>
              <nav className="my-2 my-md-0 mr-md-3">
                <a className="p-2 text-dark" href="#">Home</a>
                <a className="p-2 text-dark" href="#">Service</a>
                <a className="p-2 text-dark" href="#">About US</a>
                <a className="p-2 text-dark" href="#">Contact US</a>
              </nav>
              <a className="btn btn-outline-primary" href="#">Sign up</a>
            </div>
            
        </div>
    )}
}