import React, { useEffect, useState } from 'react'
import moviecontent from '../API/movieData.json';
import SeriesCard from '../components/UI/SeriesCard';

const Movie = () => {

    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);

    console.log(data);


    useEffect(() => {
        setData(moviecontent);
        setLoading(false);
    }, []);

    

    if (loading) {
        return (
            <div className='loading'>
                <p>Loading...</p>
            </div>
        )
    }

    return (
        <section>
            <div className="container">
                <h2 className='container-title'>Movies</h2>
                <div className="movie-container">
                    {data.map((currMovie , index) => {
                        return (
                            <SeriesCard currMovie={currMovie} key={index} />
                        )
                    })}
                </div>

            </div>
        </section>
    )
}

export default Movie
