// Action Creators

export const allTweets = (tweets) => ({type: 'GET_TWEETS', payload: tweets})

export const allCelebrities = (celebrities) => ({type:'GET_CELEBRITIES', payload: celebrities})


//Thunk Creators

export const getTweets = () => {
  return (dispatch) => {
    return fetch('http://localhost:3005/tweets')
    .then(r => r.json())
    .then(res => dispatch(allTweets(res)))
  }
}

export const getCelebrities = () => {
  return (dispatch) => {
    return fetch('http://localhost:3005/celebrities')
    .then(r => r.json())
    .then(res => dispatch(allCelebrities(res)))
  }
}
