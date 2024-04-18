import React from 'react'
import Nav from '../components/Nav'
import './Home.css';

const Home = () => {
  return (
    <>
    <div>
  {/* Sidebar */}
  <div className="sidebar">
    <ul>
      <li><a href="#home">Home</a></li>
      <li><a href="#music">Subscriptions</a></li>
      <li><a href="#design">Music</a></li>
      <li><a href="#streaming">Streaming</a></li><br />
      <ul>
        <li><a href="./profile.html" style={{color: '#FFE789'}}>MySpace</a></li>
        <li><a href="#library">Library</a></li>
        <li><a href="./watchlater.html">Watch Later</a></li>
      </ul>
    </ul>
  </div>
  <main>
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
    {/* content */}
    <br />
    <div className="row">
      <div className="responsive col-md-4">
        <div className="gallery">
          <a target="_blank" href="img_5terre.jpg">
            <img src="https://csncollision.com/wp-content/uploads/2019/10/placeholder-circle.png" alt="Cinque Terre" width={600} height={400} />
          </a>
          <div className="desc">Chris Brown Ten toes 11:11</div>
        </div>
      </div>
      <div className="responsive col-md-4">
        <div className="gallery">
          <a target="_blank" href="img_forest.jpg">
            <img src="https://csncollision.com/wp-content/uploads/2019/10/placeholder-circle.png" alt="Forest" width={600} height={400} />
          </a>
          <div className="desc">Add a description of the image here</div>
        </div>
      </div>
      <div className="responsive col-md-4">
        <div className="gallery">
          <a target="_blank" href="img_lights.jpg">
            <img src="https://csncollision.com/wp-content/uploads/2019/10/placeholder-circle.png" alt="Northern Lights" width={600} height={400} />
          </a>
          <div className="desc">Add a description of the image here</div>
        </div>
      </div>
      <div className="responsive col-md-4">
        <div className="gallery">
          <a target="_blank" href="img_lights.jpg">
            <img src="https://csncollision.com/wp-content/uploads/2019/10/placeholder-circle.png" alt="Northern Lights" width={600} height={400} />
          </a>
          <div className="desc">Add a description of the image here</div>
        </div>
      </div>
      <div className="responsive col-md-4">
        <div className="gallery">
          <a target="_blank" href="img_lights.jpg">
            <img src="https://csncollision.com/wp-content/uploads/2019/10/placeholder-circle.png" alt="Northern Lights" width={600} height={400} />
          </a>
          <div className="desc">Add a description of the image here</div>
        </div>
      </div>
      <div className="responsive col-md-4">
        <div className="gallery">
          <a target="_blank" href="img_mountains.jpg">
            <img src="https://csncollision.com/wp-content/uploads/2019/10/placeholder-circle.png" alt="Mountains" width={600} height={400} />
          </a>
          <div className="desc">Add a description of the image here</div>
        </div>
      </div>
    </div>
  </main>
</div>

    </>
  )
}

export default Home