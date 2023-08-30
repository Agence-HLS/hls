import Image from "next/image";
import Navbar from "@/components/layouts/HeaderD";
import HeaderMobile from "@/components/layouts/HeaderMobile";
import Footer from "@/components/layouts/footermobile/footer";
const Entreprise = () => {
  return (
    <>
      <Navbar />
      <HeaderMobile />

      <main className=" dark:bg-black dark:text-fuchsia-500 text-[#99ecef] flex flex-col">
        <section className="containblue pt-32 lg:p-10">
          <h1 className="uppercase flex flex-col items-center text-[#1d56b8]  ">nos tarifs</h1>

      <section className="containblue">

        <div className="mt-10 flex flex-col justify-center items-center ">
          <div className="w-full containblueblue">

          <div className=" flex justify-center ">

          <h2 className="uppercase p-10 ">
            nos offres
          </h2>
          </div>
          </div>
          <p className="pt-10 text-center px-10">
            Si jamais vous avez besoins de nos services vous avez le choix entre
            plusieurs offres.
          </p>
        </div>
        
        <div className="flex flex-col pt-32">
<div className="flex justify-center">
          <div className="containblueblue w-1/2 lg:w-1/3 p-2">

          <h2 className=" uppercase * text-center ">
            offres nouveaux client
          </h2>
</div>
          </div>
          <div className="flex justify-center p-4 flex-col">
            <div className=" lg:grid lg:grid-cols-2">
              

              <div className=" px-10 py-10">
                <div className="py-5">

                <div className="flex justify-center p-2  text-[#1d56b8] containwhite">
                <h1>Eco</h1>
                  </div>
                </div>
                  <div className="containpurple p-5">

                  <div className="flex justify-center pb-5">
                <h2>6000$</h2>
                    </div>
                    <div className="flex justify-center">
                <p>1-3 Projets</p>

                </div>
                  </div>
              </div>
          <div className="p-10 ">
                <div className="py-5">

                <div className="flex justify-center p-2 text-[#1d56b8] containwhite">
                <h1>Luxe</h1>
                  </div>
                </div>
                  <div className="containpurple p-5">

                  <div className="flex justify-center pb-5">
                <h2>15000$</h2>
                    </div>
                    <div className="flex justify-center">
                <p>3-5 Projets</p>

                </div>
                  </div>
              </div>
          </div> 
<div className="flex justify-center text-[#1d56b8]">

      <button type="button" onClick={console.log("Abonnement")} className="p-5 containwhite">
        <p>ENVOYER</p>
      </button>
</div>
        </div>{" "}
              </div>
        <div className="flex flex-col pt-40 "> 
        <div className="flex justify-center">
<div className="containblueblue w-1/2 lg:w-1/3 p-2">

          <h2 className=" uppercase text-center ">
            offres d'abonnement
          </h2>
</div>
        </div>

          <div className="flex justify-center p-4 flex-col ">
            <div className=" lg:grid lg:grid-cols-2">
              

              <div className=" px-10 py-10 ">
                <div className="py-5">

                <div className="flex justify-center p-2 text-[#1d56b8] containwhite">
                <h1>Eco</h1>
                  </div>
                </div>
                  <div className="containpurple p-5">

                  <div className="flex justify-center pb-5">
                <h2>10000$</h2>
                    </div>
                    <div className="flex justify-center">
                <p>1-3 Projets</p>

                </div>
                  </div>
              </div>
          <div className="p-10 ">
                <div className="py-5">

                <div className="flex justify-center p-2 text-[#1d56b8] containwhite">
                <h1>Luxe</h1>
                  </div>
                </div>
                  <div className="containpurple p-5">

                  <div className="flex justify-center pb-5">
                <h2>20000$</h2>
                    </div>
                    <div className="flex justify-center">
                <p>3-5 Projets</p>

                </div>
                  </div>
              </div>
          </div> 
<div className="pb-20 flex justify-center text-[#1d56b8]">

      <button type="button" onClick={console.log("Abonnement")} className=" containwhite p-5">
        <p>ENVOYER</p>
      </button>
</div>
        </div>{" "}
              </div>
</section>
</section>
      </main>
      <Footer />
    </>
  );
};
export default Entreprise;

  /* <table class="border-separate border-spacing-2 border border-slate-500 ml-20 mr-20">
  <thead>
  <tr className="px-6">
  <td class="border border-slate-600">
  </td>
  <td class="border border-slate-600 ">option2</td>
  </tr>
            </thead>
            <tbody>
              <tr>
                <td class="border border-slate-700  "></td>
                <td class="border border-slate-700 ">option4</td>
              </tr>
            </tbody>
          </table> */

