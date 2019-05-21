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
         console.log('Login response: ', userJSON)
        if (userJSON.jwt){
          localStorage.setItem('token', userJSON.jwt)
          localStorage.setItem('user', userJSON.user.username)
          localStorage.setItem('userId', userJSON.user.id)
          dispatch(successLogin(userJSON))
        } else{
          let error = userJSON.error
          dispatch(errorLogin(error.toString()))
        }
      })
  }
}
