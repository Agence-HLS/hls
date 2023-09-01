import Link from "next/link";
import { render } from "react-dom";
import Navbar from "@/components/layouts/HeaderD";
import HeaderMobile from "@/components/layouts/HeaderMobile";
import Footer from "@/components/layouts/footermobile/footer";
import Aos from "@/components/tools/aos";

const client = () => {
  return (
    <main>
      <Navbar />
      <HeaderMobile />
      <Aos />
      <section className="containblue grid-cols-1 py-24 p-6   ">
        {" "}
        <div className="containblue ">
          <div className=" flex justify-center items-center  m-9 lg:m-2 text-center ">
            <h1 className="uppercase flex-col my-4 h-full  lg: w-40  containwhite">
              Nos clients
            </h1>
          </div>
          <div className="flex flex-col items-center ">
            <div
              data-aos="fade-down"
              data-aos-easing="linear"
              data-aos-duration="800"
              className="py-5 p-5 "
            >
              <img
                className="flex contain-darkgrey items-center "
                src="/WORK2.jfif"
                height={200}
                width={270}
              />
            </div>
            <p className="py-8 p-8">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet iure
              non provident voluptatibus sint magni perferendis rerum placeat
              ex, necessitatibus eos, nesciunt aut corporis vero id quaerat
              pariatur distinctio. Architecto?
            </p>
          </div>
        </div>
        <div className=" lg:my-16 containblue w-full  justify-center items-center ">
          <div className="my-16 flex justify-center   rounded-full ">
            <h1 className="uppercase flex-col h-full w-56 my-4 text-center items-center containwhite  ">
              Ils nous font confiances
            </h1>
          </div>
          <div
            data-aos="fade-up"
            data-aos-anchor-placement="center-bottom"
            data-aos-duration="800"
            className=" grid grid-cols space-y-10 py-10 justify-items-center"
          >
            <div className="">
              <img src="/ONLINE.png" height={70} width={170} />
            </div>
            <div>
              <img
                className=" justify-center"
                src="/JEUXVIDEO.png"
                height={40}
                width={100}
              />
            </div>
            <div>
              <img src="/Micromania.png" height={70} width={170} />
            </div>
            <div>
              <img src="/KAZE.png" height={40} width={100} />
            </div>
            <div>
              <img src="/SIZE.png" height={70} width={170} />
            </div>
            <div>
              <img src="/FOOTKORNER.png" height={40} width={100} />
            </div>
            <div>
              <img src="/SOUNDCLOUD2.png" height={70} width={170} />
            </div>
            <div>
              <img src="/WASTED.png" height={70} width={100} />
            </div>{" "}
            <section
              data-aos="zoom-in"
              data-aos-offset="300"
              data-aos-easing="ease-in-sine"
              className="containblue  "
            >
              <div className="containwhite  h-full lg:py-10 w-50 ">
                <div className="flex justify-center">
                <div className=" mt-4 text-center w-32">
                  <h1 className="containwhite ">Nos Projets</h1>
                </div></div>
                <div className="flex flex-col-1 justify-center p-2 items-center  space-x-8 ">
                  <div
                    data-aos="fade-zoom-in"
                    data-aos-easing="ease-in-back"
                    data-aos-delay="300"
                    data-aos-offset="0"
                    data-aos-duration="1700"
                  >
                    <img
                      className="py-4"
                      src="/SOUNDCLOUD2.png"
                      height={100}
                      width={170}
                    />
                    <button
                      href
                      className=" text-center containwhite rounded-full bg-slate-400"
                    >
                      Projet Haykel
                    </button>
                  </div>

                  <div
                    data-aos="fade-zoom-in"
                    data-aos-easing="ease-in-back"
                    data-aos-delay="300"
                    data-aos-offset="0"
                    data-aos-duration="1500"
                  >
                    <img
                      className="py-3"
                      src="/SOUNDCLOUD2.png"
                      height={100}
                      width={170}
                    />
                    <button
                      href=""
                      className=" containwhite  text-center  rounded-full bg-slate-400"
                    >
                      Projet SACKO
                    </button>
                  </div>

                  <div
                    data-aos="fade-zoom-in"
                    data-aos-easing="ease-in-back"
                    data-aos-delay="300"
                    data-aos-offset="0"
                    data-aos-duration="1300"
                  >
                    <img
                      className="py-4"
                      src="/SOUNDCLOUD2.png"
                      height={100}
                      width={200}
                    />
                    <button
                      href=""
                      className=" containwhite  text-center  rounded-full bg-slate-400"
                    >
                      Projet Lucas
                    </button>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
};
export default client;
