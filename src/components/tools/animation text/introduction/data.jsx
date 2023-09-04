"use client";

import { instanceOf } from "prop-types";
import { TypeAnimation } from "react-type-animation";

const TextAnimate = () => {
  return (
    <div className="">
      <TypeAnimation
        sequence={[
          "Deep 404 accompagne des entreprises de toutes tailles,",
          100,
          "Deep 404 accompagne des entreprises de toutes tailles, de la start-up au grand groupe international, ",
          100,
          "Deep 404 accompagne des entreprises de toutes tailles, de la start-up au grand groupe international, dans la mise en place de la création de leur identité visuelle, ",
          100,
          "Deep 404 accompagne des entreprises de toutes tailles, de la start-up au grand groupe international, dans la mise en place de la création de leur identité visuelle, la création d'une base de données jusqu’aux supports de communication nécessaires : print & web.",
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
