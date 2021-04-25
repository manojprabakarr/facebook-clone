import React from 'react'
import './login.css'
import {auth,provider} from '../firebase'
import {actionTypes} from '../reducer'
import {Usestatevalue} from '../stateprovider'

function Login() {
    const [{}, dispatch] = Usestatevalue();

    const Signin = () => {
      auth
        .signInWithPopup(provider)
        .then((result) => {
          dispatch({
            type: actionTypes.SET_USER,
            user: result.user,
          });
          console.log(result);
        })
        .catch((error) => {
          alert(error.message);
        });
    };
    return (
        <div className="login">
            <div className="facebooklogin">
                <img 
                src="https://1000logos.net/wp-content/uploads/2016/11/Facebook-logo.jpg"
                alt="facebook logo"/>

                <img
                src="https://www.logo.wine/a/logo/Facebook/Facebook-Logo.wine.svg"
                alt="facebook"/>

                <button type="submit" onClick={Signin} >Login</button>

            </div>
            
        </div>
    )
}

export default Login
