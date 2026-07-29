import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import MainLayout from "../MainLayout";

function LocationDetail() {
  const { id } = useParams();
  const [location, setLocation] = useState(null);
  const [status, setStatus] = useState("idle");

  useEffect(() => {
    setStatus("loading");
    fetch(`https://rickandmortyapi.com/api/location/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setLocation(data);
        setStatus("succeeded");
      })
      .catch(() => setStatus("failed"));
  }, [id]);

  return (
    <MainLayout>
      <section className="page-banner">
        <h1 className="page-banner__title">Location Details</h1>
      </section>

      {status === "loading" && <p className="loading-text">Loading location...</p>}
      {status === "failed" && <p className="error-text">Failed to load location.</p>}

      {location && (
        <div className="info-grid">
          <article className="info-card">
            <div className="info-card__icon">📍</div>
            <div className="info-card__content">
              <h3 className="info-card__name">{location.name}</h3>
              <div className="info-card__field">
                <p className="info-card__label">Type</p>
                <p className="info-card__value">{location.type || "Unknown"}</p>
              </div>
              <div className="info-card__field">
                <p className="info-card__label">Dimension</p>
                <p className="info-card__value">{location.dimension || "Unknown"}</p>
              </div>
              <div className="info-card__field">
                <p className="info-card__label">Residents</p>
                <p className="info-card__value">{location.residents.length} resident(s)</p>
              </div>
              {location.residents.length > 0 && (
                <div className="info-card__field">
                  <p className="info-card__label">Residents</p>
                  <div className="detail-tags">
                    {location.residents.slice(0, 8).map((residentUrl) => {
                      const residentId = residentUrl.split("/").pop();
                      return (
                        <Link key={residentId} to={`/characters/${residentId}`} className="detail-link">
                          Character {residentId}
                        </Link>
                      );
                    })}
                  </div>
                </div>
              )}
              <Link to="/locations" className="app-nav__btn" style={{ marginTop: 16 }}>
                Back to all locations
              </Link>
            </div>
          </article>
        </div>
      )}
    </MainLayout>
  );
}

export default LocationDetail;
