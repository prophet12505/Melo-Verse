import React from 'react'
import './Signup.css';
const Signup = () => {
  return (
    <>
   <form action="/action_page.php" style={{border: '1px solid #ccc'}}>
  <div className="container">
    <a href="javascript:history.back()" className="return-item"> 
      <i className="fas fa-arrow-left " /> Return
    </a>
    <h1>Sign Up</h1>
    <p>Please fill in this form to create an account.</p>
    <hr />
    <label htmlFor="email"><b>Email</b></label>
    <input type="text" placeholder="Enter Email" name="email" required />
    <label htmlFor="psw"><b>Password</b></label>
    <input type="password" placeholder="Enter Password" name="psw" required />
    <label htmlFor="psw-repeat"><b>Repeat Password</b></label>
    <input type="password" placeholder="Repeat Password" name="psw-repeat" required />
    <label>
      <input type="checkbox" defaultChecked="checked" name="remember" style={{marginBottom: 15}} /> Remember me
    </label>
    <p>By creating an account you agree to our <a href="#" style={{color: 'dodgerblue'}}>Terms &amp; Privacy</a>.</p>
    <div className="clearfix">
      <button type="button" className="cancelbtn">Cancel</button>
      <button type="submit" className="signupbtn">Sign Up</button>
    </div>
  </div>
</form>

    </>
  )
}

export default Signup