import React from "react";
import {
  Jumbotron,
  Button,
  Form,
  FormGroup,
  Input,
  Label
} from "reactstrap";

class BlogUpdate extends React.Component {
  constructor(props) {
    super(props);
    this.onFormSubmit = this.onFormSubmit.bind(
      this
    );
    this.state = {
      blogName: null,
      blogDescription: null,
      blogLocation: null,
      blogImage: null
    };
  }

  onFormSubmit(e) {
    e.preventDefault();
    const blogName = e.target.blogName.value;
    const blogDescription =
      e.target.blogDescription.value;
    const blogLocation =
      e.target.blogLocation.value;
    this.setState(() => ({
      blogName,
      blogDescription,
      blogLocation
    }));
  }
  render() {
    return (
      <div className="mt-3 container">
        <Jumbotron>
          <h1 className="display-3 text-center">
            Blog Update
          </h1>
          <Form onSubmit={this.onFormSubmit}>
            <FormGroup>
              <Label for="exampleEmail">
                Blog Name
              </Label>
              <Input
                type="text"
                name="blogname"
                id="blogname"
                placeholder="Enter Blog's Name"
              />
            </FormGroup>
            <FormGroup>
              <Label for="exampleEmail">
                Blog Description
              </Label>
              <Input
                type="textarea"
                name="blogDescription"
                id="blogDescription"
                placeholder="Enter Blog Description"
              />
            </FormGroup>
            <FormGroup>
              <Label for="exampleEmail">
                Blog's Location
              </Label>
              <Input
                type="text"
                name="blogLocation"
                id="blogLocation"
                placeholder="Enter Location"
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
