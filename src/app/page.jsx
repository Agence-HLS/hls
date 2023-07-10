import Footer from "@/components/layouts/footermobile/footer";

export default function Home() {

  return (
    <>
      <Footer />
    </> )=
"use client";

import Image from "next/image";

import HeaderD from "@/components/layouts/HeaderD";
import HeaderMobile from "@/components/layouts/HeaderMobile";
import Home from "./home";
import { render } from "react-dom";
export default function () {
  return (
    <div className="">
      <HeaderD />
      <HeaderMobile />
      <Home />
    </div>

  );
}
