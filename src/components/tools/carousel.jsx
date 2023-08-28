import React, { Component } from 'react';
import ReactDOM, { render } from 'react-dom';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';



const Carousel = render

class DemoCarousel extends Component {
    render() {
        return (
            <Carousel>
                <div>
                    <img src="/next.svg" />
                    <p className="legend">Online Formation</p>
                </div>
                <div>
                    <img src="assets/2.jpeg" />
                    <p className="legend">Legend 2</p>
                </div>
                <div>
                    <img src="assets/3.jpeg" />
                    <p className="legend">Legend 3</p>
                </div>
            </Carousel>
        );
    }
};
export default render
ReactDOM.render(<DemoCarousel />, document.querySelector('.demo-carousel'));

render()

