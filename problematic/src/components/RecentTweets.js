import React, {Component} from 'react'
import {connect} from 'react-redux'

class RecentTweets extends Component {

  state = {
    num: 0
  }


  findCelebrityName = (id) => {
    let name = ""
    this.props.celebrities.map(celebrity => {
      if(celebrity.id === id){
        name = celebrity.name
      }
    })
    return name
  }


  render(){

    return(
      <div className="leftcolumn">
      <h3 className="recentheader">Recent Tweets</h3>
      <ul>
      {(this.props.tweets[1] === undefined) ? <li>Loading</li> :
        <div>
        <div class="blockquote-wrapper"><div class="blockquote"><h1>{this.props.tweets[1].content}</h1><h4>&mdash;{this.findCelebrityName(this.props.tweets[1].celebrity_id)}</h4></div></div>
        <div class="blockquote-wrapper"><div class="blockquote"><h1>{this.props.tweets[4].content}</h1><h4>&mdash;{this.findCelebrityName(this.props.tweets[4].celebrity_id)}</h4></div></div>
        <div class="blockquote-wrapper"><div class="blockquote"><h1>{this.props.tweets[5].content}</h1><h4>&mdash;{this.findCelebrityName(this.props.tweets[5].celebrity_id)}</h4></div></div>
        </div>
      }
      </ul>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    tweets: state.tweets,
    celebrities: state.celebrities
  }
}
export default connect(mapStateToProps)(RecentTweets);
