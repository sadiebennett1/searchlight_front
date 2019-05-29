import React, {Component} from 'react'
import {connect} from 'react-redux'

class RecentTweets extends Component {
  render(){
    return(
      <div class="leftcolumn"><ul><li>What what</li></ul></div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    tweets: state.tweets
  }
}
export default connect(mapStateToProps)(RecentTweets);
