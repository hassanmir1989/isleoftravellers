import React from "react";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
import moment from "moment";

class SingleBlog extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false
    };

    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    this.setState({
      modal: !this.state.modal
    });
  }

  render() {
    return (
      <div>
        <Button size="sm" outline color="success" block onClick={this.toggle}>
          {this.props.buttonLabel}
        </Button>
        <Modal
          isOpen={this.state.modal}
          toggle={this.toggle}
          className={this.props.className}
        >
          <ModalHeader toggle={this.toggle}>
            {this.props.blogName} - {this.props.blogLocation}{" "}
          </ModalHeader>

          <img
            width="100%"
            className="img-responsive"
            src={this.props.blogImageURL}
          />

          <ModalBody>
            {this.props.blogDescription}
            <br />
            <small>
              Posted On :{" "}
              {moment(this.props.blogUploadTime).format("DD MMM YY HH:mm")}
            </small>
          </ModalBody>

          <ModalFooter>
            <Button color="primary" onClick={this.toggle}>
              Do Something
            </Button>{" "}
            <Button color="secondary" onClick={this.toggle}>
              Cancel
            </Button>
          </ModalFooter>
        </Modal>
      </div>
    );
  }
}

export default SingleBlog;
