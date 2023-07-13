"use client";

import Image from "next/image";
import HeaderD from "@/components/layouts/HeaderD";
import HeaderMobile from "@/components/layouts/HeaderMobile";
import Footer from "@/components/layouts/footermobile/footer";
import Home from "./home";

export default function () {
  return (
    <>
      <HeaderD />
      <HeaderMobile />
      <Home />
      <Footer />
      <Image />
    </>
  );
}
