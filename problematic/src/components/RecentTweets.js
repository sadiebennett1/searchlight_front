import React, {Component} from 'react'
import {connect} from 'react-redux'

class RecentTweets extends Component {

  state = {
    num: 0
  }


  componentDidMount(){
    this.setState({
      num: this.props.length
    })
  }


  render(){
    return(
      <div className="leftcolumn">
      <ul>
      {(this.props.tweets[1] === undefined) ? <li>Loading</li> : <li>{this.props.tweets[1].content}</li>}
      </ul>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    tweets: state.tweets
  }
}
export default connect(mapStateToProps)(RecentTweets);
