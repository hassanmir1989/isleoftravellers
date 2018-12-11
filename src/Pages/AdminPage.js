import React from "react";
import Header from "../Components/Header";
import BlogUpdate from "../Components/BlogUpdate";
class AdminPage extends React.Component {
  constructor(props) {
    super(props);
    this.onFormSubmit = this.onFormSubmit.bind(
      this
    );
  }

  onFormSubmit(e) {
    e.preventDefault();
    console.log(e.target.files[0]);
  }
  render() {
    return (
      <div>
        <Header />
        <BlogUpdate />
      </div>
    );
  }
}

export default AdminPage;
