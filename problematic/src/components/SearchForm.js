import React, {Component} from 'react'
import { connect } from 'react-redux'
import {filterCelebrities} from '../Redux/Actions/actions.js'

class SearchForm extends Component {

  handleChange = (e) => {
    let userSearch = e.target.value.toLowerCase()
    let celebritiesArray = []
    let celebList = [...this.props.celebrities]
    celebList.map(celebrity => {
    if(celebrity.name.toLowerCase().includes(userSearch)){
      celebritiesArray.push(celebrity)
    }
    })
    this.props.filterCelebrities(celebritiesArray)
  }

  render(){
    return(
      <input onChange={this.handleChange} style={{ width: 500, height: 45, borderRadius: '100px'}} type="text"
        placeholder={"Search for a Celebrity"} />
    )
  }
}

const mapStateToProps = (state) => {
  return {
    celebrities: state.celebrities
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    filterCelebrities: (celebrities) => dispatch(filterCelebrities(celebrities))
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(SearchForm)
