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
      
   
     
     

        <ul className="bg-white flex-auto md:text-center items-center pt-9 pb-5 ">
          <li>
             
             <div className=" md: py-10 md  ">
          <Image
                src="/black-logo.svg"
                width={200}
                height={200}
                alt=""
              />
          </div>  
             <div className="flex justify-center py-5">
              <FontAwesomeIcon className=" text-purple-600  " icon={faLocationDot} width={20} height={"auto"} />
              <a className="pl-3 text-blue-600" href="">: 30 Bd du Chevalier Bayard
               <br />
               77100 Meaux
               </a> </div>
             
          </li>
  
          <li> 

            <div className=" flex justify-center text-blue-600"> 
              <FontAwesomeIcon className=" text-purple-600"icon={faEnvelope} width={25} height={"auto"} /> 
               <a className="flex justify-center pl-3 " href="mail"> 
             : Contact@Deep404.com </a> </div>
            <br />
             <div className="flex justify-center pr-20">
              <FontAwesomeIcon className="text-purple-600" icon={faPhone} width={20} height={"auto"} /> 
             <a className="flex justify-center text-blue-600" href="">: 01.43.89.52.23</a> 
            </div>
           
            <br />
          </li>
        </ul>
        <br />
        <div>  
          <h1 className=" flex justify-center pr-5 pb-3" >SUIVEZ NOUS !</h1>
        </div>
      
        <section className="grid grid-cols-3 flex-justify-center py-6  md:flex-justify-center md: justify-items-center md:   ">
          
            <ul className="  md:flex-justify-start py-6  ">
              <li className="px-8 pr-2 md:flex-auto">
                <FontAwesomeIcon icon={faLinkedin} width={30} height={"auto"} />
                Linkedin
              </li>
              <br />
              <li className=" px-8 pr-3 md:flex-auto ">
                <FontAwesomeIcon icon={faGithub} width={30} height={"auto"} /> Git hub
              </li>
            </ul>
                       

           <div>
             <div className=" py-12 pr-5   ">
          <Image
                src="/black-logo.svg"
                width={100}
                height={100}
                alt=""
              />
          </div>
           </div>   
          <ul className=" md:px-10 md:flex-auto grid-cols-3  py-6 ">
            <li className=" px-8 ">
              <FontAwesomeIcon alt="click" icon={faBook} width={30} height={"auto"} />
              Port-folio
            </li>
            <br />
            <li className=" px-8 ">
              <FontAwesomeIcon icon={faFacebook} width={30} height={"auto"} />
              <a href="">Facebook</a>
            </li>
          </ul>
        
        
        </section> 
         <section className="">
          <ul>
          <li></li>
          <li></li>
          <li></li>
          </ul>
         </section>

         <ul>
        <div className=" flex flex-row justify-center py-4 ">
          <h1>Inscription Newsletter:</h1>
        </div>
       
           </ul>

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
         <div className="py-6 text-xs flex flex-col items-center">
          <Link href="">Mentions légales</Link>
          <Link href="">Politique de confidentialité</Link>
        </div>
        <br />
        <h1 className="flex justify-center">&copy; Copyright 2023.com/Deep 404</h1>
      </footer>
    </>
  );
};

export default Footer;
