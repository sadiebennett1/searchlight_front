import React, {Component} from 'react'

import SearchForm from './SearchForm'
import {Link} from 'react-router-dom'
import Login from './Login'
import { connect } from 'react-redux'
import CelebrityList from './CelebrityList'


class Home extends Component {


  state = {
    bearerToken: 0,
    twitterURL: "https://api.twitter.com/oauth2/token",
    proxyURL: "https://cors-anywhere.herokuapp.com/",
    searchURL: "https://api.twitter.com/1.1/tweets/search/fullarchive/Development.json"
  }

  // componentDidMount(){
  //   fetch((`${this.state.proxyURL}` + `${this.state.twitterURL}`), {
  //     method: 'POST',
  //     headers: {
  //       'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8',
  //       Authorization: `Basic ${process.env.REACT_APP_encoded_bearer}`
  //     },
  //     body:
  //       'grant_type=client_credentials'
  //
  //   })
  //   .then((response) => {
  //     // console.log(response.json());
  //     return response.json()
  //   })
  //   .then((resp) => {
  //     // console.log(resp);
  //     this.setState({
  //       bearerToken: resp.access_token
  //     })
  //     fetch(`${this.state.proxyURL}` + `${this.state.searchURL}`, {
  //       method: 'POST',
  //       headers: {
  //         "Content-Type": "application/json",
  //         Authorization: `Bearer ${this.state.bearerToken}`
  //       },
  //       body: JSON.stringify({
  //         "query": "(hello) "
  //       })
  //     })
  //     .then((response) => {
  //         return response.json()
  //     })
  //     .then((obj) => {
  //       console.log(obj)
  //     })
  //   })
  // }



  render(){
    return(
      <div>
        <p>dhdu</p>
        <SearchForm />
        <CelebrityList celebrities={this.props.celebrities}/>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    loggedIn: state.loggedIn,
    tweets: state.tweets,
    celebrities: state.filteredCelebs,
  }
}



export default connect(mapStateToProps)(Home);
