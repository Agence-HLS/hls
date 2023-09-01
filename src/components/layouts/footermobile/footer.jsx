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
      <footer className=" containblue text-black-300  ">
        <section className=" contain-darkgrey space-y-3">
          <div className=" grid grid-cols-3 text-xs py-4 ">
            <div className="flex flex-col items-center text-center ">
              <FontAwesomeIcon
                className=" text-blue-300"
                icon={faLocationDot}
                width={20}
                height={"auto"}
              />
            </div>
            <div className="flex flex-col items-center text-center">
              <FontAwesomeIcon
                className=" text-blue-300"
                icon={faEnvelope}
                width={20}
                height={"auto"}
              />
            </div>
            <div className="flex flex-col items-center text-center">
              <FontAwesomeIcon
                className="text-blue-300"
                icon={faPhone}
                width={20}
                height={"auto"}
              />
            </div>
            <div className="space-x-5">
              <a className="text-center " href="">
                30 Bd du Chevalier Bayard
                <br />
                77100 Meaux
              </a>
              </div>
              <div className="flex justify-center">
              <a className="text-center" href="">
                01 43 89 52 23
              </a>
                </div>
                <div className="flex justify-center text-xs">

                <div className="py-2">
              <a className="" href="">
                Contact@Deep404.com
              </a>
                </div>

            </div>
          </div>
          <div className=" justify-center" >
            <div className="flex flex-col items-center ">
              <h1 className="uppercase font-bold">Suivez nous !</h1>
              <div className=" ">
                <Image src="/black-logo.svg" width={100} height={200} alt="" />
              </div>
              <p className="text-xs text-center ">
                Ne manquez pas l'actualité en vous inscrivant à notre newsletter
              </p>

              <form
                action=""
                className=" items-center space-x-4 "
              >
                <label className="text-center" htmlFor="">
                  Votre adresse e-mail:
                </label>
                <div className="  space-y-3 ">
                  <input
                    type="email"
                    placeholder="Adresse e-mail..."
                    className="border rounded-full border-solid w-20 "
                  />
                  <button className=" border rounded-full  containwhite w-20 ">
                    Envoyer
                  </button>
                </div>
              </form>
            </div>
          </div>
          <div className="grid grid-cols-2 items-center ">
            <div className="  text-sm ">
              <Link href="">Mentions légales</Link>
              <Link href="">Condition Génerale</Link>
              <Link href="">Charte des cookies</Link>
              <Link href="">Politique de confidentialité</Link>
            </div>

            <div className="  text-xs py-6">
              <p>Agence Deep 404</p>
              <p>&copy; Copyright - 2023</p>
            </div>
          </div>{" "}
        </section>
      </footer>
    </>
  );
};

export default Footer;
