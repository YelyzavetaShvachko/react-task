import React, { useState } from 'react';
import Header from './Header';
import MoviesList from './MoviesList';
import Footer from './Footer';
import ErrorFallback from './ErrorFallback';
import { ErrorBoundary } from 'react-error-boundary';
import { ModalProvider } from '../state/context';
import MovieDetails from './MovieDetails';
import { HeaderContext } from '../hooks/HeaderContext';
import { Provider } from 'react-redux';
import store from '../store/store';
import PageNotFound from './PageNotFound';

function App() {
  // Use Bomb to check ErrorBoundary
  // function Bomb() {
  //   throw new Error('💥 CABOOM 💥')
  // }
  const [detailsVisibility, setDetailsVisibility] = useState(false);

  return (
    <Provider store={store}>
      <ModalProvider>
        <HeaderContext.Provider value={{ detailsVisibility, setDetailsVisibility }}>
          <PageNotFound />
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
    </Provider>
  );
}

export default App;