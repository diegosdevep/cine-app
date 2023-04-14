import { createContext, useState } from 'react';

const MovieContext = createContext();

const MovieProvider = ({ children }) => {
  const [seats, setSeats] = useState([]);

  return (
    <MovieContext.Provider value={{ seats, setSeats }}>
      {children}
    </MovieContext.Provider>
  );
};

export { MovieContext, MovieProvider };
