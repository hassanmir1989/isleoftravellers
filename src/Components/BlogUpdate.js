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
  render() {
    return (
      <div className="mt-3 container">
        <Jumbotron>
          <h1 className="display-3 text-center">
            Blog Update
          </h1>
          <Form>
            <FormGroup>
              <Label for="exampleEmail">
                Blog Name
              </Label>
              <Input
                type="text"
                name="blogName"
                id="blogName"
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
