"use client";

import { instanceOf } from "prop-types";
import { TypeAnimation } from "react-type-animation";

const By = () => {
  return (
    <div className="">
      <TypeAnimation
        sequence={[
          "BY SEKOU, LUCAS, HAYKEL",
          100,
        ]}
        style={{ }}
        repeat={Infinity}
      />
    </div>
  );
};

export default By;
//<LinearTextGradient angle={45} colors={["#fafa6e", "#39b48e"]}></LinearTextGradient>
