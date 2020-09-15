import React, { useState } from "react";
import { AddCategory } from "./components/AddCategory";
import { GifGrid } from "./components/GifGrid";
export const GifExpertApp = () => {
  // const categories=['One Punch','Samurai X','Dragon Ball'];
const [categorias, setCategorias] = useState(["One Punch"]);

  /*   const handleAdd=()=>{
         console.log('agregar');
         setCategorias([...categorias,'Detective Conan']);
         setCategorias(cats=>[...cats,'Detective Conan'])
     } */

  return (
    <>
      <h2>GifExpertApp</h2>
      <AddCategory 
      setCategorias={setCategorias}></AddCategory>
      <hr />

      {categorias.map((cat) => {
        return <GifGrid key={cat} category={cat}></GifGrid>;
      })}
    </>
  );
};
