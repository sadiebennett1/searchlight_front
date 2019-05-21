import React, {Component} from 'react'
import { getTweets, getCelebrities } from '../Redux/Actions/actions.js'
import SearchForm from './SearchForm'
import {Link} from 'react-router-dom'
import Login from './Login'
import { connect } from 'react-redux'
import CelebrityList from './CelebrityList'



class Home extends Component {

  componentDidMount(){
    this.props.getTweets()
    this.props.getCelebrities()
  }



  render(){

    return(
      <div>
        <h1>Home Page</h1>
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


const mapDispatchToProps = (dispatch) => {
  return {
    getTweets: () => dispatch(getTweets()),
    getCelebrities: () => dispatch(getCelebrities())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);
