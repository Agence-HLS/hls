
const client = () => {

    return (
        <main className=" flex flex-col items-center">
    <section>
      <div className="py-10">
        <h1 className="uppercase flex justify-center bg-slate-400 rounded-md ">Nos clients</h1>
      </div>
      <h1 className="text-center uppercase">carousel</h1>
      <section className=" bg-slate-500 items-jutify-center py-7 px-8 ">
        <div>
            <div className="">
            <img src="/WORK2.jfif" sizes="200" />
            </div>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet iure non provident voluptatibus sint magni perferendis rerum placeat ex, necessitatibus eos, nesciunt aut corporis vero id quaerat pariatur distinctio. Architecto?
            <form action="" className="py-5 space-x-3 grid grid-cols-2 items-center">
            <button className="justify-center rounded-full bg-white pl-4 ">Envoyer</button>
            <button className="justify-center rounded-full bg-white pl-4 ">Envoyer</button>
            </form>
            </div>
      </section>

      <section className=" md:justify-items-center bg-slate-800 grid grid-cols-2 py-5 space-x-3 space-y-5">
            <div className="bg-slate-400">
                    <img src="/ONLINE.png" />
                    <p className="legend uppercase">Online Formation</p>
                </div>

                <div className="bg-slate-400">
                    <img src="/JEUXVIDEO.png" />
                    <p className="legend uppercase">JeuxVideo</p>
                </div>

                <div className="bg-slate-400">
                    <img src="/Micromania.png" />
                    <p className="legend uppercase">Micromania</p>
                </div>

                 <div className="bg-slate-400">
                    <img src="/KAZE.png" />
                    <p className="legend uppercase">KAZE</p>
                </div>

                 <div className="bg-slate-400">
                    <img src="/SIZE.png" />
                    <p className="legend uppercase">Size?</p>
                </div>

                <div className="bg-slate-400">
                    <img src="/FOOTKORNER.png" />
                    <p className="legend uppercase">Footkorner</p>
                </div>

                <div className="bg-slate-400">
                    <img src="/SOUNDCLOUD2.png" />
                    <p className="legend uppercase">Soundcloud</p>
                </div>

                <div className="bg-slate-400">
                    <img src="/WASTED.png" />
                    <p className="legend uppercase">WastedParis</p>
                </div>
        </section >

    </section>

<section className="space-y-8 py-6 space-x-6 bg-slate-500 ">
    <div className="text-center justify-center ">
        <h1 className="uppercase bg-slate-400 rounded-md ">Nos Projets</h1>
        </div>
        <div className="bg-slate-500 flex flex-col-3 space-x-3">
        <div>
                    <img src="/FOOTKORNER.png" />
                    <p className="legend uppercase">Footkorner</p>
                </div>

                <div>
                    <img src="/SOUNDCLOUD2.png" />
                    <p className="legend uppercase">Soundcloud</p>
                </div>

                <div>
                    <img src="/WASTED.png" />
                    <p className="legend uppercase">WastedParis</p>
                </div>
                </div>
</section>
  </main>
);
};
export default client;
