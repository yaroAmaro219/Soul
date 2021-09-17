import React, { Component } from 'react'
import Header from './Header'
import Ram from '../images/Screen Shot 2020-08-07 at 8.48.55 PM.png'

export default class Home extends Component {
  render() {
    return (
      <div class="App">
        <Header/>
         <h1>Soul Deep Soul</h1>
          <h4>A blog focused on what we know about the soul mind body   connection</h4>
         <img src={Ram} class='ram'/>
      </div>
    )
  }
}
