import React, { Component } from "react";
import logo from "./yourphotohere.png";
import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      avatarurl: logo
    };
  }
  takepicture(e) {
    if (window.cordova) {
      navigator.camera.getPicture(avatarurl => {
        this.setState({
          avatarurl
        });
        console.log(this.state);
      }, console.log);
    } else console.log("please run the cordova project");
  }
  render() {
    return (
      <div>
        <img
          id="avatar"
          alt="test"
          src={this.state.avatarurl}
          onClick={e => {
            this.takepicture(e);
            //As for normal html input you would do the following
            //this.refs.fileUploader.click();
          }}
        />
        <input
          type="file"
          name="avatar"
          ref="fileUploader"
          style={{ display: "none" }}
          accept="image/*;capture=camera"
          capture
        />
      </div>
    );
  }
}

export default App;
