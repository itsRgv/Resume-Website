import React from "react";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import TwitterIcon from "@mui/icons-material/Twitter";
import GitHubIcon from "@mui/icons-material/GitHub";

function App() {
  return (
    <div>
      <div id="info">
        <div id="myImage">
          <img src="./myImage.jpeg" alt="raghav" />
        </div>
        <div id="details">
          <h1>Raghav Maheshwari</h1>
          <h2>Web Developer</h2>
        </div>
        <div id="socialMedia">
          <a href="linkedIn" id="linkedIn">
            <LinkedInIcon style={{ color: "white" }} />
          </a>
          <a href="github" id="git">
            <GitHubIcon style={{ color: "white" }} />
          </a>
          <a href="twitter" id="twitter">
            <TwitterIcon style={{ color: "white" }} />
          </a>
        </div>
      </div>
      <div id="outerContainer"></div>
    </div>
  );
}
export default App;
