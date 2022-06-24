import './App.css'
import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
import Contact from './Components/Contact'
import Footer from './Components/Footer'
import Navbar from './Components/Navbar'
import Index from './Components/Index/Index'

class App extends Component {
  render() {
    return (
      <div>        
        <Router>
          <Navbar />
          <div className="contant">
            <Route exact path='/'   component={Index } />
            <Route  path='/contact' component={Contact } />
            </div>
          <Footer />
        </Router>
      </div>
    );
  }
}

export default App
