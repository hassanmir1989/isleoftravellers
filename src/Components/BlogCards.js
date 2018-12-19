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

const BlogCard = props => {
  return (
    <Card>
      <CardBody>
        <CardTitle>{props.blogName}</CardTitle>
        <CardSubtitle>{props.blogLocation}</CardSubtitle>
        <CardText>{props.blogDescription}</CardText>
        <Button
          onClick={() => {
            props.onClickViewBlog();
          }}
          outline
          color="success"
        >
          View More
        </Button>{" "}
      </CardBody>
    </Card>
  );
};

export default BlogCard;
