"use client"
import Link from "next/link";
import Image from "next/image";
import DarkMode from "@/components/tools/darkMode";
import { CgToggleSquare, CgToggleSquareOff } from "react-icons/cg";
import { useState } from "react";
const Navbar = () => {
  const [showButton, setShowButton] = useState(false);
  return (
    <header className=" bg-gray-100 dark:bg-gray-900 hidden lg:flex" width={300} height={300}>
      <div>
        <Image src="/White-logo.svg" width={250} height={250} alt="Logo" className="dark:hidden" />
        <Image src="/black-logo.svg" width={250} height={250} alt="Logo" className="hidden dark:flex" />
      </div>
      <div className="w-full px-40 flex  items-center justify-center">
        <nav>
          <ul className=" text-cyan-300 dark:text-pink-400 flex flex-row text-lg">
           <Link href="/">ACCUEIL</Link>
           <Link href="/" className="px-5">ENTREPRISE</Link>
           <Link href="/">CLIENTS</Link>
           <Link href="/" className="px-5">TARIFS</Link>
           <Link href="/">CONTACT</Link>
          </ul>
        </nav>
      </div>
      <div className="flex items-center justify-center py-2 dark:text-pink-400 text-cyan-300 px-10 text-xl">
          {showButton === true ? (
            <CgToggleSquareOff
              onClick={() => {
                DarkMode();
                
                setShowButton(false);
              }}
            />
          ) : (
            <CgToggleSquare
              onClick={() => {
                DarkMode();
              
                setShowButton(true);
              }}
            />
          )}
        </div>
    </header>
  );
};

export default Navbar;
