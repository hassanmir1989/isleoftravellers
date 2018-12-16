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
        <CardSubtitle>
          {props.blogLocation}
        </CardSubtitle>
        <CardText>{props.blogDescription}</CardText>
        <Button outline color="success">
          <NavLink to="/editblog">
            View More
          </NavLink>
        </Button>{" "}
      </CardBody>
    </Card>
  );
};

export default BlogCard;
