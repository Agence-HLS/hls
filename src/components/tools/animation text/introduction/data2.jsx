"use client";

import { TypeAnimation } from "react-type-animation";

const IntroAnimation = () => {
  return (
    <div className="grid grid-cols-1 my-5 lg:mx-10">
      <div className="lg:text-start lg:my-5 text-center">
        <TypeAnimation
          sequence={["site web responsive,", 1000]}
          wrapper="span"
          speed={50}
          style={{ display: "inline-block" }}
          repeat={Infinity}
        />{" "}
      </div>{" "}
      <div className="lg:text-end lg:my-5 text-center">
        <TypeAnimation
          sequence={["dynamique,", 1000]}
          wrapper="span"
          speed={50}
          style={{ display: "inline-block" }}
          repeat={Infinity}
          className=""
        />{" "}
      </div>
      <div className="lg:text-start lg:my-5 text-center">
        <TypeAnimation
          sequence={["adapté a tout type d'écran,", 1000]}
          wrapper="span"
          speed={50}
          style={{ display: "inline-block" }}
          repeat={Infinity}
          className=""
        />{" "}
      </div>{" "}
      <div className="lg:text-end lg:my-5 text-center">
        <TypeAnimation
          sequence={["contenu adapté,", 1000]}
          wrapper="span"
          speed={50}
          style={{ display: "inline-block" }}
          repeat={Infinity}
          className=""
        />{" "}
      </div>
    </div>
  );
};
{
  /* <h1 className="text-start my-5">site web responsive </h1>
                <h1 className="text-end my-5">dynamique  </h1>
                <h1 className="text-start my-5">adapté a tout type d'écran</h1>
                <h1 className="text-end my-5">contenu adapté</h1>
                <h1 className="text-start my-5">site web responsive </h1>*/
}

export default IntroAnimation;
//<LinearTextGradient angle={45} colors={["#fafa6e", "#39b48e"]}></LinearTextGradient>
