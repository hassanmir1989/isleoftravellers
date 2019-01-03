import React from "react";
import {
  Card,
  CardImg,
  CardTitle,
  CardSubtitle,
  CardBody,
  CardText,
  Button
} from "reactstrap";
import { connect } from "react-redux";
import { startRemoveBlog } from "../Actions/blogActions";
import SingleBlog from "../Components/SingleBlog";
const BlogCard = props => {
  return (
    <Card className="text-center">
      <CardBody>
        <div className="img-thumbnail">
          <img width="100%" src={props.blogImageURL} />
        </div>
        <CardTitle>{props.blogName}</CardTitle>
        <CardSubtitle>{props.blogLocation}</CardSubtitle>
        <CardText>{props.blogDescription.substr(0, 30)}...</CardText>
        <SingleBlog {...props} buttonLabel="View More" />
        <Button
          className="mt-2"
          size="sm"
          onClick={() => {
            props.onClickEdit();
          }}
          color="warning"
        >
          Edit
        </Button>{" "}
        <Button
          className="mt-2"
          size="sm"
          onClick={() => {
            props.dispatch(startRemoveBlog(props.blogID));
          }}
          color="danger"
        >
          Delete
        </Button>{" "}
      </CardBody>
    </Card>
  );
};

export default connect()(BlogCard);
