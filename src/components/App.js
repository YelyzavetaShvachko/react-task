import React, {useContext} from 'react';
import Header from './Header';
import MoviesList from './MoviesList';
import Footer from './Footer';
import ErrorFallback from './ErrorFallback';
import { ErrorBoundary } from 'react-error-boundary';
import { ModalProvider } from '../state/context';
import MovieDetails from './MovieDetails';
import {MovieContextProvider} from '../hooks/MovieContext';
import { MovieContext } from '../hooks/MovieContext';

function App() {
  // Use Bomb to check ErrorBoundary
  // function Bomb() {
  //   throw new Error('💥 CABOOM 💥')
  // }
  const movieData = useContext(MovieContext);
  return (
    <MovieContextProvider movieData={movieData}>
      <ModalProvider>
        <Header />
        <ErrorBoundary
          FallbackComponent={ErrorFallback}
        >
          <MovieDetails />
          {/* <Bomb />   */}
          <MoviesList />
        </ErrorBoundary>
        <Footer />
        {/* <ModalsList /> */}
      </ModalProvider>
    </MovieContextProvider>
  );
}

export default App;