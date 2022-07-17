import React, {useEffect, useState} from 'react';

import MarvelService from '../../services/MarvelService';

import './charList.scss';


export function CharList() {

    const [state, setState] = useState([]);
    const marvelService = new MarvelService ();

    useEffect (() => {
        marvelService.getAllRickChar().then(res => setState(res.results));
    }, [])

    return (
        <div className="char__list">
            <ul className="char__grid">
               {state.map(item => (
                    <li className="char__item" key={item.id}>
                        <img src={item.image} alt={item.name}/>
                        <div className="char__name">{item.name}</div>
                    </li>
               )).splice(0, 9)}
            </ul>
            <button className="button button__main button__long">
                <div className="inner">load more</div>
            </button>
        </div>
    )
}


export default CharList;