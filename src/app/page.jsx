"use client";

import Image from "next/image";

import Navbar from "@/components/layouts/navbar/";
import HeaderMobile from "@/components/layouts/navbarMobile";
import Home from "./home";
import { render } from "react-dom";
export default function () {
  return (
    <div className="">
      <Navbar />
      <HeaderMobile />
      <Home />
    </div>
  );
}
