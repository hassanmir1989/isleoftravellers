import React from "react";
import Header from "../Components/Header";
import MainPageCarousel from "../Components/MainPageCarousel";
class Adventures extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <div className="mx-auto col-md-10 col-sm-12">
          <MainPageCarousel className="text-center" />
        </div>
      </div>
    );
  }
}

export default Adventures;
