// Action Creators

export const allTweets = (tweets) => ({type: 'GET_TWEETS', payload: tweets})


//Thunk Creators

export const getTweets = () => {
  return (dispatch) => {
    return fetch('http://localhost:3005/tweets')
    .then(r => r.json())
    .then(res => dispatch(allTweets(res)))
  }
}
