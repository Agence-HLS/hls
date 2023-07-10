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
      <footer className="bg-slate-500 text-black-300  justify-center lg:  md:bg-slate-400 md:flex-auto">
        <section className="grid grid-cols-2 py-10">
          <div className="flex flex-col items-center">
            <FontAwesomeIcon
              className="text-purple-600"
              icon={faLinkedin}
              width={30}
              height={"auto"}
            />
            <h3 className="text-xs uppercase pt-2 pb-8">Linkedin</h3>
          </div>
          <div className="flex flex-col items-center">
            <FontAwesomeIcon
              className="text-purple-600"
              icon={faGithub}
              width={30}
              height={"auto"}
            />
            <h3 className="text-xs uppercase pt-2 pb-8">GitHub</h3>
          </div>
          <div className="flex flex-col items-center">
            <FontAwesomeIcon
              className="text-purple-600"
              alt="click"
              icon={faBook}
              width={30}
              height={"auto"}
            />
            <h3 className="text-xs uppercase pt-2">Portfolio</h3>
          </div>
          <div className="flex flex-col items-center ">
            <FontAwesomeIcon
              className="text-purple-600"
              icon={faFacebook}
              width={30}
              height={"auto"}
            />
            <h3 className="text-xs uppercase pt-2">Facebook</h3>
          </div>
        </section>

        {/* 
            <div className=" py-12 pr-5   ">
              <Image src="/black-logo.svg" width={100} height={100} alt="" />
            </div> */}

        <section>
          <div className="flex flex-col items-center py-10">
            <h1 className="uppercase font-bold">Suivez nous !</h1>
            <p className="text-xs text-center py-2 px-4">Ne manquez pas l'actualité en vous inscrivant à notre newsletter</p>

            <form action="" className="flex flex-col  items-center">
              <label htmlFor="">Votre adresse e-mail:</label>  
              <div className="inline-flex justify-center border rounded-full ">
                <input type="email" placeholder="Adresse e-mail..." className="w-1/2 " />
                <button className="pl-4">Envoyer</button>
              </div>
            </form>
          </div>

          <div className="grid grid-rows-3 pb-10">
            <div className="flex flex-col items-center">
              <FontAwesomeIcon
                className=" text-purple-600"
                icon={faLocationDot}
                width={20}
                height={"auto"}
              />
              <a className="text-center pt-4" href="">
                30 Bd du Chevalier Bayard
                <br />
                77100 Meaux
              </a>
            </div>
            <div className="flex flex-col items-center">
              <FontAwesomeIcon
                className="text-purple-600"
                icon={faPhone}
                width={20}
                height={"auto"}
              />
              <a className="text-center" href="">
                01 43 89 52 23
              </a>
            </div>
            <div className="flex flex-col items-center">
              <FontAwesomeIcon
                className=" text-purple-600"
                icon={faEnvelope}
                width={20}
                height={"auto"}
              />
              <a className="text-center" href="">
                Contact@Deep404.com
              </a>
            </div>
          </div>
        </section>

        <hr className="border-blue-500" />
        <div className="py-6 text-sm flex flex-col items-center">
          <Link href="">Mentions légales</Link>
          <Link href="">Condition Génerale</Link>
          <Link href="">Charte des cookies</Link>
          <Link href="">Politique de confidentialité</Link>
        </div>
        <hr className="border-blue-500" />
        <div className="flex flex-col items-center text-xs py-6">
          <p>Agence Deep 404</p>
          <p>&copy; Copyright - 2023</p>
        </div>
      </footer>
    </>
  );
};

export default Footer;
