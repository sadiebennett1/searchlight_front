import React, {Component} from 'react'

import SearchForm from './SearchForm'
import {Link} from 'react-router-dom'
import Login from './Login'
import { connect } from 'react-redux'
import CelebrityList from './CelebrityList'
import RecentTweets from './RecentTweets'


class Home extends Component {


  state = {
    bearerToken: 0,
    twitterURL: "https://api.twitter.com/oauth2/token",
    proxyURL: "https://cors-anywhere.herokuapp.com/",
    searchURL: "https://api.twitter.com/1.1/tweets/search/fullarchive/Development.json"
  }



  render(){
    return(
      <div className="row">
        <RecentTweets length={this.props.tweets.length}/>
        <div className="rightcolumn">
        <br/>
        <SearchForm />
        <CelebrityList celebrities={this.props.celebrities}/>
        </div>
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
