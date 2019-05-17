import React, {Component} from 'react';
import { BrowserRouter, Route, Switch, withRouter } from 'react-router-dom'
import logo from './logo.svg';
import './App.css';

//components
import Home from './components/Home'

class App extends Component {
  render(){
    return (
      <div className="App">
        <header className="App-header">
          <BrowserRouter>
              <Switch>
                  <Route path="/home" component={Home} />
              </Switch>
          </BrowserRouter>
        </header>
      </div>
    )
  }
}

export default App;
