import React, { useState } from 'react'
import './Home.scss'
import Nav from '../Nav/Nav'

const Home = () => {
    const [query, setQuery] = useState('');
  return (
    <>
      <Nav query={query} setQuery={setQuery}/>
      <div className="hero w-100 bg-success">

      </div>
      <div className="searchRes">
        
      </div>
    </>
  )
}

export default Home
