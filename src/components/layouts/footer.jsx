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
} from "@fortawesome/free-solid-svg-icons";
import Image from "next/image";

const Footer = () => {
  return (
    <>
      <footer className="bg-slate-500  lg:  md:bg-red-400 "> 
      
      <div>
          <Image
                src="/black-logo.svg"
                width={200}
                height={200}
                alt="Logo"
              />
          </div>

        <ul className="text-blue-300 text-center">
          <li className="flex flex-row justify-center  ">
            <FontAwesomeIcon icon={faLocationDot} width={20} height={"auto"} />
            <a href="">30 Bd du Chevalier Bayard,77100 Meaux</a>
          </li>
          <li className="flex justify-center px-5">
            <FontAwesomeIcon icon={faEnvelope} className="px-1" width={25} />
            <a href="mail" className="py-5 px-2">
              {" "}
              Deep404@gmail.com
            </a>
          </li>
        </ul>

        <div className=" flex flex-row justify-center ">
          <p>Nous contacter</p>
        </div>
        <div>
          <label className="flex flex-row justify-center pb-8">
            <input />
          </label>
          <div className="flex justify-center pb-7 ">
            <button
              type="button"
              className="flex items-end bg-slate-300 border rounded-full"
            >
              Envoyer
            </button>
          </div>
        </div>

         
      
        <section className="grid grid-cols-2 ">
          
            <ul className=" text-blue-300 flex-auto md:flex-justify-start  ">
              <li className="px-8 pr-2 flex-auto">
                <FontAwesomeIcon icon={faLinkedin} width={30} />
                Linkedin
              </li>
              <li className=" px-8 pr-3 flex-auto">
                <FontAwesomeIcon icon={faGithub} width={30} /> Git hub
              </li>
            </ul>
                       

          <ul className="text-blue-300 md:px-10">
            <li className=" px-8 pr-3 flex-auto">
              <FontAwesomeIcon alt="click" icon={faBook} width={30} />
              Port-folio
            </li>
            <li className=" px-8 pr-3 flex-auto">
              <FontAwesomeIcon icon={faFacebook} width={30} />
              Facebook
            </li>
          </ul>
        </section>
        <br />
        <h1 className="flex justify-center">&copy; Copyright 2023.com</h1>
      </footer>
    </>
  );
};

export default Footer;
