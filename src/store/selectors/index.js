export const moviesList = state => state.moviesData.movies || [];
export const genre = state => state.activeGenre;
export const movieId = state => state.activeMovie.id;
export const filteredMoviesList = state => state.filteredMovies || [];

