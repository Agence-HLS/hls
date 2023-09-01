"use client";

import Intro from "@/components/tools/animation text/introduction/data";
import DemoCarousel from "@/app/carousel/homepage/page";
import "aos/dist/aos.css";

const Introduction = () => {
  return (
    <>
      <main className="dark:text-fuchsia-500 dark:bg-black  flex flex-col containblue ">
        <section className=" mt-28 mx-2 lg:mx-96">
          <div
            className="flex flex-col items-center mx-2 lg:mx-10 containwhite mb-20"
            data-aos="fade-down"
            data-aos-duration="3000"
          >
            <div className="containblueblue py-2 px-20 lg:w-full text-center lg:grid lg:justify-items-center">
              <h1 className="uppercase py-1 px-10 containwhite lg:py-1 lg:w-1/2">
                titre
              </h1>
            </div>
            <div className="grid grid-cols-1 justify-items-center  mx-5  ">
              <img
                src="/dw3.webp"
                alt="test"
                width={750}
                height={500}
                className="my-5"
              />
              <p className=" lg:mx-60 my-5">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Voluptas amet consequuntur vel est similique quia animi rem
                ratione cum praesentium? Doloremque corrupti neque veniam!
                Voluptates repudiandae repellendus odio reiciendis ad!
              </p>
            </div>
          </div>

          <div
            className="  flex flex-col items-center my-20 mx-2  lg:mx-10 containwhite "
            data-aos="zoom-out"
            data-aos-duration="6000"
          >
            <div className="containblueblue py-2 px-20 lg:w-full text-center lg:grid lg:justify-items-center">
              <h1 className="uppercase py-1 px-10 containwhite lg:py-1 lg:w-1/2">
                titre
              </h1>
            </div>
            <div className="lg:grid lg:grid-cols-2">
              <img
                src="dw2.jfif"
                width={600}
                height={500}
                alt="test"
                className="py-20 "
              />
              <div className=" text-4xl uppercase">
                <Intro/>
              </div>
            </div>
          </div>
          <div
            className="lg:my-20 mx-2 lg:mx-10 mb-2 containwhite "
            data-aos="fade-up"
            data-aos-duration="3000"
          >
            <div className=" containblueblue mb-5 py-3 px-20 lg:w-full lg:grid lg:justify-items-center">
              <h1 className="flex flex-col items-center text-center uppercase containwhite px-5 lg:py-1 lg:w-1/2">
                nos expertises
              </h1>
            </div>
            <div className=" lg:mx-20">
              <DemoCarousel />
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default Introduction;
