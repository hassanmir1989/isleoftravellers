import React, { Component } from "react";
import firebase from "firebase";
import FileUploader from "react-firebase-file-uploader";

class Playground extends Component {
  constructor() {
    super();
    this.handleUploadSuccess = this.handleUploadSuccess.bind(this);
    this.handleUploadError = this.handleUploadError.bind(this);
    this.state = {
      avatarURL: ""
    };
  }

  handleUploadError(error) {
    console.log(error);
  }

  handleUploadSuccess = filename => {
    console.log(filename);
    firebase
      .storage()
      .ref("blogImages")
      .child("seemsToWorks.jpg")
      .getDownloadURL()
      .then(url => this.setState({ avatarURL: url }));
  };

  render() {
    return (
      <div>
        <form>
          <img src={this.state.avatarURL} />
          <FileUploader
            accept="images/*"
            name="avatar"
            randomizeFilename
            storageRef={firebase.storage().ref("blogImages")}
            onUploadSuccess={this.handleUploadSuccess}
            onUploadError={this.handleUploadError}
          />
        </form>
      </div>
    );
  }
}

export default Playground;
