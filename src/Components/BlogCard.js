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
import { NavLink } from "react-router-dom";
import { connect } from "react-redux";
import { startRemoveBlog } from "../Actions/blogActions";

const BlogCard = props => {
  return (
    <Card className="text-center">
      <CardBody>
        <img width="30%" className="img-thumbnail" src={props.blogImageURL} />
        <CardTitle>{props.blogName}</CardTitle>
        <CardSubtitle>{props.blogLocation}</CardSubtitle>
        <CardText>{props.blogDescription}</CardText>
        <Button
          className="p-0"
          onClick={() => {
            props.onClickViewBlog();
          }}
          color="link"
        >
          View More
        </Button>{" "}
        <Button
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
