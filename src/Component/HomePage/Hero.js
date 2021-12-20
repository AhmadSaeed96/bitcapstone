import React from "react";
import { Carousel } from "react-bootstrap";

export default function Hero() {
  return (
    <div id="hero">
      <Carousel variant="dark">
        <Carousel.Item className="carouselitem" interval={3500}>
          <img
            className="d-block heroimg"
            src="https://images.unsplash.com/photo-1593640495390-1ff7c3f60e9b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2232&q=80"
            alt="First slide"
          />
          <Carousel.Caption>
            <h2 style={{ color: `#e0e0e0` }}>ALIENWARE</h2>
            <h1 style={{ color: `#e0e0e0` }}>Build Your Dream PC.</h1>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item className="carouselitem" interval={3500}>
          <img
            className="d-block "
            src="https://geekbeat.tv/wp-content/uploads/2014/06/Henge-Docks-Vertical-Dock-Featured.jpg"
            alt="Second slide"
          />
          <Carousel.Caption>
            <h2>iMac</h2>
            <h1>Check HOT offers on iMac.</h1>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item className="carouselitem" interval={3500}>
          <img
            className="d-block "
            src="https://images.unsplash.com/photo-1560671563-7a75c5838af3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1674&q=80"
            alt="Third slide"
          />
          <Carousel.Caption className="carouselcap">
            <h2>Samsung</h2>
            <h1>Check Samsung Ultra Wide Curved Monitors</h1>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
}
