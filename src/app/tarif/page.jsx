import Image from "next/image";
import Navbar from "@/components/layouts/HeaderD";
import HeaderMobile from "@/components/layouts/HeaderMobile";
import Footer from "@/components/layouts/footermobile/footer";
const Entreprise = () => {
  return (
    <>
      <Navbar/>
      <HeaderMobile />

      <main className=" dark:bg-black dark:text-fuchsia-500 flex hidden:lg flex-col">
        <div className="mt-32 flex flex-col items-center">
          <h1 className="uppercase flex flex-col items-center  ">nos tarifs</h1>
          <h2 className="uppercase flex flex-col items-center pt-10 ">
            nos offres
          </h2>
          <p className="pt-10 text-center px-10">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            Repellendus illum dignissimos ipsum voluptates ea, delectus maxime
            atque veritatis obcaecati eveniet hic. Explicabo repudiandae,
            consequuntur exercitationem amet eligendi possimus ratione in?
          </p>
        </div>
        <h2 className="pt-10 text-center upp">offres nouveaux client</h2>
        <div className="flex flex-col ">
          <h2 className=" uppercase pt-10 text-center py-10">
            offres nouveaux client
          </h2>
*  <table class="border-separate border-spacing-2 border border-slate-500 ml-20 mr-20">
            <thead>
              <tr className="px-6">
                <td class="border border-slate-600">
                </td>
                <td class="border border-slate-600 ">option2</td>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td class="border border-slate-700 "></td>
                <td class="border border-slate-700 ">option4</td>
              </tr>
            </tbody>
          </table>
          <p className="flex justify-center pt-5">CTA</p>
        </div>{" "}
        <div className="flex flex-col ">
          <h2 className=" uppercase pt-10 text-center py-10">
            offres d'abonnement
          </h2>

          <table class="border-separate border-spacing-2 border border-slate-500 ml-20 mr-20 pt-">
            <thead>
              <tr>
                <td class="border border-slate-600 "></td>
                <td class="border border-slate-600 ">option2</td>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td class="border border-slate-700 ">option3</td>
                <td class="border border-slate-700 ">option4</td>
              </tr>
            </tbody>
          </table>
          <p className="flex justify-center pt-5">CTA</p>
        </div>
      </main>
      <Footer />
    </>
  );
};
export default Entreprise;
