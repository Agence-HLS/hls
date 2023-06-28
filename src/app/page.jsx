import Image from "next/image";

import Navbar from "@/components/layouts/navbar/";
import NavbarMobile from "@/components/layouts/navbarMobile";
import Home from "./home";

export default function() {
  return (
    <>
      <Navbar />
      <NavbarMobile />
      <Home />
    </>
  );
}
