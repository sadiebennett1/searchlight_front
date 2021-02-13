import React, {Component} from 'react'
import { connect } from 'react-redux'
import header from '../assets/header.png'

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


    getBarLength = () => {
      let numTweet = this.state.celebTweets.length
      let percent = numTweet * 10
      console.log(document)
      return percent + "%"

    }

    render(){
      let percent = this.getBarLength()
      return(
        <div className="w3-container">
        <img className="w3-card-4" id="celebImage" src={this.state.celebrity.img} alt=""/> <h1 className="w3-container w3-center">{this.state.celebrity.name}</h1>
        <div><div class="w3-light-grey" id="progressBar">
        <div class="w3-container w3-red w3-center" style={{width: percent}}>{this.getBarLength()}</div>
        </div> Cancelled </div>
        <br/>
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
         <div className="profile" style={{ 'background-image': `url('${this.state.celebrity.img}')`}} ></div>
            <div className="info">
              <h3>{this.state.celebrity.name}</h3>
              <p>{this.state.celebrity.occupation}</p>
              </div>
        <br/><br/><br/><br/><br/><br/><br/><br/><br/>

          <div class="w3-light-grey w3-xlarge">
            <div class="w3-container w3-red" style={{width: percent}}>{this.getBarLength()} Cancelled</div>
          </div>
          <br/><br/>
        <div class="tweetgallery">
        {this.state.celebTweets.map(tweet =>
            <div class="responsive">
              <div class="gallery">
                  <div class="tweetcontent">{tweet.content}</div>
                </div>
              </div>
            )}
        </div>
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
