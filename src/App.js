import React, { Component } from 'react'
import './App.css';
import Nav from "./components/Nav"
import Desc from "./components/Description"
import Input from "./components/Input"

export class App extends Component {
  render() {
    return (
      <div>
        <div className="container">
          <Nav/>
          <Desc/>
          <Input/>
        </div>
      </div>
    )
  }
}

export default App
