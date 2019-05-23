import React, {Component} from 'react'
import { connect } from 'react-redux'

class TweetForm extends Component {

  state = {
    content: "",
    date: "",
    celebrity: "",
    offense: "",
    clicked: false,
    name: "",
    occupation: "",
    img: ""
  }

  handleSubmit = (event) => {

    event.preventDefault();
    if(this.state.name != ""){
      let celebObj = {name: this.state.name, occupation: this.state.occupation, img: this.state.img, score: 0}
      let token = localStorage.getItem('token')
      console.log(celebObj)
      fetch("http://localhost:3005/celebrities", {
          method: "POST",
          headers: {
                  "Content-Type": "application/json",
                  "Accept": "application/json",
                  'Authorization': 'Bearer ' + token
          },
        body: JSON.stringify( celebObj )
          })
      .then((response) =>  {
        return response.json()
      })
      .then((obj) => {
        let celebId = obj.id
        let tweetObj = {content: this.state.content, date: this.state.date, offense: this.state.offense, celebrity_id: celebId, user_id:  this.props.currentUser.id}
        let token = localStorage.getItem('token')
        fetch("http://localhost:3005/tweets", {
            method: "POST",
            headers: {
                    "Content-Type": "application/json",
                    "Accept": "application/json",
                    'Authorization': 'Bearer ' + token
            },
          body: JSON.stringify( tweetObj )
            })
        this.props.history.push(`/celebrities/${celebId}`)
      })
    }
    else{
      let celebId = parseInt(this.state.celebrity)
      let tweetObj = {content: this.state.content, date: this.state.date, offense: this.state.offense, celebrity_id: celebId, user_id:  this.props.currentUser.id, approval: true}
      let token = localStorage.getItem('token')
      fetch("http://localhost:3005/tweets", {
          method: "POST",
          headers: {
                  "Content-Type": "application/json",
                  "Accept": "application/json",
                  'Authorization': 'Bearer ' + token
          },
        body: JSON.stringify( tweetObj )
          })
      this.props.history.push(`/celebrities/${celebId}`)
     }
  }

  handleChange = (e) => {
    this.setState({[e.target.name]: e.target.value})
  }

  handleClick = (e) =>{
    this.setState({
      clicked: !this.state.clicked
    })
  }

  newCelebForm = () => {
    return (
      <div>
      Name: <br/>
      <input onChange={this.handleChange} type="textfield" name="name" value={this.state.name}></input>
      <br/>
      Occupation:<br/>
      <input onChange={this.handleChange} type="textfield" name="occupation" value={this.state.occupation}></input><br/>
      Image:<br/>
      <input onChange={this.handleChange} type="textfield" name="img" value={this.state.img}></input>
      <br></br></div>
    )
  }




    render(){
      console.log(this.props.history)
      return(
        <div>
            <form onSubmit={(event) => {this.handleSubmit(event)}}>
            Content:<br/><input onChange={this.handleChange} type="textfield" name="content" value={this.state.content}></input>
            <br/>
            Date:<br/>
            <input onChange={this.handleChange} type="date" name="date" value={this.state.password}></input>
            <br></br><br></br>
            Celebrity: <select name="celebrity" onChange={this.handleChange}>
            <option value=""></option>
            {this.props.celebrities.map(celebrity =>
              <option value={celebrity.id}>{celebrity.name}</option>)}
            </select><br></br>
            <br></br>
            Offense: <select name="offense" onChange={this.handleChange}>
              <option value=""></option>
              <option value="Racism">Racism</option>
              <option value="Ableism">Ableism</option>
              <option value="Homophobia">Homophobia</option>
              <option value="Transphobia">Transphobia</option>
              <option value="Xenophobia">Xenophobia</option>
              <option value="Sexism">Sexism</option>
              <option value="Fatphobia">Fatphobia</option>
              <option value="Classism">Classism</option>
            </select>
            <br></br>
            <br></br><button name="addceleb" type="button" onClick={this.handleClick}>Add New Celebrity</button>
            {(this.state.clicked) ? (this.newCelebForm()) : null}
              <br></br><br></br><input type="submit" value="Submit"></input>
            </form>
        </div>
      )
    }
}



const mapStateToProps = (state) => {
  return {
    celebrities: state.celebrities,
    currentUser: state.currentUser
  }
}
export default connect(mapStateToProps)(TweetForm)
