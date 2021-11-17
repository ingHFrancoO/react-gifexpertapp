export const getGifs = async( category ) => {
    const url = `https://api.giphy.com/v1/gifs/search?q=${ encodeURI( category )}&limit=10&api_key=xDwoC4CUBxU1YXrY90ZvorNGNfEA2SNA`;

    //LLAMAR ENDPOINT
    const resp = await fetch( url );
    const { data } = await resp.json();
    //Extraer informacion
    const gifs = data.map( img => {
        return {
            id: img.id,
            title: img.title,
            url: img.images?.downsized_medium.url //Si trae imagen se almacena en variable, coso contrario NO
        }
    });
    //console.log(gifs);
    return gifs;
}