"use client";

import { instanceOf } from "prop-types";
import { TypeAnimation } from "react-type-animation";

const TextAnimate = () => {
  return (
    <div className="">
      <TypeAnimation
        sequence={[
          "Lorem ipsum dolor sit, amet",
          100,
          "Lorem ipsum dolor sit, amet consectetur adipisicing elit.",
          100,
          "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptas amet consequuntur vel est",
          100,
          "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptas amet consequuntur vel est similique quia animi rem ratione",
          100,
          "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptas amet consequuntur vel est similique quia animi rem ratione cum praesentium? Doloremque",
          100,
          "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptas amet consequuntur vel est similique quia animi rem ratione cum praesentium? Doloremque corrupti neque veniam! Voluptates",
          100,
          "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptas amet consequuntur vel est similique quia animi rem ratione cum praesentium? Doloremque corrupti neque veniam! Voluptates repudiandae repellendus odio",
          100,
          "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptas amet consequuntur vel est similique quia animi rem ratione cum praesentium? Doloremque corrupti neque veniam! Voluptates repudiandae repellendus odio reiciendis ad!",
          100,
        ]}
        style={{ }}
        repeat={Infinity}
      />
    </div>
  );
};

export default TextAnimate;
//<LinearTextGradient angle={45} colors={["#fafa6e", "#39b48e"]}></LinearTextGradient>
