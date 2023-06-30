// import React from 'react';
// import '../../App.css';

// export default function SignUp() {
  
//   return <h1 className='sign-up'>LIKE & SUBSCRIBE</h1>;
// }

// import React, {useEffect, useState} from "react";
// import GoogleLogin from "react-google-login";
// import { gapi } from "gapi";
// import "./loginform.css"

// const LoginForm = () => {

//     useEffect(() => {
//         function start() {
//             gapi.client.init({
//                 clientId: "547074619372-q6sfjbv2c7uoa50ror24nb6b9gdfc1uq.apps.googleusercontent.com",
//                 scope: ""
//             })
//         }
//         gapi.load('client: auth2', start)
//     })

//     const [popupStyle, showPopup] = useState("hide")

//     const popup = () => {
//         showPopup("login-popup")
//         setTimeout(() => showPopup("hide"), 3000)
//     }

//     // const onSuccess = e => {
//     //     alert("User signed in")
//     //     console.log(e)
//     // }

//     // const onFailure = e => {
//     //     alert("User sign in Failed")
//     //     console.log(e)
//     // }

//     return (
//         <div className="cover">
//             <h1>Login</h1>
//             <input type="text" placeholder="username" />
//             <input type="password" placeholder="password" />

//             <div className="login-btn" onClick={popup}>Login</div>

//             <p className="text">Or login using</p>

//             <div className="alt-login">
//                 <div className="facebook"></div>
//                 <div className="google">
//                     <GoogleLogin className="blue"
//                         clientId="79474543031-tmjo35916ufn421ej3u1i2ljao2apr4s.apps.googleusercontent.com"
//                         buttonText=""
//                         //onSuccess={onSuccess}
//                         //onFailure={onFailure}
//                         cookiePolicy={'single_host_origin'}
//                         isSignedIn={false} // alternative is true, which keeps the user signed in
//                         icon={false}    // alt is true, and this puts the google logo on your button, but I don't like it
//                         theme="dark"  // alternative is light, which is white
//                     />
//                 </div>
//             </div>

//             <div className={popupStyle}>
//                 <h3>Login Failed</h3>
//                 <p>Username or password incorrect</p>
//             </div>
            
//         </div>
//     )
// }

// export default LoginForm


import React, { useState } from "react";
import GoogleLogin from "react-google-login";
import "./loginform.css"

const LoginForm = () => {
  const [popupStyle, showPopup] = useState("hide");

  const popup = () => {
    showPopup("login-popup")
    setTimeout(() => showPopup("hide"), 3000)
  }

  return (
    <div className="cover">
      <h1>Login</h1>
      <input type="text" placeholder="Username"  />
      <input type="password" placeholder="Password"  />

      <div className="login-btn" onClick={popup}>Login</div>

      {/* <p className="text">Or login using</p>

      <div className="alt-login">
        <div className="facebook"></div>
        <div className="google">
          <GoogleLogin
            className="blue"
            clientId="79474543031-tmjo35916ufn421ej3u1i2ljao2apr4s.apps.googleusercontent.com"
            buttonText=""
            cookiePolicy={'single_host_origin'}
            isSignedIn={false}
            icon={false}
            theme="dark"
          />
        </div>
      </div> */}

      <div className={popupStyle}>
        <h3>Login Failed</h3>
        <p>Username or password incorrect</p>
      </div>
    </div>
  );
};

export default LoginForm;
