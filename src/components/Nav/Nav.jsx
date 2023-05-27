import React, { useEffect } from 'react'
import './Nav.scss'
import { Link } from 'react-router-dom'

const Nav = ({query,setQuery,setMovies}) => {
    const api = 'https://api.tvmaze.com/search/shows?q='

    const getMovies = async () => {
        fetch(`${api}${query.split(' ').join('+')}`)
            .then((res) => res.json())
            .then((data) => {
                console.log(data);
                setMovies(data);
            })
            .catch((err) => {
                console.log(err.message);
            });
    }    

    useEffect(() => {
        const body = document.querySelector('body');
        const input = document.querySelector('#input');
        body.addEventListener('keydown',(e)=>{
            if (e.keyCode === 17){
                input.focus();
            }
        })
    },[])

    return (
        <>
            <nav class="navbar navbar-expand-lg bg-body-tertiary">
                <div class="container-fluid">
                    <Link class="navbar-brand ms-2" to="/">Quad B Movies</Link>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <div class="d-flex ms-auto">
                            <input class="form-control me-2" id='input' value={query} onKeyDown={(e)=>{if (e.keyCode === 13) {getMovies()}}} onChange={(e)=>{setQuery(e.target.value)}} type="search" placeholder="Press Ctrl to type" aria-label="Search"/>
                            {/* <button onClick={getMovies} class="btn btn-outline-success">Search</button> */}
                        </div>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Nav
