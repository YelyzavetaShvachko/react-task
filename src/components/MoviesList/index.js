import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { requestMovies, successMovies, failMovies } from '../../store/actions/actionCreators';
// import { moviesList } from '../../store/selectors/selectors'

import { MoviesSection, Navigation, MoviesWrapper } from '../styled.js';
import MovieCard from '../MovieCard';
import Categories from '../Categories';
import SearchResults from '../SearchResults';
import Sorting from '../Sorting';

// let movies = [
//   {
//     title: 'Pulp Fiction',
//     genre: 'Oscar winning movie',
//     year: '1994',
//     photo: PulpFictionImg,
//     description: 'Pulp Fiction is a 1994 American neo-noir black comedy crime film written and directed by Quentin Tarantino, who conceived it with Roger Avary.[4] Starring John Travolta, Samuel L. Jackson, Bruce Willis, Tim Roth, Ving Rhames, and Uma Thurman, it tells several stories of criminal Los Angeles. The title refers to the pulp magazines and hardboiled crime novels popular during the mid-20th century, known for their graphic violence and punchy dialogue.',
//     duration: '134 min',
//     raiting: '6.3',
//     id: '1'
//   },
//   {
//     title: 'Bohemian Rhapsody',
//     genre: 'Drama, Biography, Music',
//     year: '2018',
//     photo: BohemianRhapsodyImg,
//     description: 'Bohemian Rhapsody is a 2018 biographical drama film about Freddie Mercury, the lead singer of the British rock band Queen. It was directed by Bryan Singer[a] from a screenplay by Anthony McCarten, and produced by Graham King and Queen manager Jim Beach. It stars Rami Malek as Mercury, with Lucy Boynton, Gwilym Lee, Ben Hardy, Joe Mazzello, Aidan Gillen, Tom Hollander, Allen Leech, and Mike Myers in supporting roles.',
//     duration: '134 min',
//     raiting: '5.2',
//     id: '2'
//   },
//   {
//     title: 'Kill Bill: Vol 2',
//     genre: 'Oscar winning movie',
//     year: '2004',
//     photo: KillBillImg,
//     description: 'Kill Bill: Volume 2 is a 2004 American martial arts film written and directed by Quentin Tarantino. It stars Uma Thurman as the Bride, who continues her campaign of revenge against the Deadly Viper Assassination Squad (Lucy Liu, Michael Madsen, Daryl Hannah, and Vivica A. Fox) and their leader Bill (David Carradine), who tried to kill her and her unborn child.',
//     duration: '136 min',
//     raiting: '4.8',
//     id: '3'
//   },
//   {
//     title: 'Avengers: War of Infinity',
//     genre: 'Action & Adventure',
//     year: '2018',
//     photo: AvengersImg,
//     description: '"Avengers: Infinity War" brings to the screen the ultimate, deadliest showdown of all time. As the Avengers and their allies have continued to protect the world from threats too large for any one hero to handle, a new danger has emerged from the cosmic shadows: Thanos.',
//     duration: '149 min',
//     raiting: '6.8',
//     id: '4'
//   },
//   {
//     title: 'Inception',
//     genre: 'Action & Adventure',
//     year: '2010',
//     photo: InceptionImg,
//     description: 'Dom Cobb is a skilled thief, the absolute best in the dangerous art of extraction, stealing valuable secrets from deep within the subconscious during the dream state, when the mind is at its most vulnerable. Cobbs rare ability has made him a coveted player in this treacherous new world of corporate espionage, but it has also made him an international fugitive and cost him everything he has ever loved.',
//     duration: '148 min',
//     raiting: '7.4',
//     id: '5'
//   },
//   {
//     title: 'Reservoir dogs',
//     genre: 'Oscar winning movie',
//     year: '1992',
//     photo: ReservoirDogsImg,
//     description: 'Six criminals, who are strangers to each other, are hired by a crime boss, Joe Cabot, to carry out a diamond robbery. Right at the outset, they are given false names with the intention that they wont get too close and will concentrate on the job instead. They are completely sure that the robbery is going to be a success.',
//     duration: '99 min',
//     raiting: '5.7',
//     id: '6'
//   }
// ];

const MoviesList = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(requestMovies());
    fetch('http://localhost:4000/movies')
      .then(res => res.json())
      .then(movies => dispatch(successMovies(movies.data)))
      .catch(() => failMovies());
  }, []);

  // const mapStateToProps = (state) => ({
  //   movies: moviesList(state)
  // });

  //селекторы отдельно в стор выделить в файлик
  const movies = useSelector(state => state.app.movies);
  console.log('movies', movies);
  return (
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
            genre={movie.tagline}
            genresList={movie.genres.join(', ')}
            year={movie.release_date}
            photo={movie.poster_path}
            description={movie.overview}
            duration={`${movie.runtime} min`}
            raiting={movie.vote_average}
            key={movie.id}
          />
        )}
      </MoviesWrapper>
    </MoviesSection>
  );
};

export default MoviesList;