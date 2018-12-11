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
      blogname: null,
      blogdescription: null,
      bloglocation: null,
      blogimage: null
    };
  }

  onFormSubmit(e) {
    e.preventDefault();
    const blogname = e.target.blogname.value;
    const blogdescription =
      e.target.blogdescription.value;
    const bloglocation =
      e.target.bloglocation.value;
    this.setState(() => ({
      blogname,
      blogdescription,
      bloglocation
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
                name="blogdescription"
                id="blogdescription"
                placeholder="Enter Blog Description"
              />
            </FormGroup>
            <FormGroup>
              <Label for="exampleEmail">
                Blog's Location
              </Label>
              <Input
                type="text"
                name="bloglocation"
                id="bloglocation"
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
