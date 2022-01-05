
export const getGifs = async(category) => {
    //const url ='http://api.giphy.com/v1/gifs/search?api_key=MPdbdJlt8HGPn9eF3XDBF3QfoBDBbsAc&q=Naruto&limit=10';
    const url = `http://api.giphy.com/v1/gifs/search?api_key=7nMuO53nxUMRdZGUn1ubCTbgIUZwwYLD&q=${ encodeURI(category)}&limit=10`
    const resp = await fetch(url);
    const {data} = await resp.json();

    const gifs = data.map( img => {
        return{
            id: img.id,
            title: img.title,
            url: img.images?.downsized_medium.url
        }
    });

    return gifs;
}