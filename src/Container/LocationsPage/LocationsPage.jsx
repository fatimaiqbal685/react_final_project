import { useEffect, useState } from "react";
import MainLayout from "../MainLayout";
import PaginationComponent from "../Pagination/Pagination";

function LocationsPage() {
  const [locations, setLocations] = useState([]);
  const [pagination, setPagination] = useState({ count: 0 });
  const [currentPage, setCurrentPage] = useState(1);
  const [status, setStatus] = useState("idle");

  useEffect(() => {
    setStatus("loading");
    fetch(`https://rickandmortyapi.com/api/location?page=${currentPage}`)
      .then((res) => res.json())
      .then((data) => {
        setLocations(data.results);
        setPagination(data.info);
        setStatus("succeeded");
      })
      .catch(() => setStatus("failed"));
  }, [currentPage]);

  return (
    <MainLayout>
      <h2 className="page-title">All Locations</h2>
      {status === "loading" && (
        <p className="loading-text">Loading locations...</p>
      )}
      <div className="info-grid">
        {locations.map((location) => (
          <article key={location.id} className="info-card">
            <div className="info-card__icon">📍</div>
            <div className="info-card__content">
              <h3 className="info-card__name">{location.name}</h3>
              <div className="info-card__field">
                <p className="info-card__label">Type:</p>
                <p className="info-card__value">{location.type}</p>
              </div>
              <div className="info-card__field">
                <p className="info-card__label">Dimension:</p>
                <p className="info-card__value">{location.dimension}</p>
              </div>
              <div className="info-card__field">
                <p className="info-card__label">Residents:</p>
                <p className="info-card__value">
                  {location.residents.length} residents
                </p>
              </div>
            </div>
          </article>
        ))}
      </div>
      {pagination?.count > 20 && (
        <div className="pagination-wrapper">
          <PaginationComponent
            onChange={setCurrentPage}
            total={pagination.count}
            currentPage={currentPage}
          />
        </div>
      )}
    </MainLayout>
  );
}

export default LocationsPage;
