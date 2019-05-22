import React, {Component} from 'react'
import { connect } from 'react-redux'

class CelebrityProfile extends Component {

  state = {
    celebrity: {},
    celebTweets: []
  }

  componentDidMount() {
    let celebId = parseInt(this.props.match.params.id)
    fetch(`http://localhost:3005/celebrities/${celebId}`)
    .then(r => r.json())
    .then(res =>
      this.setState({
          celebrity: res,
          celebTweets: res.tweets
        }))

    }
    //
    // componentDidMount(){
    //   setTimeout(this.makeState, 3000)
    // }

    render(){
      console.log(this.state.celebTweets)
      return(
        <div>
        <img className="celebImage" src={this.state.celebrity.img} alt=""/> <h1>{this.state.celebrity.name}</h1>
        {this.state.celebTweets.map(tweet =>
          <div class="container">
            <div class="quote-box">
              <div class="quote">
              <img class="twitterIcon" src="https://help.twitter.com/content/dam/help-twitter/twitter-logo.png" alt=""/>
              <blockquote>
                "{tweet.content}"
              </blockquote>
           </div>
          </div>
        </div>

          )}
        </div>

      )
    }
}

const mapStateToProps = (state) => {
  return {
    celebrities: state.celebrities,
    tweets: state.tweets
  }
}



export default connect(mapStateToProps)(CelebrityProfile);
