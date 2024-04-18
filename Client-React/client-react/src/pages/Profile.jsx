import React from 'react'

const Profile = () => {
  return (
    <div id="profilebody">
  <div id="profilepage">
    <div id="profileleftsidebar">
      <ul>
        <li> <a href="index.html"> Home </a> </li>
        <li> <a href="upload.html"> Upload </a> </li>
      </ul>
    </div>
    <div id="mainprofile">
      <div id="mainprofile_userinfo">
        <div id="userinfo_profilepic"> </div>
        <div id="userinfo_text">
          <h1> Name </h1>
          <h2> @username </h2>
          <a href="upload.html"> <button id="managevideos"> Manage Videos </button> </a>
        </div>
      </div>
      <h2 id="profilelabels"> Your Videos </h2>
      <div id="mainprofile_yourvideos">
        <div id="yourvideo1" className="yourvideos">
          <div id="videowrap">
            <div id="thumbnail"> </div>
            <h2 id="profile_videotitle"> Video Title </h2>
          </div>
        </div>
        <div id="yourvideo2" className="yourvideos">
          <div id="videowrap">
            <div id="thumbnail"> </div>
            <h2 id="profile_videotitle"> Video Title </h2>
          </div>
        </div>
        <div id="yourvideo3" className="yourvideos">
          <div id="videowrap">
            <div id="thumbnail"> </div>
            <h2 id="profile_videotitle"> Video Title </h2>
          </div>
        </div>
        <div id="yourvideo4" className="yourvideos">
          <div id="videowrap">
            <div id="thumbnail"> </div>
            <h2 id="profile_videotitle"> Video Title </h2>
          </div>
        </div>
        {/* this is probably temporary, idk how we'd functionally go about displaying the videos 
          and this of course should only appear when someone actually has videos*/}
      </div>
      <h2 id="profilelabels"> Subscriptions </h2>
      <div id="mainprofile_subscriptions">
        {/* profile pics + names of accounts youre subscribed to */}
      </div>
    </div>
    <div id="profilerightsidebar">
      {/* we need something to fill space on the right. maybe notifications? */}
    </div>
  </div>
</div>

  )
}

export default Profile