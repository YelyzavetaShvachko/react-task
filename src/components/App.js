import React, { useContext, useState } from 'react';
import Header from './Header';
import MoviesList from './MoviesList';
import Footer from './Footer';
import ErrorFallback from './ErrorFallback';
import { ErrorBoundary } from 'react-error-boundary';
import { ModalProvider } from '../state/context';
import MovieDetails from './MovieDetails';
import { MovieContextProvider } from '../hooks/MovieContext';
import { HeaderContext } from '../hooks/HeaderContext';
import { MovieContext } from '../hooks/MovieContext';
import { Provider } from 'react-redux';
import store from '../store/store';

function App() {
  // Use Bomb to check ErrorBoundary
  // function Bomb() {
  //   throw new Error('💥 CABOOM 💥')
  // }
  const movieData = useContext(MovieContext);
  const [detailsVisibility, setDetailsVisibility] = useState(false);

  return (
    <Provider store={store}>
      <MovieContextProvider movieData={movieData}>
        <ModalProvider>
          <HeaderContext.Provider value={{ detailsVisibility, setDetailsVisibility }}>
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
          </HeaderContext.Provider>
        </ModalProvider>
      </MovieContextProvider>
    </Provider>
  );
}

export default App;