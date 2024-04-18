import React from 'react'
import './Login.css'
const Login = () => {
  return (
    <>
     <div className="container">
  <h1 className="title">SIGN IN TO YOUR ADVENTURE!</h1>
  <form action="signup.html" className="sign-in-form">
    <div className="form-group">
      <label htmlFor="email">Sign in with email address:</label>
      <input type="email" id="email" name="email" placeholder="Your email" />
    </div>
    <div className="form-group">
      <label htmlFor="password">Password:</label>
      <input type="password" id="password" name="password" placeholder="Password" />
    </div>
    <button type="submit" className="btn-login">Login</button>
  </form>
  <div className="sign-up"> 
    <a href="signup.html" className="btn-sign-up"> Sign up</a> 
  </div>
  <p className="terms">By registering you accept our <a href="#">Terms and Conditions</a>.</p>
</div>

    
    </>
  )
}

export default Login