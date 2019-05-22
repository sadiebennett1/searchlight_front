import React, {Component} from 'react'
import { connect } from 'react-redux'

class TweetForm extends Component {

  state = {
    content: "",
    celebrity: "",
  }

  handleSubmit = () => {

  }

  handleChange = (e) => {
    this.setState({[e.target.name]: e.target.value})
  }

    render(){
      console.log(this.props.celebrities)
      return(
        <div>
            <form onSubmit={(event) => {this.handleSubmit(event)}}>
            Content:<br/><input onChange={this.handleChange} type="textfield" name="content" value={this.state.content}></input>
            <br/>
            Date:<br/>
            <input onChange={this.handleChange} type="textfield" name="password" value={this.state.password}></input>
            <br></br>
            <select name="celebrities">
            {this.props.celebrities.map(celebrity =>
              <option value={celebrity.name}>{celebrity.name}</option>)}
            </select>
            <input type="submit" value="Submit"></input>
            </form>
        </div>
      )
    }
}



const mapStateToProps = (state) => {
  return {
    celebrities: state.celebrities
  }
}
export default connect(mapStateToProps)(TweetForm)
