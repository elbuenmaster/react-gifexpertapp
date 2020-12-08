// retorna un objeto javascript
/*
},
        {
          id: '3orieNX1KVm2F03Dxu',
          title: 'episode 4 GIF',
          url: 'https://media3.giphy.com/media/3orieNX1KVm2F03Dxu/giphy.gif?cid=d469d910ot4qnm7r6l0fq61k0fg9gvjedaeeiitwv5tfgpr4&rid=giphy.gif'
        },
        {
*/
export const getGifs = async (category) => {

  const apiKey = "eBHH7BLGeQviyhM8FyoIaVveWFeN72yl";
  const url = `https://api.giphy.com/v1/gifs/search?q=${encodeURI(category)}&limit=10&api_key=${apiKey}`;

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