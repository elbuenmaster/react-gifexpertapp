
export const getGifs = async (url) => {
    const resp = await fetch(url);
    const { data } = await resp.json();
    const gifs = data.map((img) => {
      return {
        id: img.id,
        title: img.title,
        url: img.images.downsized_medium.url,
      };
    });
    // la función marcada como async siempre
    // devuelve una promesa!
     
    return (gifs);
   
  };