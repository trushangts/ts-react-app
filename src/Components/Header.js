import React from 'react'
import ReactDOM from 'react-dom'
import 'bootstrap/dist/css/bootstrap.min.css';

export default class Header extends React.Component {
  render () {
    return (
        <div>
            <div class="jumbotron text-center">
              <h1>My First React Js Page</h1>
                <p>Resize this responsive page to see the effect!</p> 
            </div>            
        </div>
    )}
}