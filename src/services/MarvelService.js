
class MarvelService  {
    _apiBaseMarvel = 'https://gateway.marvel.com:443/v1/public/';
    _apiKeyMarvel = 'apikey=72a89f37113c6e156db92831f52133ad';
    _apiRAM = 'https://rickandmortyapi.com/api/character';


    getData = async (url) => {
        let res  = await fetch(url);

        if (!res.ok) {
            throw new Error(`Could not feth ${url}, status ${res.status}`);
        }

        return await res.json();
    } 

    getAllCharacters = async () => {
        const res = this.getData(`${this._apiBaseMarvek}characters?${this._apiKeyMarvel}`);
        return res.data.results.map(this._transformCharacter)
    }
    
    getCharacter = async (id) => {
        const res = await this.getData(`${this._apiBaseMarvel}characters/${id}?${this._apiKeyMarvel}`);
        return this._transformCharacter(res.data.results[0]);
    }
    
    getRickChar = async(id) => {
        return this.getData(`https://rickandmortyapi.com/api/character/${id}`);
    }

    getAllRickChar = async () => {
        const response = await fetch('https://rickandmortyapi.com/api/character');
        return await response.json();
        
    }
    _transformCharacter = (char) => {
        return  {
            id: char.id,
            name: char.name,
            description: char.description ? `${char.description.slice(0, 210)}...` : 'There is no description for this character',
            thumbnail: char.thumbnail.path + '.' + char.thumbnail.extesion,
            homepage: char.urls[0].url,
            wiki: char.urls[1].url
        }
    }
    _transformCharacterR = (char) => {
        return {
            id: char.id,
            name: char.name,
            image: char.image,
            male: char.male,
            species: char.species,
            status: char.status
        }
    }
}


export default MarvelService;