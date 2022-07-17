import { Component } from 'react';
import MarvelService from '../../services/MarvelService';
import Error from '../error/Error';

import './randomChar.scss';
import mjolnir from '../../resources/img/mjolnir.png';
import Spinner from '../components/Spinner';

class RandomChar extends Component {
    state = {
        char: {},
        loading: true,
        erorr: false
    }

    marvelService = new MarvelService ();

    
    onCharLoaded = (char) => {
        this.setState({
            char,
            loading: false
        })
    }
    
    onError = () => {
        this.setState({
            loading: false,
            error: true
        })
    }

    updateChar = () => {
        const id = Math.floor(Math.random() * (1 - 128) + 127);
        this.marvelService.getRickChar(id)
        .then(this.onCharLoaded)
        .catch(this.onError);
    }
    componentDidMount() {
        this.updateChar();
    }
    

    render () {
        const {char, loading, error} = this.state;
        const errorMessage = error ? <Error/> : null;
        const spinner = loading ? <Spinner/> : null;
        const content = !(loading || error) ? <View char={char}/> : null;


        return (
            <div className="randomchar">
                {errorMessage}
                {spinner}
                {content}
                <div className="randomchar__static">
                    <p className="randomchar__title">
                        Random character for today!<br/>
                        Do you want to get to know him better?
                    </p>
                    <p className="randomchar__title">
                        Or choose another one
                    </p>
                    <button className="button button__main" onClick={this.updateChar}>
                        <div className="inner">try it</div>
                    </button>
                    <img src={mjolnir} alt="mjolnir" className="randomchar__decoration"/>
                </div>
            </div>
        )
    }
}

const View = ({char}) => {
    const {name, species, status, gender, image, homepage, wiki} = char;

    return (
        <div className="randomchar__block">
            <img src={image} alt="Random character" className="randomchar__img"/>
            <div className="randomchar__info">
                <p className="randomchar__name">{name}</p>
                <div className="randomchar__descr">
                    <p>Species: {species}</p>
                    <p>Status: {status}</p> 
                    <p>Gender: {gender}</p>
                </div>
                <div className="randomchar__btns">
                    <a href={homepage} className="button button__main">
                        <div className="inner">homepage</div>
                    </a>
                    <a href={wiki} className="button button__secondary">
                        <div className="inner">Wiki</div>
                    </a>
                </div>
            </div>
        </div>
    )
}

export default RandomChar;