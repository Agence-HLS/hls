
import Link from "next/link";
import { render } from "react-dom";
import Navbar from "@/components/layouts/HeaderD";
import HeaderMobile from "@/components/layouts/HeaderMobile";
import Footer from "@/components/layouts/footermobile/footer";
const client = () => {

    return (
        <main>

        <Navbar/>
        <HeaderMobile/>
        
    <section className="">
      <div className="py-10">
        <h1 className="uppercase flex justify-center bg-slate-400 rounded-md py-8">Nos clients</h1>
      </div>
      
      <h1 className="text-center items-center uppercase">carousel</h1>
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
        <div className="bg-slate-500 flex flex-col-3 space-x-10  py-24">
        <div>
                    <img className="py-4" src="/FOOTKORNER.png" />
                    <button className="legend uppercase py-6 text-center  rounded-full bg-slate-400">Footkorner</button>
                </div>

                <div className="py-6">
                    <img className="py-4" src="/SOUNDCLOUD2.png" />
                    <button className="legend uppercase py-6 text-center  rounded-full bg-slate-400">Soundcloud</button>
                </div>

                <div className="pb-3">
                    <img className="py-4 " src="/WASTED.png" />
                    <button name="button" className="legend uppercase py-6 text-center  rounded-full bg-slate-400">WastedParis</button>
                </div>
                </div>
</section>
<Footer/>
        </main>
);
};
export default client;
