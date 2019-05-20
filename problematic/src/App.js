import React, {Component} from 'react';
import { BrowserRouter, Route, Switch, withRouter } from 'react-router-dom'
import logo from './logo.svg';
import './App.css';
import Nav from './components/Nav'
import Login from './components/Login'


//components
import Home from './components/Home'

class App extends Component {
  render(){
    return (
      <div className="App">
        <header className="App-header">
          <BrowserRouter>
                <Route path="/" component={Nav} />
                <Route path="/home" component={Home} />
                <Route path="/login" component={Login} />
          </BrowserRouter>
        </header>
      </div>
    )
  }
}

export default App;
