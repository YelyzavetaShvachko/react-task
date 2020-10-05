import React, { useState } from 'react';
import { ModalProvider } from '../../state/context';

import Header from '../Header';
import MoviesList from '../MoviesList';
import Footer from '../Footer';
import ErrorFallback from '../ErrorFallback';
import { ErrorBoundary } from 'react-error-boundary';
import MovieDetails from '../MovieDetails';
import { HeaderContext } from '../../hooks/HeaderContext';

function HomePage() {
  // Use Bomb to check ErrorBoundary
  // function Bomb() {
  //   throw new Error('💥 CABOOM 💥')
  // }
  const [detailsVisibility, setDetailsVisibility] = useState(false);

  return (
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
      </HeaderContext.Provider>
    </ModalProvider>
  );
}

export default HomePage;