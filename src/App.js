import { useEffect, useState } from 'react';
import MovieCard from './MovieCard';
import './index.css';
import './App.css';
import AddFavourites from './AddFavourites';
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
 

function App() {
  const API_URL =
    'https://api.themoviedb.org/3/movie/popular?api_key=767a7cc8de7d102579d3d1cf9acd65e8';
  const API_SEARCH =
    'https://api.themoviedb.org/3/search/movie?api_key=767a7cc8de7d102579d3d1cf9acd65e8&query='; // Add '=' at the end

  const [movies, setMovies] = useState([]);
  const [term, setTerm] = useState('');

  useEffect(() => {
    fetch(API_URL)
      .then((res) => res.json())
      .then((data) => {
        // Use slice(0, 10) to get only the first 10 movies
        const first10Movies = data.results.slice(0, 10);
        setMovies(first10Movies);
      });
  }, []);

  console.log(movies);

  const handleSearch = (e) => {
    e.preventDefault();

    fetch(API_SEARCH + term)
      .then((res) => res.json())
      .then((data) => setMovies(data.results));
  };

  return (
    <div className="App bg-custom-blue p-5 ">
      <div className='search_nav flex items-center justify-between'>
        
        <div className='flex mr-12 gap-4 items-center'>
        <a href="{App/}" className='flex mr-12 gap-4 items-center'>
        <img src="/images/moviebox_logo.png" alt="" />
          
        <h1 className='text-white text-3xl'>MovieBox</h1>
        </a>
          
        </div>

        <div className=' bg-white p-1 rounded-md'>
          <form onSubmit={handleSearch}>
            <input onChange={(e) => setTerm(e.target.value)} value={term} 
            placeholder='What do you want to watch?'
            className="border border-transparent focus:outline-none focus:ring-0 text-xm"
            />
            
            <button type="submit" className='ml-20  p-1.5 rounded-md hover:bg-black hover:text-white'>
            <FontAwesomeIcon icon={faMagnifyingGlass}/>
            </button>
          </form>
        </div>


        <div className="text-white items-center mr-2">
          <a href="/" className='mr-2 '>Sign in</a>
          <FontAwesomeIcon icon={faBars} className='p-2 bg-orange-600 rounded-full'/>
        </div>
      </div>

      <div className='movies grid grid-cols-5 mt-8'>
        {movies.map((movie) => (
          <MovieCard key={movie.id} {...movie} favouriteComponent = {AddFavourites}/>
        ))}
      </div>
    </div>
  );
}

export default App;
