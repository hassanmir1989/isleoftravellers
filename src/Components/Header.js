import React from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem
} from "reactstrap";
import { NavLink } from "react-router-dom";

class Header extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  render() {
    return (
      <div>
        <Navbar
          className="header"
          color="light"
          light
          expand="md">
          <div className="container">
            <NavbarBrand
              className="font-italic"
              to="/">
              <i className="fas fa-globe-asia" />{" "}
              Isle of Traveller's{" "}
            </NavbarBrand>
            <NavbarToggler onClick={this.toggle} />

            <Collapse
              isOpen={this.state.isOpen}
              navbar>
              <Nav className="ml-auto" navbar>
                <NavItem className="navitem">
                  <NavLink
                    className="headerLink"
                    to="/">
                    Adventures
                  </NavLink>
                </NavItem>
                <NavItem className="navitem">
                  <NavLink
                    className="headerLink"
                    to="/blog">
                    Blog
                  </NavLink>
                </NavItem>
                <NavItem className="navitem">
                  <NavLink
                    className="headerLink"
                    to="/contactus">
                    Contact Us
                  </NavLink>
                </NavItem>
                <NavItem className="navitem">
                  <NavLink
                    className="headerLink"
                    to="/admin">
                    Admin
                  </NavLink>
                </NavItem>
              </Nav>
            </Collapse>
          </div>
        </Navbar>
      </div>
    );
  }
}

export default Header;
