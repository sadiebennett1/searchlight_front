import React, {Component} from 'react';
import { BrowserRouter, Route, Switch, withRouter } from 'react-router-dom'
import logo from './logo.svg';
import './App.css';
import Nav from './components/Nav'
import Login from './components/Login'
import Error from './components/Error'
import CelebrityProfile from './components/CelebrityProfile'
import About from './components/About'


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
                <Route path="/about" component={About} />
                <Route path="/login" component={Login} />
                <Route path="/celebrities/:id" component={CelebrityProfile}/>
                <Route path="/404" component={Error} />
          </BrowserRouter>
        </header>
      </div>
    )
  }
}

export default App;
