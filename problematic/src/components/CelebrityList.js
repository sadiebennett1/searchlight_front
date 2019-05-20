import React from 'react'
import {Link} from 'react-router-dom'
import { connect } from 'react-redux'


class CelebrityList extends React.Component {

  render(){
    return(
      <ul>
      {this.props.celebrities.map(celebrity =>
      <li><Link to={`/celebrities/${celebrity.id}`}>{celebrity.name}</Link></li>)}
      </ul>
    )
  }
}


export default CelebrityList;
