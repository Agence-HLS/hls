"use client";

import React, { Component } from "react";
import ReactDOM from "react-dom";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import data from "./data.json";
import Cardhome from "@/components/tools/cardhome";

class HomeCarousel extends Component {
  render() {
    return (
      <Carousel>
        {data.map((yenyen, key) => {
          return (
            <div key={key}>
              <Cardhome img={yenyen.img} />
            </div>
          );
        })}
      </Carousel>
    );
  }
}

//ReactDOM.render(<DemoCarousel />, document.querySelector(".demo-carousel"));

export default HomeCarousel;
