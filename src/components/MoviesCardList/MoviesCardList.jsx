import './MoviesCardList.css'
import {MoviesCard} from "../MoviesCard/MoviesCard";
import React from "react";
import {MoviesContext} from "../context/MoviesContext";


export const MoviesCardList = () => {

    const {searchQuery, showedFilms} = React.useContext(MoviesContext)

    return (
        <section className='movies-cards'>
            <ul className='movies-cards__list'>
                {searchQuery && showedFilms?.map(movie => {
                    return (
                        <MoviesCard key={movie.id} movie={movie}/>
                    )
                })}
            </ul>
        </section>
    )
}
