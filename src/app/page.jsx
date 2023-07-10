"use client";

import Image from "next/image";

import HeaderD from "@/components/layouts/HeaderD";
import HeaderMobile from "@/components/layouts/HeaderMobile";
import Home from "./home";
import { render } from "react-dom";

export default function () {
  return (
    <>
      <HeaderD />
      <HeaderMobile />
      <Home />
    </>
  );
}
