"use client";

import TextAnimate from "@/components/tools/animation text/introduction/data";
import Intro from "@/components/tools/animation text/introduction/data2";
import DemoCarousel from "@/app/carousel/homepage/page";
import "aos/dist/aos.css";
import Animation from "@/components/tools/animation text/introduction/data3";
import By from "@/components/tools/animation text/introduction/data4";

const Introduction = () => {
  return (
    <>
      <main className=" dark:bg-black  contain-bg flex flex-col dark:contain-darkbg containblue ">
        <div className="dark:text-[#eb6689] text-[#99ecef] mt-28 lg:mt-0 w-full h-screen bg-[url('/deep.jpg')]  bg-no-repeat bg-cover bg-center pt-5 font-ocean outline-cyan-50">
          <h1 className="text-3xl lg:text-9xl uppercase">deep 404</h1>
          <div className="text-xl mx-10 my-32 lg:grid lg:justify-items-center lg:py-20 lg:px-96 lg:text-5xl ">
            <Animation />
          </div>
          <div className="pl-28 text-xl lg:grid lg:justify-items-end lg:mt-32 lg:py-20 lg:ml-24 lg:px-96 lg:text-5xl ">
            <By />
          </div>
        </div>
        <section className="my-10 text-[#1d56b8] mt-15 mx-2 lg:mx-96">
          <div
            className="flex flex-col items-center mx-2 lg:mx-10 containwhite dark:contain-darkgrey mb-20"
            data-aos="fade-down"
            data-aos-duration="3000"
          >
            <div className="containbluelight rounded-xl dark:contain-test py-2 px-20 lg:w-full text-center lg:grid lg:justify-items-center">
              <h1 className="uppercase py-1 px-10 contain-darkgrey lg:py-1 lg:w-1/2">
            
                description
              </h1>
            </div>
            <div className="grid grid-cols-1 justify-items-center  mx-5 lg:grid-cols-2 ">
              <div className="my-5  lg:mx-16 lg:text-4xl">
                <TextAnimate />
              </div>
              <img
                src="/dw3.webp"
                alt="test"
                width={750}
                height={500}
                className="my-5"
                data-aos="fade-up"
                data-aos-duration="3000"
              />
            </div>
          </div>
          <div
            className="  flex flex-col items-center my-20 mx-2   containwhite dark:contain-darkgrey "
            data-aos="zoom-out"
            data-aos-duration="6000"
          >
            <div className="darkcontain-test containbluelight py-1 px-12 lg:w-full text-center lg:grid lg:justify-items-center">
              <h1 className="uppercase py-1 px-10 containwhite lg:py-1 lg:w-1/2">
                nos qualités
              </h1>
            </div>
            <div className="lg:grid lg:grid-cols-2">
              <img
                src="dw2.jfif"
                width={600}
                height={500}
                alt="test"
                className="px-10 py-20 "
              />
              <div className="text-xl lg:text-4xl uppercase">
                <Intro />
              </div>
            </div>
          </div>
          <div
            className="lg:my-20 mx-2 lg:mx-10 mb-2 containwhite dark:contain-darkgrey "
            data-aos="fade-up"
            data-aos-duration="3000"
          >
            <div className=" containbluelight dark:contain-test mb-5 py-1 px-12 lg:w-full lg:grid lg:justify-items-center">
              <h1 className="flex flex-col items-center  text-center uppercase dark:contain-darkgrey containwhite px-5 lg:py-1 lg:w-1/2">
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
