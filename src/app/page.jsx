"use client";
import Footer from "@/components/layouts/footermobile/footer";
import Image from "next/image";
import HeaderD from "@/components/layouts/HeaderD";
import HeaderMobile from "@/components/layouts/HeaderMobile";

import Home from "./home";

export default function () {
  return (
  

    <>
      <HeaderD />
      <HeaderMobile />
      <Home />
      <Footer />
      <Image/>
      <render/>



    </>
  );
}

