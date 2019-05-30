export const successLogin = (user) => ({type: 'ON_LOGIN', payload: user})
export const errorLogin = (error) => ({type:'ERROR', payload: error})
export const logOut = () => ({type:'LOGOUT', payload: null})



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
         // console.log('Login response: ', userJSON.exception)
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


export const signUp = user => {
    console.log(user)
    return (dispatch) => {
        return fetch("http://localhost:3005/api/v1/users", {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify({user})
        })
        .then((response) => {
          console.log(response);
          return response.json()
        })
        .then(data => {
            if (data.error) {
                console.log("try again")
            } else {
                console.log("this is the user obj", data)
                localStorage.setItem('token', data.jwt)
                dispatch(onLogin({username: user.username, password: user.password}))
            }
        })
    }
}
