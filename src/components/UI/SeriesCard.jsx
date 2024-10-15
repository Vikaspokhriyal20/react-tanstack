import React from 'react'
import { NavLink } from 'react-router-dom';
const SeriesCard = ({ currMovie }) => {
    const { name, rating, poster_url, genre, description, cast, watch_url } = currMovie;

    // const ratingofmovie = { rating <= 9 ? "superhit" : "hit"};
    return (
        <div className="movie-card">
            <div>
                <img
                    src={poster_url}
                    alt={name}
                    className='poster'
                    height='40%'
                    width='40%'
                />
            </div>
            <div className="movie-content">
                <h4>{name}</h4>
                <h5>Rating : <span className={`rating ${rating >= 9 ? 'superhit' : 'hit'} `}>{rating}</span></h5>
                <p>{description}</p>
                <p>Genre : {[genre].join(" ,")}</p>
                <p>Cast : {[cast].join(" ,")}</p>
            </div>

            <div className='watch-now'>
                <NavLink to={watch_url} target='_blank' className={`watch-btn ${rating >= 9 ? 'superhit' : 'hit'} `}>Watch</NavLink>
            </div>

        </div>
    )
}

export default SeriesCard
