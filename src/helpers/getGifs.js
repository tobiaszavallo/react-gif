import axios from 'axios';

export const getGifs = async ( category ) => {
    const url = `https://api.giphy.com/v1/gifs/search?api_key=CR5Zbqz550eXUm5R02u3lwABS7kWvrdk&q=${ category }&limit=10`;
    const response = await axios.get( url );
    const { data } = response;

    //console.log(data.data);
    const gifs = data.data.map( img => ({
        id: img.id,
        title: img.title,
        url: img.images.downsized_medium.url
    }));

    return gifs;
}


// api end-point: api.giphy.com/v1/gifs/search	
// api_key: CR5Zbqz550eXUm5R02u3lwABS7kWvrdk
// q: el query 
// api.giphy.com/v1/gifs/search?api_key=CR5Zbqz550eXUm5R02u3lwABS7kWvrdk&q=valorant