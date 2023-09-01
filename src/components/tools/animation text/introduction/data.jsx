"use client";

import { TypeAnimation } from "react-type-animation";

const IntroAnimation = () => {
  return (
    <div className="grid grid-cols-1 ">
      <div className="text-start my-5">
        <TypeAnimation
          sequence={["site web responsive", 100]}
          style={{}}
          repeat={1}
        />{" "}
      </div>{" "}
      <div className="text-end my-5">
        <TypeAnimation
          sequence={["dynamique", 100]}
          style={{ fontSize: "1em" }}
          repeat={1}
          className=""
        />{" "}
      </div>
      <div className="text-start my-5">
        <TypeAnimation
          sequence={["adapté a tout type d'écran", 100]}
          style={{ fontSize: "1em" }}
          repeat={1}
          className=""
        />{" "}
      </div>{" "}
      <div className="text-end my-5">
        <TypeAnimation
          sequence={["contenu adapté", 100]}
          style={{ fontSize: "1em" }}
          repeat={1}
          className=""
        />{" "}
      </div>{" "}
      <div className="text-start my-5">
        <TypeAnimation
          sequence={["site web responsive", 100]}
          style={{ fontSize: "1em" }}
          repeat={1}
          className=""
        />
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
