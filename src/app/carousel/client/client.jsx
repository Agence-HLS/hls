import React, { Component } from "react";
import ReactDOM from "react-dom";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import data  from "./data.json";
import Cardclient from "@/components/tools/cardclient";

class ClientsCarousel extends Component {
  render() {
    return (
      <Carousel>
         {data.map((yencli) => {
            return (
              <div className="">
                <Cardclient img={yencli.img} />
              </div>
            );
          })}
      </Carousel>
    );
  }
}

//ReactDOM.render(<DemoCarousel />, document.querySelector(".demo-carousel"));

export default ClientsCarousel;
