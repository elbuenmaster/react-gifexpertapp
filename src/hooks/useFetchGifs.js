import { useEffect, useState } from "react";
import { getGifs } from "../helpers/getGifs";
export const useFetchGifs = (url) => {
  const [state, setstate] = useState({
    data: [],
    loading: true,
  });

  useEffect(() => {
    getGifs(url).then((imgs) => {
      console.log(imgs);
      setstate({
        data: imgs,
        loading: false,
      });
    });
  }, [url]);

  return state; // retorna el objeto completo : array + boolean
};
