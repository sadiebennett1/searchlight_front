// import celebritiesArray from '..celebrities'


const initialState = {
  celebrities: [],
  currentUser: localStorage.getItem('user'),
  userId: localStorage.getItem('userId'),
  loggedIn: false,
  tweets: {}
}




const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'GET_TWEETS':
      return {...state, tweets: action.payload};
    case 'GET_CELEBRITIES':
      return  {...state, celebrities: action.payload};
    case 'ON_LOGIN':
      return {...state, loggedIn: true, currentUser: action.payload.user, userId: action.payload.user.id}
    case 'ERROR':
      return {};
    default:
      return state
  }
}

export default reducer;
