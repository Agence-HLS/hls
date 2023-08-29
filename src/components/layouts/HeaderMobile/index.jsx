"use client";
import Link from "next/link";
import Image from "next/image";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouseUser } from "@fortawesome/free-solid-svg-icons";
import { faCircleInfo } from "@fortawesome/free-solid-svg-icons";
import { faHandHoldingHand } from "@fortawesome/free-solid-svg-icons";
import { faMoneyBill } from "@fortawesome/free-solid-svg-icons";
import { faAddressBook } from "@fortawesome/free-regular-svg-icons";
import { faMoon } from "@fortawesome/free-regular-svg-icons";
import { styles } from "./styles";
import { bubble as Menu } from "react-burger-menu";
import DarkMode from "../../tools/darkMode";
import { useState } from "react";
import { CgToggleSquare, CgToggleSquareOff } from "react-icons/cg";
const HeaderMobile = () => {
  const [showButton, setShowButton] = useState(false);
  return (
    <header className="fixed w-full z-40 flex lg:hidden">
      <nav
        className="w-full h-28 bg-gray-100
       grid grid-cols-3 dark:bg-gray-900"
      >
        <div>
          <Menu className="dark: text-pink-400" styles={styles}>
            <div className="ml-2">
              <Image
                src="/white-logo.svg"
                width={200}
                height={200}
                alt="Logo"
                className="dark:hidden"
              />
              <Image
                src="/black-logo.svg"
                width={200}
                height={200}
                alt="Logo"
                className="dark:flex hidden"
              />
            </div >
            <Link href="/" className="pt-6">
              <FontAwesomeIcon icon={faHouseUser} className="py-1 pr-2" />
              ACCUEIL
            </Link>
            <Link href="/entreprise" className="py-3">
              <FontAwesomeIcon icon={faCircleInfo} className="py-1 pr-2" />{" "}
              ENTREPRISE
            </Link>
            <Link href="/nos-clients">
              <FontAwesomeIcon icon={faHandHoldingHand} className="py-1 pr-2" />{" "}
              CLIENTS
            </Link>
            <Link href="/tarif" className="py-3">
              <FontAwesomeIcon icon={faMoneyBill} className="py-1 pr-2" />
              TARIFS
            </Link>
            <Link href="/contact">
              <FontAwesomeIcon icon={faAddressBook} className="py-1 pr-2" />
              CONTACT
            </Link>
            <div className="w-2/3 flex justify-center fixed bottom-0">
              Copyright Deep404
            </div>
          </Menu>
        </div>
        <div className=" w-full flex justify-center items-center">
          <Image
            src="/white-logo.svg"
            width={100}
            height={100}
            alt="Logo"
            className="dark:hidden"
          />

          <Image
            src="black-logo.svg"
            width={100}
            height={100}
            alt="Logo"
            className=" hidden dark:flex"
          />
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
      </nav>
    </header>
  );
};

export default HeaderMobile;
