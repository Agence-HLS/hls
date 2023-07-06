const DarkMode = () => {
  let burgerBars = document.querySelectorAll(".bm-burger-bars");
  let burgerCross = document.querySelectorAll(".bm-cross");
  let burgerMenu = document.querySelectorAll(".bm-menu");
  let burgerMorph = document.querySelectorAll(".bm-morph-shape");
  let burgerText = document.querySelectorAll(".bm-text");
  if (!document.body.classList.contains("dark")) {
    document.body.classList.add("dark");
    burgerBars.forEach((bar) => {
      bar.style.background = "#8C52FF";
    });
    burgerCross.forEach((cross) => {
      cross.style.background = "#8C52FF";
    });
    burgerMenu.forEach((menu) => {
      menu.style.background = "#FF66C4";
    });
    burgerMorph.forEach((morph) => {
      morph.style.background = "#FF66C4";
    });
    burgerText.forEach((item) => {
      item.style.background = "#FF66C4";
    });
  } else {
    document.body.classList.remove("dark");
    burgerBars.forEach((bar) => {
      bar.style.background = "#0097B2";
    });
    burgerCross.forEach((cross) => {
      cross.style.background = "#0097B2";
    });
    burgerMenu.forEach((menu) => {
      menu.style.background = "#0097B2";
    });
    burgerMorph.forEach((morph) => {
      morph.style.background = "#99ecef";
    });
    burgerText.forEach((item) => {
      item.style.background = "#99ecef";
    });
  }
};

export default DarkMode;
