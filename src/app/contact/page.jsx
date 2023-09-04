import Image from "next/image";
import Navbar from "@/components/layouts/HeaderD";
import HeaderMobile from "@/components/layouts/HeaderMobile";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Footer from "@/components/layouts/footermobile/footer";
import {
  faFacebook,
  faGithub,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import Aos from "@/components/tools/aos/aos";

const Contact = () => {
  return (
    <>
      <HeaderMobile />
      <Navbar />
      <Aos />
      <main className="dark:bg-black contain-bg  dark:contain-darkbg dark:text-fuchsia-500 grid grid-cols-1">
        <section className="  w-full">
          <section
           
            className=" flex justify-center my-10 mt-36"
          >
            <div className="containblueblue lg:w-5/6">

            {/*</main>className="flex lg:hidden"*/}
            <div className="containblue dark:containpurple ">
              <div className="flex justify-center py-5">
                <div className="containblue flex-col   rounded-full w-48">
                  <h1
                    className="containwhite dark:text-pink-500  text-center uppercase"
                    id="tittle-font"
                  >
                    contactez-nous
                  </h1>
                </div>
              </div>
              <div className="p-5 flex justify-center">
                <h2 id="text-color">
                  Nous sommes ravis que vous souhaiteriez entrer en contact avec
                  nous.N'hesitez pas a nous contacter en remplissant le
                  formulaire de contact
                </h2>
              </div>
              <div className=" p-5">
                <div
                  data-aos="fade-zoom-in"
                  data-aos-easing="ease-in-back"
                  data-aos-delay="300"
                  data-aos-offset="0"
                  >
                  
                </div>
              </div>
            </div>
                  </div>
          </section>
          {/*  */}
          <section
            data-aos="fade-up"
            data-aos-anchor-placement="center-bottom"
            data-aos-duration="1000"
            className="my-5 flex justify-center "
          >
            <div className="containblueblue lg:w-5/6">

            <div className="containblue py-10">
              <form action="" className=" items-center flex flex-col ">
                {/* La div représente un bloc avec un grid en 2 colonne */}
                <div className="grid grid-cols-1 space-y-5">
                  {/* Colonne 1 */}
                  <div className="flex flex-col  items-center ">
                    <label htmlFor="" className="">
                      Votre nom:
                    </label>
                    <input
                      type="text"
                      className="w-28  rounded-full containwhite"
                      />
                  </div>
                  {/* Colonne 2 */}
                  <div className="flex flex-col items-center ">
                    <label className="" htmlFor="">
                      Votre email:
                    </label>
                    <input
                      type="email"
                      className="w-28   rounded-full containwhite"
                      />
                  </div>
                  {/* Colonne 3 */}
                  <div className="flex flex-col items-center">
                    <label htmlFor="">Votre prénom:</label>
                    <input
                      type="text"
                      className="w-28  rounded-full containwhite"
                      />
                  </div>
                  {/* Colonne 4 */}
                  <div className="flex flex-col items-center ">
                    <label htmlFor="">Votre téléphone:</label>
                    <input
                      type="tel"
                      className="w-28 border-2 rounded-full containwhite"
                      />
                  </div>
                </div>
                <div className="flex flex-col items-center py-5 my-4  pt-4">
                  <label htmlFor="" className="">
                    Objet du message:
                  </label>
                  <textarea
                    name=""
                    id="message"
                    cols="38"
                    rows="5"
                    className=" pb-5 rounded-lg w-64 containblue "
                    />
                </div>
                <div className="containblue">
                  <button className=" w-24 containwhite rounded-full ">
                    Envoyer
                  </button>
                </div>
              </form> 
              <div className="mt-5 p-5">
                {" "}
                <section className="containblue flex justify-center ">
                  <div className=" grid grid-cols-3 py-10" >
                  <div
                    data-aos="fade-zoom-in"
                    data-aos-easing="ease-in-back"
                    data-aos-delay="300"
                    data-aos-offset="0"
                    data-aos-duration="1500"
                    className="flex justify-center">
                      <FontAwesomeIcon
                        className="text-blue-300"
                        icon={faLinkedin}
                        width={300}
                        height={250}
                        />
                      
                        </div>
                    
                    <div
                      data-aos="fade-zoom-in"
                      data-aos-easing="ease-in-back"
                      data-aos-delay="300"
                      data-aos-offset="0"
                      data-aos-duration="1700"
                      className="flex justify-center"
                      
                      >
                      <FontAwesomeIcon
                        className="text-blue-300"
                        icon={faGithub}
                        width={30}
                        height={"auto"}
                        />
                     
                    </div>

                    <div className="flex justify-center">
                      <FontAwesomeIcon
                        className="text-blue-300"
                        icon={faFacebook}
                        width={30}
                        height={"auto"}
                        />
                     </div>
                    
                  </div>
                </section>
              </div>
                        </div>
            </div>
          </section>
        </section>
      </main>

      <Footer />
    </>
  );
};

export default Contact;
