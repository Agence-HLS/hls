
const Footer = () => {
    return (
      <><section>
        <div  className="flex items-center space-x-2 flex-auto text-blue-300 ">
          <footer className="bg-slate-900 flex lg:hidden pr-10 md:bg-red-400 md:grid-cols-2 md:flex-auto">
            <img src=""/>
              <ul className="">
              <li className=" ">
                <FontAwesomeIcon
                  icon={faLocationDot}
                  className=" "
                  width={40}
                />
                <p className="">30 Bd du Chevalier Bayard,77100 Meaux</p>
              </li>
              <li className="">
               <p className=""> Deep404@gmail.com</p>
              </li>
            </ul>
            <br />
            <form>
              <label>
                
              </label>
            </form>
            <ul className="">
              <li className="">
                <FontAwesomeIcon icon={faLinkedin} width={50} />
                Linkedin
              </li>
              <li className="">
                <FontAwesomeIcon icon={faGithub} width={50} /> Git hub
              </li>
            </ul>
            <br />
            <ul className="">
              <li className=" ">
                <FontAwesomeIcon icon={faBook} width={50} />
                Port-folio
              </li>
              <li>
                <FontAwesomeIcon icon={faFacebook} width={50} className="" />
                Facebook
              </li>
            </ul>
            <br />
            <h1 className="flex justify-center">&copy; Copyright 2023.com</h1>
          </footer>
        </div></section>
        
      </>
    );
  };
  
  export default Footer;
  



 