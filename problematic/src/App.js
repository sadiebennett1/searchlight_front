import React, {Component} from 'react';
import { BrowserRouter, Route, Switch, withRouter } from 'react-router-dom'
import symbol from './assets/uhhhh.png';
import './App.css';
import Nav from './components/Nav'
import Login from './components/Login'
import Error from './components/Error'
import CelebrityProfile from './components/CelebrityProfile'
import UserProfile from './components/UserProfile'
import About from './components/About'
import TweetForm from './components/TweetForm'
import SignUp from './components/SignUp'
import { successLogin, loginUserFromToken} from './Redux/Actions/authActions.js'
import {getTweets, getCelebrities} from './Redux/Actions/actions.js'
import { connect } from 'react-redux'


//components
import Home from './components/Home'

class App extends Component {


  componentDidMount() {
    this.props.getTweets()
    this.props.getCelebrities()
    let token = localStorage.getItem('token')
    // console.log(token)
    // if(token){
    //     this.props.loginUserFromToken(localStorage.getItem('token'))
    // }
  }


  render(){
    // console.log(this.props)
    return (
      <div className="App">
        <div className="header"><h1>SEARCHLIGHT</h1></div>
          <BrowserRouter>
                <Route path="/" component={Nav} />
                <Route path="/home" component={Home} />
                <Route path="/newTweet" component={TweetForm}/>
                <Route path="/about" component={About} />
                <Route path="/login" component={Login} />
                <Route path="/register" component={SignUp} />
                <Route path="/api/v1/users/profile" component={UserProfile} />
                <Route path="/celebrities/:id" component={CelebrityProfile}/>
                <Route path="/404" component={Error} />
          </BrowserRouter>
      </div>
    )
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    getTweets: () => dispatch(getTweets()),
    getCelebrities: () => dispatch(getCelebrities())
  }
}

const mapStateToProps = (state) => {
  return {
    loggedIn: state.loggedIn
  }
}


export default connect(mapStateToProps, { successLogin, loginUserFromToken, getTweets, getCelebrities } )(App)
