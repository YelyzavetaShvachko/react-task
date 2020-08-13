import React from 'react';
import Header from './Header';
import MoviesList from './MoviesList';
import Footer from './Footer';
import ErrorFallback from './ErrorFallback';
import { ErrorBoundary } from 'react-error-boundary';

function App() {
  // Use Bomb to check ErrorBoundary
  // function Bomb() {
  //   throw new Error('💥 CABOOM 💥')
  // }

  return (
    <>
      <Header />
      <ErrorBoundary
        FallbackComponent={ErrorFallback}
      >
        {/* <Bomb />   */}
        <MoviesList />
      </ErrorBoundary>
      <Footer />
    </>
  );
}

export default App;