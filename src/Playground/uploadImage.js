import React, { Component } from "react";
import firebase from "firebase";
import FileUploader from "react-firebase-file-uploader";

// class Playground extends Component {
//   constructor() {
//     super();
//     this.handleUploadSuccess = this.handleUploadSuccess.bind(this);
//     this.handleUploadError = this.handleUploadError.bind(this);
//     this.state = {
//       avatarURL: ""
//     };
//   }

//   handleUploadError(error) {
//     console.log(error);
//   }

//   handleUploadSuccess = filename => {
//     console.log(filename);
//     firebase
//       .storage()
//       .ref("blogImages")
//       .child("seemsToWorks.jpg")
//       .getDownloadURL()
//       .then(url => this.setState({ avatarURL: url }));
//   };

//   render() {
//     return (
//       <div>
//         <form>
//           <img src={this.state.avatarURL} />
//           <FileUploader
//             accept="images/*"
//             name="avatar"
//             randomizeFilename
//             storageRef={firebase.storage().ref("blogImages")}
//             onUploadSuccess={this.handleUploadSuccess}
//             onUploadError={this.handleUploadError}
//           />
//         </form>
//       </div>
//     );
//   }
// }
var provider = new firebase.auth.FacebookAuthProvider();

class Playground extends React.Component {
  constructor() {
    super();
    this.facebookSignin = this.facebookSignin.bind(this);
    this.facebookSignout = this.facebookSignout.bind(this);
  }

  facebookSignin() {
    firebase
      .auth()
      .signInWithPopup(provider)

      .then(function(result) {
        var token = result.credential.accessToken;
        var user = result.user;

        console.log(token);
        console.log(user);
      })
      .catch(function(error) {
        console.log(error.code);
        console.log(error.message);
      });
  }

  facebookSignout() {
    firebase
      .auth()
      .signOut()

      .then(
        function() {
          console.log("Signout successful!");
        },
        function(error) {
          console.log("Signout failed");
        }
      );
  }
  render() {
    return (
      <div>
        <button onClick={this.facebookSignin}>Facebook Signin</button>
        <button onClick={this.facebookSignout}>Facebook Signout</button>
      </div>
    );
  }
}

export default Playground;
