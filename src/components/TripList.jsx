import React, { useEffect, useState } from 'react';
import { fetchTrips } from '../services/tripService';

const TripList = () => {
  const [trips, setTrips] = useState([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  useEffect(() => {
    const getTrips = async () => {
      try {
        const tripsData = await fetchTrips(page); 
        setTrips(tripsData);
        setTotalPages(Math.ceil(30 / 10));
      } catch (error) {
        console.error('Erro ao buscar viagens', error);
      }
    };

    getTrips();
    window.scrollTo(0, 0);
  }, [page]);

  const handleNextPage = () => {
    if (page < totalPages) {
      setPage(page + 1);
    }
  };

  const handlePreviousPage = () => {
    if (page > 1) {
      setPage(page - 1);
    }
  };

  return (
    <div>
      <h1 className="title-trips">Viagens Disponíveis</h1>
      <div className="cards-container">
        {trips.map((trip) => (
          <div key={trip.id} className="card">
            <h2>{trip.name}</h2>
            <p>Preço: R$ {trip.price}</p>
          </div>
        ))}
      </div>
      <div className="pagination-container">
        <button onClick={handlePreviousPage} disabled={page === 1}>
          Página Anterior
        </button>
        <span> Página {page} de {totalPages} </span>
        <button onClick={handleNextPage} disabled={page === totalPages}>
          Próxima Página
        </button>
      </div>
    </div>
  );
};

export default TripList;
