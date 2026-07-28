import { useEffect, useState } from "react";
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
    
      <h2 className="page-title">All Episodes</h2>
      {status === "loading" && (
        <p className="loading-text">Loading episodes...</p>
      )}
      <div className="info-grid">
        {episodes.map((episode) => (
          <article key={episode.id} className="info-card">
            <div className="info-card__badge">{episode.episode}</div>
            <div className="info-card__content">
              <h3 className="info-card__name">{episode.name}</h3>
              <div className="info-card__field">
                <p className="info-card__label">Air date:</p>
                <p className="info-card__value">{episode.air_date}</p>
              </div>
              <div className="info-card__field">
                <p className="info-card__label">Characters:</p>
                <p className="info-card__value">
                  {episode.characters.length} characters
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

export default EpisodesPage;
