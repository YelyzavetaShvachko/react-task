import React, { useContext } from 'react';
import SearchIcon from '../SearchIcon';
import { HeaderContext } from '../../hooks/HeaderContext';

const MovieDetailsSearch = () => {
  const { detailsVisibility, setDetailsVisibility } = useContext(HeaderContext);

  return (
    <div onClick={() => {
      setDetailsVisibility(false);
      console.log('detailsVisibility on search click', detailsVisibility);
    }}>
      <SearchIcon />
    </div>
  );
};

export default MovieDetailsSearch;