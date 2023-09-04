 "use client"

import Link from "next/link";
import { render } from "react-dom";
import Navbar from "@/components/layouts/HeaderD";
import HeaderMobile from "@/components/layouts/HeaderMobile";
import Footer from "@/components/layouts/footermobile/footer";
import ClientsCarousel from "../carousel/client/client";

const client = () => {

    return (
        <main>

        <Navbar/>
        <HeaderMobile/>

      <ClientsCarousel/>
        
    <section className="">
      <div className="py-10">
        <h1 className="uppercase flex justify-center bg-slate-400 rounded-md py-8">Nos clients</h1>
      </div>
      
     
      <section className=" bg-slate-500  py-7 px-8 ">
        <div className="flex flex-col items-center py-">
            <div className="py-8" >
            <img src="/WORK2.jfif" sizes="50" />
            </div>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet iure non provident voluptatibus sint magni perferendis rerum placeat ex, necessitatibus eos, nesciunt aut corporis vero id quaerat pariatur distinctio. Architecto?
           </p> 
           <form action="" className="py-5 space-x-3 grid grid-cols-2 text-center items-center">
            <button className="text-center rounded-full bg-white pl-4 ">Envoyer</button>
            <button className="text-center rounded-full bg-white pl-4 ">Envoyer</button>
            </form>
            </div>
      </section>
            <div><h1 className="uppercase text-center bg-slate-400 rounded-sm py-8">Ils nous font confiance
                </h1></div>
      <section className=" md:justify-items-center bg-slate-500 grid grid-cols-2 items-center text-black text-center py-24 space-x-3 space-y-9">
        
            <div>
                    <img  className="py-4" src="/ONLINE.png" />
                    <button className="legend py-5 pl-5  uppercase text-center rounded-full bg-slate-400">Online Formation</button>
                </div>

                <div >
                    <img className="py-4 justify-center" src="/JEUXVIDEO.png" />
                    <button className="legend py-6 px-14 uppercase text-center  rounded-full bg-slate-400">JeuxVideo</button>
                </div>

                <div className="py-4">
                    <img className="py-4 " src="/Micromania.png" />
                    <button className="legend py-6 px-14 uppercase text-center  rounded-full bg-slate-400">Micromania</button>
                </div>

                 <div >
                    <img className="py-4" src="/KAZE.png" />
                    <button className="legend px-20 py-6 uppercase text-center  rounded-full bg-slate-400">KAZE</button>
                </div>

                 <div >
                    <img className="py-4" src="/SIZE.png" />
                    <button className="legend px-16 py-6 uppercase text-center  rounded-full bg-slate-400">Size?</button>
                </div>

                <div >
                    <img className="py-4" src="/FOOTKORNER.png" />
                    <p className="legend py-6 px-16 uppercase text-center  rounded-full bg-slate-400">Footkorner</p>
                </div>

                <div>
                    <img className="py-4" src="/SOUNDCLOUD2.png" />
                    <button className="legend px-12 py-6 text-center  rounded-full bg-slate-400">Soundcloud</button>
                </div>

                <div>
                    <img className="py-4" src="/WASTED.png" />
                    <button className="legend py-6 px-16 uppercase text-center  rounded-full bg-slate-400">WastedParis</button>
                </div>
        </section >

    </section>

<section className="space-y-8 space-x-6 bg-slate-500 ">
    <div className="text-center justify-center ">
        <h1 className="uppercase bg-slate-400 rounded-md ">Nos Projets</h1>
        </div>
        <div className="containblue my-5">
          <div className="flex flex-col items-center ">
            <div className="py-5">
              <img src="/WORK2.jfif" height={100} width={170} />
            </div>
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
            className=" grid grid-cols lg:grid grid-cols-2 lg:items-center space-y-10 py-10 justify-items-center"
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
              <div className="lg:flex justify-center">
                <div className="containwhite lg:grid grid-cols-1 h-full lg:py-10 w-50 ">
                  <div className="flex justify-center">
                    <div className=" mt-4 text-center w-32">
                      <h1 className="containwhite ">Nos Projets</h1>
                    </div>
                  </div>
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
