import { createContext, useState } from 'react';

const MovieContext = createContext();

const MovieProvider = ({ children }) => {
  const [seats, setSeats] = useState([]);
  const [occupied, setOccupied] = useState([]);
  const [ticket, setTicket] = useState([]);
  const [selectedDate, setSelectedDate] = useState('');

  return (
    <MovieContext.Provider
      value={{
        seats,
        setSeats,
        occupied,
        setOccupied,
        ticket,
        setTicket,
        selectedDate,
        setSelectedDate,
      }}
    >
      {children}
    </MovieContext.Provider>
  );
};

export { MovieContext, MovieProvider };
