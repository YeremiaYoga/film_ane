import React from 'react';
import MovieCard from './components/MovieCard';
import { useEffect, useState } from 'react';
import './App.css';
import SearchIcon from './search.svg';

//e8732e06

// const API_URL= 'http://www.omdbapi.com/?apikey=[e8732e06]&'
const API_URL = 'http://www.omdbapi.com?apikey=e8732e06';

const App = () => {
    const [movies, setMovies] = useState([]);
    const [searchTerm, setSearchTerm] = useState('')

    const searchMovies = async (title) => {
        const response = await fetch(`${API_URL}&s=${title}`);
        const data = await response.json();

        setMovies(data.Search);

    }
    useEffect(() => {
        searchMovies('Spiderman');
    }, [])
    return (
        <div className='app'>
            <h1>Film Ane</h1>
            <div className='search'>
                <input placeholder='Monggo dicari' value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} />
                <img src={SearchIcon} alt='search' onClick={() => { searchMovies(searchTerm) }} />
            </div>
            {movies?.length > 0
                ? (
                    <div className='container'>
                        {movies.map((movie) => (
                            <MovieCard movie={movie} />
                        ))}
                    </div>
                ) : (
                    <div className='empty'>
                        <h2>Tidak ada film</h2>
                    </div>
                )
            }

        </div>
    );
}

export default App;