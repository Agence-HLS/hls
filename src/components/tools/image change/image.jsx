import { Component } from "react";

const ImageChange = () => {
  let backgroundImages = [
    "/aurora.jpg",
    "/beach.jpg",
    "/iceland.jpg",
    "/italy.jpg",
    "/nature.jpg",
    "/mountains.jpg",
  ];

  function changeBackground() {
    let random = Math.floor(Math.random() * backgroundImages.length);
    
    document.body.style.backgroundImage =
      "url(" + backgroundImages[random] + ")";
    document.body.style.transition = "5s";
  }

  setInterval(changeBackground, 10000);
  return(
    <div className="glass bg-url['/italy.jpg']">.</div>
  )
};

export default ImageChange;
