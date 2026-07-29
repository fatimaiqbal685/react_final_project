import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
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
      <section className="page-banner page-banner--home">
        <div className="page-banner__actions">
          <Link to="/" className="app-nav__btn">
            Back 
          </Link>
        </div>
      
       
      </section>
      {status === "loading" && (
        <p className="loading-text">Loading locations...</p>
      )}
      <div className="info-grid">
        {locations.map((location) => (
          <Link
            key={location.id}
            to={`/locations/${location.id}`}
            className="info-card-link"
          >
            <article className="info-card info-card--location">
              <div className="info-card__icon">📍</div>
              <div className="info-card__content">
                <h3 className="info-card__name">{location.name}</h3>
                <p className="info-card__description">{location.type} · {location.dimension}</p>
                <div className="info-card__field info-card__field--inline">
                  <p className="info-card__label">Residents</p>
                  <p className="info-card__value">{location.residents.length}</p>
                </div>
              </div>
              <div className="info-card__footer">
                <span className="info-card__pill">{location.type || "Unknown"}</span>
              </div>
            </article>
          </Link>
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
