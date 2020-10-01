// export const moviesList = state => state.activeGenre.title === "all"
//     ? (state.moviesData.movies || []).sort((a, b) => parseFloat(b[state.sortingValue.sortingBy]) - parseFloat(a[state.sortingValue.sortingBy]))
//     : (state.moviesData.movies || [])
//         .filter(movie => movie.genres.map(genre => genre.toLowerCase()).includes(state.activeGenre.title))
//         .sort((a, b) => parseFloat(b[state.sortingValue.sortingBy]) - parseFloat(a[state.sortingValue.sortingBy]));

export const moviesList = state => {
  const sortingBy = state.sortingValue.sortingBy;
  const filterBy = state.activeGenre.title;
  const filteredMovies = filterBy === 'all'
    ? (state.moviesData.movies || [])
    : (state.moviesData.movies || [])
      .filter(m => m.genres.map(g => g.toLowerCase()).includes(filterBy));

  return [...filteredMovies].sort((a, b) => parseFloat(b[sortingBy]) - parseFloat(a[sortingBy]));
};
export const genre = state => state.activeGenre;
export const movieId = state => state.activeMovie.id;

