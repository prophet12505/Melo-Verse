import React from "react";
import "./Upload.css";
const Upload = () => {
  return (
    <div id="uploadbody">
      <div id="uploadpage">
        <div id="uploadstep">
          <div id="uploadbox">
            <h3> Drag and drop your video here. </h3>
          </div>
          <div id="orbrowsefiles">
            <div id="uploadbuttons">
              <div className="sides"> </div>
              <button id="browsefiles">
                <h2> Browse Files </h2>
              </button>
              <div className="sides">
                <button id="upload_nextstep1">
                  <h2 id="uploadproceedbtn">&gt;</h2>
                </button>
              </div>
            </div>
          </div>
        </div>
        <div id="detailsstep" hidden>
          {/* this step will be hidden, unhidden when user clicks to proceed. 
       if that doesnt work we can move it to its own page */}
          <div id="uploadbox">
            <div id="videodetailsform">
              <div id="details_top">
                <div id="details_thumbnail"> </div>
                <input
                  type="text"
                  placeholder="Video Title"
                  name="Title"
                  required
                />
              </div>
              <div id="description">
                <input
                  type="text"
                  placeholder="Description"
                  name="Description"
                  required
                />
              </div>
            </div>
          </div>
          <div id="orbrowsefiles">
            <div id="uploadbuttons">
              <div className="sides">
                <button id="upload_prevstep">
                  <h2>&lt; </h2>
                </button>
              </div>
              <h2 id="proceed"> Proceed to upload your video. </h2>
              <div className="sides">
                <button id="upload_nextstep2">
                  <h2> &gt; </h2>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Upload;
