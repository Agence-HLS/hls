import Image from "next/image";
import HeaderMobile from "@/components/layouts/HeaderMobile";
import Footer from "@/components/layouts/footer";
const Entreprise = () => {
  return (
    <>
      <HeaderMobile />

      <main className="flex hidden:lg flex-col">
        <div className="mt-32 flex flex-col items-center">
          <h1 className="uppercase flex flex-col items-center pt-5 ">
            nos tarifs
          </h1>

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
        <div>
          <h2 className="pt-10 text-center upp">offres nouveaux client</h2>
        </div>
      </main>
      <Footer />
    </>
  );
};
export default Entreprise;
