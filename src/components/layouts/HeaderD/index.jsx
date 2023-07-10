"use client"
import Link from "next/link";
import Image from "next/image";
import DarkMode from "@/components/tools/darkMode";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon } from "@fortawesome/free-regular-svg-icons";
const Navbar = () => {
  return (
    <header className=" bg-gray-100 dark:bg-black hidden lg:flex grid-cols-5" widt={300} height={300}>
      <div>
        <Image src="/White-logo.svg" width={150} height={150} alt="Logo" className="dark:hidden" />
        <Image src="/black-logo.svg" width={150} height={150} alt="Logo" className="hidden dark:flex" />
      </div>
      <div className="flex items-center justify-center">
        <Image src="/pixel-man.png" width={100} height={100} alt="Image"/>
      </div>
      <div className="w-full px-60 flex  items-center justify-center">
        <nav>
          <ul className=" text-cyan-300 dark:text-purple-500 flex flex-row text-lg">
           <Link href="/">ACCUEIL</Link>
           <Link href="/" className="px-5">NOTRE ENTREPRISE</Link>
           <Link href="/">NOS CLIENTS</Link>
           <Link href="/" className="px-5">NOS TARIFS</Link>
           <Link href="/">NOUS CONTACTER</Link>
          </ul>
        </nav>
      </div>
      <div className="flex items-center justify-center">
        <Image src="/pixel-man.png" width={100} height={100} alt="Image" className="flex items-center justify-center" />
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
