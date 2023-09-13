import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';

const AddFavourites = () => {
  return (
    <>
      <span className='mr-2'>
        Add to Favourites
        <FontAwesomeIcon icon={faHeart} />
      </span>
    </>
  );
};

export default AddFavourites;
