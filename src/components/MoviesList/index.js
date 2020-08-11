import React from 'react';
import styled from 'styled-components';
import MovieCard from '../MovieCard';
import Categories from '../Categories';
import SearchResults from '../SearchResults';
import Sorting from '../Sorting';

// images
import AvengersImg from '../../assets/img/avengers.jpg';
import BohemianRhapsodyImg from '../../assets/img/bohemian-rhapsody.jpg';
import InceptionImg from '../../assets/img/inception.jpg';
import KillBillImg from '../../assets/img/kill-bill.jpg';
import PulpFictionImg from '../../assets/img/pulp-fiction.jpg';
import ReservoirDogsImg from '../../assets/img/reservoir-dogs.jpg';

let movies = [
  {
    title: 'Pulp Fiction',
    genre: 'Action & Adventure',
    year: '2004',
    photo: PulpFictionImg,
    id: '1'
  },
  {
    title: 'Bohemian Rhapsody',
    genre: 'Drama, Biography, Music',
    year: '2003',
    photo: BohemianRhapsodyImg,
    id: '2'
  },
  {
    title: 'Kill Bill: Vol 2',
    genre: 'Oscar winning movie',
    year: '1994',
    photo: KillBillImg,
    id: '3'
  },
  {
    title: 'Avengers: War of Infinity',
    genre: 'Action & Adventure',
    year: '2004',
    photo: AvengersImg,
    id: '4'
  },
  {
    title: 'Inception',
    genre: 'Action & Adventure',
    year: '2003',
    photo: InceptionImg,
    id: '5'
  },
  {
    title: 'Reservoir dogs',
    genre: 'Oscar winning movie',
    year: '1994',
    photo: ReservoirDogsImg,
    id: '6'
  }
];

const MoviesSection = styled.section`
    background-color: #232323;  
`;

const Navigation = styled.nav`
    border-bottom: 2px solid #4c4c4c;
    position:relative;
    display: flex;
    justify-content: space-between;

    &:after {
        content: "";
        display: block;
        height: 1px;
        width: 100%;
        background: #000000;
        position: absolute;
        bottom: -4px;
  }
`;

const MoviesWrapper = styled.div`
    display: flex;
    flex-wrap: wrap; 
    justify-content: space-between; 
`;

let StyledBlock = () => (
  <MoviesSection className='content'>
    <Navigation className='container'>
      <Categories />
      <Sorting />
    </Navigation>
    <SearchResults />
    <MoviesWrapper className='container'>
      {movies.map((movie) =>
        <MovieCard
          title={movie.title}
          genre={movie.genre}
          year={movie.year}
          photo={movie.photo}
          key={movie.id}
        />
      )}
    </MoviesWrapper>
  </MoviesSection>
);

export default StyledBlock;