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
      <footer className="bg-slate-500 text-black-300  lg:  md:bg-slate-400 md:flex-auto"> 
      
     <div className="text-red-500">

     </div>

        <ul className="bg-white flex-auto md:text-center items-center pt-9 pb-5 ">
          <li>
            <div className="flex justify-center">
              <FontAwesomeIcon icon={faPhone} width={20} height={"auto"} /> 
            </div>
            <br />
               <a className="flex justify-center" href="">+33 (0)1.43.89.52.23</a>
               <br />
             <div className="flex justify-center py-5">
              <FontAwesomeIcon icon={faLocationDot} width={20} height={"auto"} />
             </div>
               <a className="flex justify-center" href="">30 Bd du Chevalier Bayard
               <br />
               77100 Meaux
               <br />
               </a>
          </li>
            <br />
          <li>
            <div className="flex justify-center px-"> 
              <FontAwesomeIcon icon={faEnvelope} width={25} height={"auto"} />
            </div>
           <br />
            <a className="flex justify-center" href="mail">
              Contact@Deep404.com
            </a>
            <br />
          </li>
        </ul>
        <br />
          <ul>
        <div className=" flex flex-row justify-center ">
          <h1>Inscription Newsletter:</h1>
        </div>
        <div className="flex flex-row justify-center pb-8 ">
          <label >
            <input className=" border rounded-full" />
          </label> 
          </div>
          <div className="flex justify-center pb-8 ">
            <button
              type="button"
              className="flex items-end bg-slate-300 border rounded-full ">
              Envoyer
            </button>
        </div>
           </ul>

        <section className="grid grid-cols-3  md:flex  ">
          
            <ul className="  md:flex-justify-start  ">
              <li className="px-8 pr-2 flex-auto">
                <FontAwesomeIcon icon={faLinkedin} width={30} height={"auto"} />
                Linkedin
              </li>
              <br />
              <li className=" px-8 pr-3 flex-auto">
                <FontAwesomeIcon icon={faGithub} width={30} height={"auto"} /> Git hub
              </li>
            </ul>
                       

           <div className=" flex justify-center items-center">
             <div className=" py-5 ">
          <Image
                src="/black-logo.svg"
                width={100}
                height={75}
                alt=""
              />
          </div>
           </div>   
          <ul className=" md:px-10 md:flex-auto">
            <li className=" px-8 flex-auto">
              <FontAwesomeIcon alt="click" icon={faBook} width={30} height={"auto"} />
              <a href="">Port-folio</a>
            </li>
            <br />
            <li className=" px-8 flex-auto">
              <FontAwesomeIcon icon={faFacebook} width={30} height={"auto"} />
              <a href="">Facebook</a>
            </li>
          </ul>
          <div className="py-6 text-xs flex flex-col items-center">
          <Link href="">Mentions légales</Link>
          <Link href="">Politique de confidentialité</Link>
        </div>
        </section> 
         <section className="">
          <ul>
          <li></li>
          <li></li>
          <li></li>
          </ul>
         </section>
      
        <br />
        <h1 className="flex justify-center">&copy; Copyright 2023.com/Deep 404</h1>
      </footer>
    </>
  );
};

export default Footer;
