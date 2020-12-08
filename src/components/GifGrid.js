import React, { useState, useEffect } from "react";
import { GifGridItem } from "../components/GifGridItem";
import { useFetchGifs } from "../hooks/useFetchGifs";
import PropTypes from 'prop-types';

export const GifGrid = ({ category }) => {
 
  /* const [images, setImages] = useState([]);
  useEffect(() => {
    getGifs(url)
    .then(imgs=>setImages(imgs));
  }, [url]);
 */

  // al cargar la app por primera vez,data está vacio y loading esta en false
  const {data:images,loading}= useFetchGifs(category);
 
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

GifGrid.ProTypes={
  category:PropTypes.string.isRequired
}