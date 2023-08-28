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

      <section className="">
        <div className="  py-7 px-8 ">
          <h1 className="uppercase flex justify-center bg-slate-400 rounded-md ">
            Nos clients
          </h1>
        </div>

        <h1 className="text-center items-center uppercase">carousel</h1>
        <div className=" bg-slate-500">
          <div className="flex flex-col items-center py-">
            <div className="py-8">
              <img src="/WORK2.jfif" sizes="50" />
            </div>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet iure
              non provident voluptatibus sint magni perferendis rerum placeat
              ex, necessitatibus eos, nesciunt aut corporis vero id quaerat
              pariatur distinctio. Architecto?
            </p>
          </div>
        </div>
        </section>
        <div>
          <h1 className="uppercase text-center bg-slate-400 rounded-sm py-8">
            Ils nous font confiance
          </h1>
        </div>
        <section className=" bg-slate-500 grid grid-cols-1 space-x-5 space-y-5 py-5 justify-items-center ">
    
          <div>
            <img className="" src="/ONLINE.png" height={70} width={170} />
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
            <img className=" " src="/Micromania.png" height={70} width={170} />
          </div>

          <div>
            <img className="" src="/KAZE.png" height={40} width={100} />
          </div>

          <div>
            <img className="" src="/SIZE.png" height={70} width={170} />
          </div>

          <div>
            <img className="" src="/FOOTKORNER.png" height={40} width={100} />
          </div>

          <div>
            <img className="" src="/SOUNDCLOUD2.png" height={70} width={170} />
          </div>

          <div>
            <img className="" src="/WASTED.png" height={70} width={100} />
          </div>
        </section>
      

      <section className="space-y-8 space-x-6 bg-slate-500 ">
        <div className="text-center justify-center ">
          <h1 className="uppercase bg-slate-400 rounded-md ">Nos Projets</h1>
        </div>
        <div className="bg-slate-500 flex flex-col-3 space-x-10">
          <div>
            <img
              className="py-4"
              src="/FOOTKORNER.png"
              height={75}
              width={170}
            />
            <button className=" uppercase text-center  rounded-full bg-slate-400">
              Footkorner
            </button>
          </div>

          <div>
            <img
              className="py-4"
              src="/SOUNDCLOUD2.png"
              height={100}
              width={170}
            />
            <button className="legend uppercase  text-center  rounded-full bg-slate-400">
              Soundcloud
            </button>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
};
export default client;
