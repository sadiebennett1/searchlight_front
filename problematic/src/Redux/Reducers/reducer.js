// import celebritiesArray from '..celebrities'


const initialState = {
  celebrities: [],
  filteredCelebs: [],
  currentUser: {},
  userId: {},
  loggedIn: false,
  tweets: [],
  bearerToken: 0
}




const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'GET_TWEETS':
      return {...state, tweets: action.payload};
    case 'GET_CELEBRITIES':
      return  {...state, celebrities: action.payload, filteredCelebs: action.payload};
    case 'ON_LOGIN':
      return {...state, loggedIn: true, currentUser: action.payload.user, userId: action.payload.user.id};
    case 'FILTER_CELEBS':
      return {...state, filteredCelebs: action.payload}
    case 'ERROR':
      return {};
    case 'LOGOUT':
      return {...state, loggedIn: false, currentUser: {}, userId: {}}
    default:
      return state
  }
}

export default reducer;
