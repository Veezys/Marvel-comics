
class MarvelService  {

    getData = async (url) => {
        let res  = await fetch(url);

        if (!res.ok) {
            throw new Error(`Could not feth ${url}, status ${res.status}`);
        }

        return await res.json();
    } 

    getAllCharacters = () => {
        return this.getData('https://gateway.marvel.com:443/v1/public/characters?apikey=72a89f37113c6e156db92831f52133ad');
    }
}


export default MarvelService;