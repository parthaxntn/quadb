import React, { useEffect, useState } from 'react'
import './Summary.scss'
import { Link, useParams } from 'react-router-dom';
import { BsChevronLeft } from 'react-icons/bs';
import RegisterForm from '../RegisterForm/RegisterForm';

const Summary = () => {
    const params = useParams();
    const [movie, setMovie] = useState('')
    const [form, setForm] = useState(false)
    const api = `https://api.tvmaze.com/shows/${params.id}`;

    useEffect(() => {
        fetch(api).then((res) => res.json()).then((data) => {
            setMovie(data);
        })
    }, [])

    return (
        <div className='summary py-5'>
            {form ? <RegisterForm movie={movie} /> :''}
            {!form && movie ?
                (<div className='container p-5'>
                    <div className="title">
                        <Link to='/' className='text-decoration-none'><h2 className='text-dark heading text-start'><BsChevronLeft className='me-3' />{movie.name}</h2></Link>
                    </div>
                    <div className="content container text-start">
                        <div className="metadata">
                            <span className='summary_text' dangerouslySetInnerHTML={{ '__html': movie.summary }}></span>
                            <div className="infos d-flex flex-wrap ps-5">
                                <div className='mx-auto w-50 text-start my-2'>Premiered: {movie.premiered}</div>
                                <div className='mx-auto w-50 text-start my-2'>Ended: {movie.ended?movie.ended:'Ongoing'}</div>
                                <div className='mx-auto w-50 text-start my-2'>Ratings: {movie.rating.average?movie.rating.average:'N/A'}</div>
                                <div className='mx-auto w-50 text-start my-2'>Language: {movie.language}</div>
                                <div className='mx-auto w-50 text-start my-2'>Language: {movie.language}</div>
                                <div className='mx-auto w-50 text-start my-2 d-flex align-items-end'>Genres: {movie.genres.map((genre)=>{ return(<div className='ms-2 genre'>{genre},</div>) })}</div>
                                <div className='mx-auto w-50 text-start my-2'>Average Runtime: {movie.averageRuntime} minutes</div>
                                <div className='mx-auto w-50 text-start my-2'>Stream on:  {movie.webChannel?.name?movie.webChannel?.name:'N/A'}</div>
                                <button className='my-3 book' onClick={()=>{setForm(true)}}>Book a Ticket</button>
                            </div>
                        </div>
                        <img className="image" src={movie.image.original} />
                    </div>
                </div>
                )
                : ''}
        </div>
    )
}

export default Summary
