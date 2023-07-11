"use client";
import Footer from "@/components/layouts/footermobile/footer";
import Image from "next/image";
import HeaderD from "@/components/layouts/HeaderD";
import HeaderMobile from "@/components/layouts/HeaderMobile";
import Home from "./home";
import { render } from "react-dom";
export default function () {
  return (
    <div>

      <HeaderD />
      <HeaderMobile />
      <Home />
      <Footer />
      <Image/>
      <render/>


    </div>

  );
}

