import React, {Component} from 'react'
import { connect } from 'react-redux'

class SearchForm extends Component {

  render(){
    return(
      <input style={{ width: 500, height: 35, borderRadius: '100px'}} type="text"
        placeholder={"Search for a Celebrity"} />
    )
  }
}

const mapStateToProps = () => {
  return {}
}


export default connect(mapStateToProps)(SearchForm)
