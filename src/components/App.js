import React from 'react';
import Header from './Header';
import MoviesList from './MoviesList';
import Footer from './Footer';
import ErrorFallback from './ErrorFallback';
import { ErrorBoundary } from 'react-error-boundary';
import { ModalProvider } from '../state/context';
import MovieDetails from './MovieDetails';

function App() {
  // Use Bomb to check ErrorBoundary
  // function Bomb() {
  //   throw new Error('💥 CABOOM 💥')
  // }

  return (
    <>
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
    </>
  );
}

export default App;