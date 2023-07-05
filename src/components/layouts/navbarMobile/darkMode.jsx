const DarkMode = () => {
  let burgerBars = document.querySelectorAll(".bm-burger-bars");

  if (!document.body.classList.contains("dark")) {
    document.body.classList.add("dark");
    burgerBars.forEach((bar) => {
      bar.style.background = "red";
    });
  } else {
    document.body.classList.remove("dark");
    burgerBars.forEach((bar) => {
      bar.style.background = "#17DDFF";
    });
  }
};

export default DarkMode;
