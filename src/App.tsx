import { useState, useCallback } from 'react';
import { RouterProvider } from 'react-router-dom';
import router from './router';
import { LoadingScreen } from './components';
import './styles/global.css';

function App() {
  const [isLoading, setIsLoading] = useState(true);

  const handleLoadingComplete = useCallback(() => {
    setIsLoading(false);
  }, []);

  return (
    <>
      {isLoading && (
        <LoadingScreen
          onLoadingComplete={handleLoadingComplete}
          duration={3250} // 3.25 seconds to match GIF length
        />
      )}
      <RouterProvider router={router} />
    </>
  );
}

export default App;
