import React from "react";
import {
  Jumbotron,
  Button,
  Form,
  FormGroup,
  Input,
  Label,
  Alert,
  Progress
} from "reactstrap";
import FileUploader from "react-firebase-file-uploader";
import * as firebase from "firebase/app";
import moment from "moment";

class BlogUpdate extends React.Component {
  constructor(props) {
    super(props);

    this.onFormSubmit = this.onFormSubmit.bind(this);
    this.onChangeBlogName = this.onChangeBlogName.bind(this);
    this.onChangeBlogDescription = this.onChangeBlogDescription.bind(this);
    this.onChangeBlogLocation = this.onChangeBlogLocation.bind(this);
    this.handleProgress = this.handleProgress.bind(this);
    this.state = {
      blogName: props.blogName ? props.blogName : "",
      blogDescription: props.blogDescription ? props.blogDescription : "",
      blogLocation: props.blogLocation ? props.blogLocation : "",
      blogImageURL: props.blogImageURL ? props.blogImageURL : false,
      blogImageFilename: props.blogImageFilename ? props.blogImageFilename : "",
      error: "",
      progress: 0,
      blogUploadTime: props.blogUploadTime
        ? props.blogUploadTime
        : moment().valueOf()
    };
  }

  onFormSubmit(e) {
    e.preventDefault();
    const blogName = this.state.blogName;
    const blogDescription = this.state.blogDescription;
    const blogLocation = this.state.blogLocation;

    if (blogName && blogDescription && blogLocation) {
      this.props.onSubmitBlogUpdate(this.state);
      this.setState(() => ({
        error: ""
      }));
    } else {
      this.setState(() => ({
        error: "Please enter all details to upload blog"
      }));
    }
  }

  onChangeBlogName(e) {
    const blogName = e.target.value;
    this.setState(() => ({
      blogName
    }));
  }
  onChangeBlogDescription(e) {
    const blogDescription = e.target.value;
    this.setState(() => ({
      blogDescription
    }));
  }

  onChangeBlogLocation(e) {
    const blogLocation = e.target.value;
    this.setState(() => ({
      blogLocation
    }));
  }

  handleProgress(progress) {
    this.setState({ progress });
  }

  handleUploadSuccess = blogImageFilename => {
    if (this.state.blogImageFilename) {
      firebase
        .storage()
        .ref(`blogImages/${this.state.blogImageFilename}`)
        .delete()
        .then(() => {
          firebase
            .storage()
            .ref("blogImages")
            .child(blogImageFilename)
            .getDownloadURL()
            .then(blogImageURL => {
              this.setState(prevState => ({
                blogImageURL,
                blogImageFilename,
                uploadButton: !prevState.uploadButton
              }));
            });
        });
    } else {
      firebase
        .storage()
        .ref("blogImages")
        .child(blogImageFilename)
        .getDownloadURL()
        .then(blogImageURL => {
          this.setState(prevState => ({
            blogImageURL,
            blogImageFilename,
            uploadButton: !prevState.uploadButton
          }));
        });
    }
  };

  render() {
    return (
      <div className="mt-1 container">
        {this.state.error && <Alert color="danger">{this.state.error}</Alert>}

        <small>
          <strong>{this.props.pageDateCaption} : </strong>
          {moment(this.state.blogUploadTime).format("DD MMM YY")}
        </small>
        <Jumbotron>
          <h2 className="display-6 text-center">Blog Update</h2>

          <Form onSubmit={this.onFormSubmit}>
            <FormGroup>
              <Label for="exampleEmail">Blog Name</Label>
              <Input
                type="text"
                name="blogname"
                id="blogname"
                placeholder="Enter Blog's Name"
                value={this.state.blogName}
                onChange={this.onChangeBlogName}
              />
            </FormGroup>
            <FormGroup>
              <Label for="exampleEmail">Blog Description</Label>
              <Input
                type="textarea"
                name="blogDescription"
                id="blogDescription"
                placeholder="Enter Blog Description"
                value={this.state.blogDescription}
                onChange={this.onChangeBlogDescription}
              />
            </FormGroup>
            <FormGroup>
              <Label for="exampleEmail">Blog's Location</Label>
              <Input
                type="text"
                name="blogLocation"
                id="blogLocation"
                placeholder="Enter Location"
                value={this.state.blogLocation}
                onChange={this.onChangeBlogLocation}
              />
            </FormGroup>
            {this.state.blogImageURL ? (
              <div className="text-center">
                <img width="20%" src={this.state.blogImageURL} />
                <br />
              </div>
            ) : (
              <p>No Images Uploaded</p>
            )}
            <br />
            <Progress style={{ color: "black" }} value={this.state.progress}>
              {this.state.progress}%
            </Progress>

            <br />
            <FileUploader
              accept="images/*"
              name="avatar"
              randomizeFilename
              storageRef={firebase.storage().ref("blogImages")}
              onUploadSuccess={this.handleUploadSuccess}
              onProgress={this.handleProgress}
            />
            <br />
            <Button
              className="mt-3"
              color={
                this.state.blogLocation &&
                this.state.blogName &&
                this.state.blogDescription &&
                "success"
              }
              disabled={
                (!this.state.blogLocation &&
                  !this.state.blogName &&
                  !this.state.blogDescription) ||
                !this.state.blogImageURL
              }
            >
              {this.state.blogLocation &&
              this.state.blogName &&
              this.state.blogDescription &&
              this.state.blogImageURL
                ? "OKAY TO UPLOAD"
                : "Please Complete everything to upload"}
            </Button>
          </Form>
        </Jumbotron>
      </div>
    );
  }
}

export default BlogUpdate;
