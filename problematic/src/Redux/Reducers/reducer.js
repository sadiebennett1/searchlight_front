// import celebritiesArray from '..celebrities'


const initialState = {
  celebrities: {},
  users: {},
  tweets: {}
}




const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'GET_TWEETS':
      return {...state, tweets: action.payload}
    default:
      return state
  }
}

export default reducer;
