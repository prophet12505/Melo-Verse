import React from 'react'
import './Nav.css'
const Nav = () => {
  return (
    <div className="row">
  {/* Navbar */}
  <nav className="navbar navbar-expand-lg navbar-dark col-md-12">
    {/* Navbar content */}
    <div className="container">
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon" />
      </button>
      <div className="collapse navbar-collapse" id="navbarText">
        <ul className="navbar-nav ml-auto">
          <li className="nav-item">
            <a className="nav-link" href="#foryou" style={{color: '#FFE789'}}>For you</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#trending" style={{color: '#FFE789'}}>Trending</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#music" style={{color: '#FFE789'}}>Music</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#design" style={{color: '#FFE789'}}>Design</a>
          </li>
          <li><a className="nav-link" href="upload.html" style={{color: '#fdfcf9'}}>Upload</a></li>
          <li><a className="nav-link" href="login.html" style={{color: '#fdfcf9'}}> Login</a>
          </li>
          <li>
            <input type="text" placeholder="Search.." />
          </li>
        </ul>
      </div>
    </div>
  </nav>
</div>

  )
}

export default Nav