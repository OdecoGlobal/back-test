import React, { useEffect, useState } from 'react'
import axios from 'axios';
import requests from './Request'


const Main = () => {

    const [movies, setmovies] = useState([])

    const movie = movies[Math.floor(Math.random()* movies.length)]

    useEffect (() =>{
        axios.get(requests.requestTrending).then((response)=>{
            setmovies(response.data.results)
        })
        .catch((error) => {
            console.error('Error fetching data:', error);
        });
    },[])

    console.log ('Movie Data:', movies)


  return (
    <div className='w-full h-{550px} text-white'>

       {movies.length > 0 && (


         <div className='w-full h-full'>
            <img src={`https://api.themoviedb.org/t/p/original/${movie?.backdrop_path}`} alt={movie?.title} />
         </div>

        )}
    </div>
  )

}

export default Main;