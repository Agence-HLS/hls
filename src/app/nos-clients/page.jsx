import Link from "next/link";
import { render } from "react-dom";
import Navbar from "@/components/layouts/HeaderD";
import HeaderMobile from "@/components/layouts/HeaderMobile";
import Footer from "@/components/layouts/footermobile/footer";
const client = () => {
  return (
    <main>
      <Navbar />
      <HeaderMobile />
      
      <section className="containblue py-28 ">
        {" "}
        <div className=" flex justify-center my-5 lg:hidden">
          <h1 className="uppercase flex-col h-full w-48 justify-center text-center items-center containwhite">
            Nos clients
          </h1>
        </div>
        <div className="containblue my-5">
          <div className="flex flex-col items-center ">
            <div className="py-5">
              <img src="/WORK2.jfif" height={100} width={170} />
            </div>
            <p className="py">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet iure
              non provident voluptatibus sint magni perferendis rerum placeat
              ex, necessitatibus eos, nesciunt aut corporis vero id quaerat
              pariatur distinctio. Architecto?
            </p>
          </div>
        </div>
        <div className="my-5 flex justify-center rounded-full ">
          <h1 className="uppercase flex-col h-full w-56 text-center items-center containwhite  ">
            Ils nous font confiances
          </h1>
        </div>
        <div className=" containblue w-full flex justify-center items-center ">
          <div className=" grid grid-cols-1  space-y-10 py-10 justify-items-center">
            <div className="">
              <img src="/ONLINE.png"  height={70} width={170} />
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
              <img
                className=" "
                src="/Micromania.png"
                height={70}
                width={170}
              />
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
            <section className="containblue  flex x-10">
              <div className="containwhite flex-col h-full w-full items-center">
                <div className="  text-center ">
                  <h1 className=" ">Nos Projets</h1>
                </div>
                <div className="flex flex-col-3 ml-6 h-36 space-x-10">
                  <div>
                    <img
                      className="py-4"
                      src="/SOUNDCLOUD2.png"
                      height={75}
                      width={170}
                    />
                    <button className=" text-center containwhite rounded-full bg-slate-400">
                      Projet Haykel
                    </button>
                  </div>

                  <div>
                    <img
                      className="py-4"
                      src="/SOUNDCLOUD2.png"
                      height={100}
                      width={170}
                    />
                    <button className=" containwhite  text-center  rounded-full bg-slate-400">
                      Projet SACKO
                    </button>
                  </div>

                  <div>
                    <img
                      className="py-4"
                      src="/SOUNDCLOUD2.png"
                      height={100}
                      width={170}
                    />
                    <button className=" containwhite  text-center  rounded-full bg-slate-400">
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
