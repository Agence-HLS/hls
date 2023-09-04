import {
  faFacebook,
  faGithub,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBook,
  faEnvelope,
  faLocationDot,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";
import Image from "next/image";

const Footer = () => {
  return (
    <>
      <footer className=" dark:bg-containfooter contain-bg containwhite p-5 text-black-300  ">
        <section className="contain-darkgrey my-10 py-7 text-[#99ecef]">
          <div className=" text-xs p-0.5 ">
            <div
              data-aos="fade-up"
              data-aos-anchor-placement="center-bottom"
              className="grid grid-cols-3 py-5 my-5"
            >
              <div className="text-center items-center ">
                <FontAwesomeIcon
                  className="text-blue-500  "
                  icon={faLocationDot}
                  width={20}
                  height={"auto"}
                />
              </div>
              <div className="items-center text-center">
                <FontAwesomeIcon
                  className=" text-blue-500 "
                  icon={faEnvelope}
                  width={20}
                  height={"auto"}
                />
              </div>
              <div className="items-center text-center">
                <FontAwesomeIcon
                  className=" text-blue-500 "
                  icon={faPhone}
                  width={20}
                  height={"auto"}
                />
              </div>

              <div className="flex justify-center text-[#99ecef] ">
                <a className="text-center " href="">
                  30 Bd du Chevalier Bayard
                  <br />
                  77100 Meaux
                </a>
              </div>
              <div className="flex justify-center ">
                <a className="text-center" href="">
                  01 43 89 52 23
                </a>
              </div>
              <div className=" text-xs py-2">
                <p className="text-center" href="">
                  Contact @Deep404.com
                </p>
              </div>
            </div>
          </div>
          <div
            data-aos="fade-up"
            data-aos-anchor-placement="bottom-bottom"
            data-aos-delay="300"
            data-aos-offset="0"
            className=" justify-center"
          >
            <div className="flex flex-col items-center ">
              <h1 className="uppercase containblueblue w-36 text-center font-bold">
                Suivez nous !
              </h1>
              <div className=" ">
                <Image src="/white-logo.svg" width={100} height={200} alt="" />
              </div>
              <p className="text-xs text-center ">
                Ne manquez pas l&apos;actualité en vous inscrivant à notre newsletter
              </p>

              <form action="" className=" grid grid-cols items-center  ">
                <label className="text-center py-5" htmlFor="">
                  Votre adresse e-mail:
                </label>
                <div className=" flex flex-col items-center space-y-3 mx-5 ">
                  <input
                    type="email"
                    placeholder="Adresse e-mail..."
                    className="border rounded-full text-blue-500  border-solid  "
                  />
                  <button className="  rounded-full  containblueblue w-20 ">
                    Envoyer
                  </button>
                </div>
              </form>
            </div>
          </div>
          <div className=" flex justify-center my-5">
            <div className="flex flex-col items-center ">
              <div
                data-aos="fade-zoom-in"
                data-aos-easing="ease-in-back"
                data-aos-delay="300"
                data-aos-offset="0"
                className="grid grid-cols my-5 p-2 space-x-1 text-sm "
              >
                <Link href="">Mentions légales</Link>
                <Link href="">Condition Génerale</Link>
                <Link href="">Charte des cookies</Link>
                <Link href="">Politique de confidentialité</Link>
              </div>

              <div className=" text-xs py-5">
                <p className="py-5">Agence Deep 404</p>
                <p>&copy; Copyright - 2023</p>
              </div>
            </div>
          </div>{" "}
        </section>
      </footer>
    </>
  );
};

export default Footer;
