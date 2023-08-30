const ImageChange =()=>{
    let backgroundImages = [
        "/aurora.jpg",
        "/beach.jpg",
        "/iceland.jpg",
        "/italy.jpg",
        "/nature.jpg",
        "/mountains.jpg"
      ];
      
      function changeBackground() {
        let random = Math.floor(Math.random() * backgroundImages.length);
      
        document.body.style.backgroundImage = "url(" + backgroundImages[random] + ")";
        document.body.style.transition = "2s";
      }
      
      setInterval(changeBackground, 2500);

  
}
export default ImageChange