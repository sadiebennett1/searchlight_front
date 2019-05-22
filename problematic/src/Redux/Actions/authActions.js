export const successLogin = (user) => ({type: 'ON_LOGIN', payload: user})
export const errorLogin = (error) => ({type:'ERROR', payload: error})


export const onLogin = (state) => {
  return(dispatch) => {
    return fetch("http://localhost:3005/api/v1/login", {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify({
              user: state
            })
      })
      .then(r => r.json())
      .then(userJSON => {
         console.log('Login response: ', userJSON.exception)
        if (userJSON.jwt && userJSON.user){
          localStorage.setItem('token', userJSON.jwt)
          dispatch(successLogin(userJSON))
        } else{
          let error = userJSON.message
          // dispatch(errorLogin(error.toString()))
        }
      })
  }
}

export const loginUserFromToken = token => dispatch => {
 fetch('http://localhost:3005/api/v1/reauth', {
   method: 'GET',
   headers: {
     'Content-Type': 'application/json',
     'Accept': 'application/json',
     'Authorization': `BEARER ${token}`
   }
 }).then(r => r.json())
   .then(user => dispatch(successLogin(user)))
}
