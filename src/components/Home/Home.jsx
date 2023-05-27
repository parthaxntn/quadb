import React, { useEffect, useState } from 'react'
import './Home.scss'
import Nav from '../Nav/Nav'
import axios from 'axios';
import { Link } from 'react-router-dom';

const Home = () => {
    const [query, setQuery] = useState('');
    const [movies, setMovies] = useState('');



    return (
        <>
            <Nav query={query} setMovies={setMovies} setQuery={setQuery} />
            <div className="hero w-100 bg-success">
                <div className="text_box"></div>
                <div className="text">Quad B</div>
            </div>
            <div className="searchRes">
                <h3 className='pt-5 heading'>Search Results</h3>
                <div className="cards container">
                    {movies ? movies.map((movie) => {
                        return (
                            <Link to={`/summary/${movie.show.id}/${query}`} className="card">
                                <img src={movie.show.image ? movie.show.image.medium : 'https://upload.wikimedia.org/wikipedia/commons/6/65/No-Image-Placeholder.svg'} className='image' alt='thumbnail' />
                                {/* {movie.show.name} */}
                                <div className="text mx-3">
                                    <h3>{movie.show.name}</h3>
                                    <p dangerouslySetInnerHTML={{ '__html': movie.show.summary.slice(0, 150) + `${movie.show.summary.length > 150 ? '...' : ''}` }}></p>
                                </div>
                            </Link>
                        )
                    }
                    ) : (
                        <div className="text-center text-dark d-flex opacity-50 flex-column m-auto my-2 fs-3">
                            <img src="/images/empty_search.webp" alt="" className="empty_search" />
                            <div className="">Search for Movies and TV Shows</div>
                        </div>
                    )}
                </div>
            </div>
        </>
    )
}

export default Home
