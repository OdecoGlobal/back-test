import React from 'react';
import AddFavourites from './AddFavourites';

const MovieCard = (props) => {
    const API_IMG = "https://image.tmdb.org/t/p/w500/";

    return (
        <div data-testid='movie-card' className='card bg-card-color rounded-md m-4 drop-shadow-md relative transition-shadow hover:cursor-pointer hover:scale-110 hover:opacity-[.10]'>
            <div data-testid='movie-poster' className="poster">
                <img src={props.poster_path ? API_IMG + props.poster_path : "https://images.unsplash.com/photo-1588546506381-74592e9b8a2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1887&q=80"} alt="" />
            </div>

            <div className="info p-2 sm:text-xs md:text-base text-lg">
                <div className='flex justify-between'>
                    <p className='title text-white text-left' data-testid='movie-title'>{props.title}</p>
                    <p className='vote text-yellow-500'>{props.vote_average}</p>
                </div>

                <div>
                    <p className='release-date text-white p-1' data-testid='movie-release-date'>{props.release_date}</p>
                </div>

                <div className='absolute w-98 transition duration-150 ease-in bottom-0 text-base p-5 bg-black w-10 align-center opacity-0'>
                    <AddFavourites /> {/* Render the FavouriteComponent */}
                </div>
            </div>
        </div>
    );
};

export default MovieCard;
