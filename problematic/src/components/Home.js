import React, {Component} from 'react'
import { getTweets } from '../Redux/Actions/actions.js'
import SearchForm from './SearchForm'
import { connect } from 'react-redux'



class Home extends Component {

  componentDidMount(){
    this.props.getTweets()
  }



  render(){
    return(
      <div>
        <h1>Home Page</h1>
        <SearchForm />
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    tweets: state.tweets
  }
}


const mapDispatchToProps = (dispatch) => {
  return {
    getTweets: () => dispatch(getTweets())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);
