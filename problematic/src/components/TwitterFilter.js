import React, {Component} from 'react'

class TwitterFilter extends Component {

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
      <h1>Live Twitter Search</h1>
      <input onChange={this.handleChange} style={{ width: 500, height: 45, borderRadius: '100px'}} type="text"
        placeholder="Enter a keyword" />
      </div>
    )
  }
}

export default TwitterFilter
