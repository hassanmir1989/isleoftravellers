import React from "react";
import {
  Jumbotron,
  Button,
  Form,
  FormGroup,
  Input,
  Label,
  Alert
} from "reactstrap";

class BlogUpdate extends React.Component {
  constructor(props) {
    super(props);

    this.onFormSubmit = this.onFormSubmit.bind(this);
    this.onChangeBlogName = this.onChangeBlogName.bind(this);
    this.onChangeBlogDescription = this.onChangeBlogDescription.bind(this);
    this.onChangeBlogLocation = this.onChangeBlogLocation.bind(this);
    this.state = {
      blogName: props.blogName ? props.blogName : "",
      blogDescription: props.blogDescription ? props.blogDescription : "",
      blogLocation: props.blogLocation ? props.blogLocation : "",
      blogImage: props.blogImage ? props.blogLocation : "",
      error: ""
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
  render() {
    return (
      <div className="mt-3 container">
        {this.state.error && <Alert color="danger">{this.state.error}</Alert>}
        <Jumbotron>
          <h1 className="display-3 text-center">Blog Update</h1>
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

            <Button color="primary">Add</Button>
          </Form>
        </Jumbotron>
      </div>
    );
  }
}

export default BlogUpdate;
