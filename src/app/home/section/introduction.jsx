import HeaderMobile from "@/components/layouts/HeaderMobile";
import DemoCarousel from "@/app/carousel/homepage/page";

const Introduction = () => {
  let backgroundImages = [
    "/aurora.jpg",
    "/beach.jpg",
    "/iceland.jpg",
    "/italy.jpg",
    "/nature.jpg",
    "/mountains.jpg"
  ];
  
  function changeBackground() {
    let random = Math.floor(Math.random() * backgroundImages.length);
  
    document.body.style.backgroundImage = "url(" + backgroundImages[random] + ")";
    document.body.style.transition = "2s";
  }
  
  setInterval(changeBackground, 2500);
  return (
    <>
      <HeaderMobile />
      <main className="dark:text-fuchsia-500 dark:bg-black flex hidden:lg flex flex-col">
        <section className="">
          <div className="flex flex-col items-center bg-url['']  w-full h-screen bg-no-repeat bg-cover bg-center ">
            <p className="pt-5 text-white">CTA projet</p>
          </div>
          <div className="flex flex-col items-center">
            <p className="uppercase pt-24">titre</p>
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
            <h2 className="flex flex-col items-center  pt-10 uppercase">
              titre
            </h2>
          </div>
          <div className="flex flex-col items-center pt-10">
            <img src="/image.jfif" alt="test" className="" />
          </div>
          <div className="flex flex-col items-center pt-10 uppercase">
            nos expertises
          </div>
        </section>
        <section className="grid grid-cols-3 pt-10">
          <div className="flex flex-col items-center px-2">
            <img src="/image.jfif" alt="test" className="" />
            <p>CTA</p>
          </div>
          <div className="flex flex-col items-center px-2">
            <img src="/image.jfif" alt="test" className="" />
            <p>CTA</p>
          </div>
          <div className="flex flex-col items-center px-2">
            <img src="/image.jfif" alt="test" className="" />
            <p>CTA</p>
          </div>
        </section>
        <section className="grid grid-cols-3 pt-5">
          <div className="flex flex-col items-center  px-2">
            <img src="/image.jfif" alt="test" className="" />
            <p>CTA</p>
          </div>{" "}
          <div className="flex flex-col items-center px-2">
            <img src="/image.jfif" alt="test" className="" />
            <p>CTA</p>
          </div>{" "}
          <div className="flex flex-col items-center px-2">
            <img src="/image.jfif" alt="test" className="" />
            <p>CTA</p>
          </div>
        </section>

        <sections>
          <div>
            <DemoCarousel />
          </div>
        </sections>
      </main>
    </>
  );
};

export default Introduction;
