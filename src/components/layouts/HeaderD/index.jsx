"use client"
import Image from "next/image";
import DarkMode from "@/components/tools/darkMode";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon } from "@fortawesome/free-regular-svg-icons";
const Navbar = () => {
  return (
    <header className=" bg-gray-100 dark:bg-black hidden lg:flex grid-cols-5" widt={300} height={300}>
      <div>
        <Image src="/White-logo.svg" width={500} height={500} alt="Logo" className="dark:hidden" />
        <Image src="/black-logo.svg" width={500} height={500} alt="Logo" className="hidden dark:flex" />
      </div>
      <div className="flex items-center justify-center">
        <Image src="/pixel-man.png" width={300} height={300} alt="Image"/>
      </div>
      <div className=" flex  items-center justify-center">
        <nav>
          <ul className=" text-cyan-300 dark:text-purple-500 flex flex-row text-lg">
            <li>ACCUEIL</li>
            <li className="px-5">NOTRE ENTREPRISE</li>
            <li className="">NOS TARIFS</li>
            <li className="px-5">NOS CLIENTS</li>
            <li className="">NOUS CONTACTER</li>
          </ul>
        </nav>
      </div>
      <div className="flex items-center justify-center">
        <Image src="/pixel-man.png" width={300} height={300} alt="Image" className="flex items-center justify-center" />
      </div>
      <div>
        <button type="button" onClick={() => DarkMode()}>
          <FontAwesomeIcon icon={faMoon} size="2xl" className="text-cyan-300 dark:text-fuchsia-500"
          />
        </button>
      </div>
    </header>
  );
};

export default Navbar;
