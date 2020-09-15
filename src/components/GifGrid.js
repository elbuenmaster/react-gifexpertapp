import React, { useState, useEffect } from "react";
import { GifGridItem } from "../components/GifGridItem";
import {getGifs} from "../helpers/getGifs";
import { useFetchGifs } from "../hooks/useFetchGifs";

export const GifGrid = ({ category }) => {
  const apiKey = "eBHH7BLGeQviyhM8FyoIaVveWFeN72yl";
  const url = `https://api.giphy.com/v1/gifs/search?q=${encodeURI(category)}&limit=10&api_key=${apiKey}`;

  /* const [images, setImages] = useState([]);
  useEffect(() => {
    getGifs(url)
    .then(imgs=>setImages(imgs));
  }, [url]);
 */

  const {data:images,loading}= useFetchGifs(url);
 
  return (
    <>  
    <h3>{category}</h3>
    {loading && <p>Cargando</p>}
   {   <div className='card-grid'>
    
      
        {images.map((imagen) => (
          <GifGridItem 
          key={imagen.id}
          {...imagen} />
        ))}
     
    </div> }
   </> 
  );
};
