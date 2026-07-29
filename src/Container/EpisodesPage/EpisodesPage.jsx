import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import MainLayout from "../MainLayout";
import PaginationComponent from "../Pagination/Pagination";

function EpisodesPage() {
  const [episodes, setEpisodes] = useState([]);
  const [pagination, setPagination] = useState({ count: 0 });
  const [currentPage, setCurrentPage] = useState(1);
  const [status, setStatus] = useState("idle");

  useEffect(() => {
    setStatus("loading");
    fetch(`https://rickandmortyapi.com/api/episode?page=${currentPage}`)
      .then((res) => res.json())
      .then((data) => {
        setEpisodes(data.results);
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
            Back to Landing Page
          </Link>
        </div>
        <h1 className="page-banner__title">All Episodes</h1>
        <p className="page-banner__subtitle">
          Browse episodes in a polished dashboard-style layout for fast scanning.
        </p>
      </section>
      {status === "loading" && (
        <p className="loading-text">Loading episodes...</p>
      )}
      <div className="info-grid">
        {episodes.map((episode) => (
          <Link key={episode.id} to={`/episodes/${episode.id}`} className="info-card-link">
            <article className="info-card info-card--episode">
              <div className="info-card__badge">{episode.episode}</div>
              <div className="info-card__content">
                <h3 className="info-card__name">{episode.name}</h3>
                <p className="info-card__description">Aired {episode.air_date}</p>
                <div className="info-card__field info-card__field--inline">
                  <p className="info-card__label">Characters</p>
                  <p className="info-card__value">{episode.characters.length}</p>
                </div>
              </div>
              <div className="info-card__footer">
                <span className="info-card__pill">{episode.episode}</span>
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

export default EpisodesPage;
