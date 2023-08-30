import HeaderMobile from "@/components/layouts/HeaderMobile";
import DemoCarousel from "@/app/carousel/homepage/page";
import ImageChange from "@/components/tools/image change/image";

const Introduction = () => {
  return (
    <>
      <HeaderMobile />
      <main className="dark:text-fuchsia-500 dark:bg-black flex hidden:lg flex flex-col">
        <section className="">
          <div className="my-32">
            <ImageChange />
          </div>
          <div className="flex flex-col items-center  w-full h-screen bg-no-repeat bg-cover bg-center ">
            <p className="pt-5 text-white">CTA projet</p>
          </div>
          <div className="flex flex-col items-center">
            <div>
              <h1 className="flex flex-col items-center uppercase py-5 containblue">
                titre
              </h1>
            </div>
            <div className="flex flex-row items-center pt-10 mr-3">
              <p className="">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.{" "}
              </p>

              <img
                src="/image.jfif"
                alt="test"
                width={150}
                height={150}
                className=""
              />
            </div>
          </div>
          <div className="pt-10  text-center">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem,
              minima repellat deleniti magni ullam obcaecati quia ipsa nisi
              maiores error in iusto ducimus veniam vitae. Quae exercitationem
              dolore aut rem!
            </p>
          </div>
          <div className="flex flex-col items-center  pt-10">CTA</div>
          <div>
            <h2 className="flex flex-col items-center mx-6 uppercase glassblue">
              titre
            </h2>
          </div>
          <div className="flex flex-col items-center ">
            <img src="/image.jfif" alt="test" className="" />
          </div>
          <div className="mt-5">
            <h2 className="flex flex-col items-center py-5 uppercase glassblue lg:mx-60">
              nos expertises
            </h2>
          </div>
        </section>
        <sections>
          <div className=" lg:mx-60">
            <DemoCarousel />
          </div>
        </sections>
      </main>
    </>
  );
};

export default Introduction;
