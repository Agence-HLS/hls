<<<<<<< HEAD
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
=======
import { document } from "postcss";
import Header from "./header"
import Main from "./main"
import Footer from "@/components/layouts/footer";

export default function Home() {

  const getPerson = (firstname,lastname) => {
      console.log(`Mon prémnom est ${firstname} et mon nom ${lastname}`)
   
  };
getPerson("haykel", "alerte")
  return (
    <>
      <Header />
      <Main />
      <Footer />
    </>
  );
}


const Array =()=>{
  let color =["green", "red", "blue"];
console.log(color);
color.push("black");
console.log(color);
color.pop();
console.log(color);
color.map((colore)=> {
  console.log(`Mon élément est ${colore}`);
  console.log(colore.slice(1, 2));

  //const [...rest] = Array;
 //console.log(rest);

  //let newArray = [...Array, "purple", "brown"];
 // console.log(newArray);

    
    
 

})

}
 Array()

 let Phone={
  //key:"value"
  Mark:{Editor:"Apple",
        date:"2018"},
  os:{
    System:"IOS",
    Mode:"dev",
    Date:"2023"
  },
  Accessories:{
    true:"yes",
  }
 };

>>>>>>> 847a5b691122b28856cb5dc5d7184af376f72bb6
