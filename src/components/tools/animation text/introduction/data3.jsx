"use client";

import { instanceOf } from "prop-types";
import { TypeAnimation } from "react-type-animation";

const TextAnimate = () => {
  return (
    <div className="">
      <TypeAnimation
        sequence={[
          "Bienvenue sur DEEP 404 notre projet",
          100,
          "Bienvenue sur DEEP 404 notre projet agence web consus par une équipe ",
          100,
          "Bienvenue sur DEEP 404 notre projet agence web consus par une équipe trois jeunes en pleine formation",
          100,
        ]}
        style={{}}
        repeat={Infinity}
      />
    </div>
  );
};

export default TextAnimate;
//<LinearTextGradient angle={45} colors={["#fafa6e", "#39b48e"]}></LinearTextGradient>
