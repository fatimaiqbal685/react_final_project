import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import MainLayout from "../MainLayout";

function EpisodeDetail() {
  const { id } = useParams();
  const [episode, setEpisode] = useState(null);
  const [status, setStatus] = useState("idle");

  useEffect(() => {
    setStatus("loading");
    fetch(`https://rickandmortyapi.com/api/episode/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setEpisode(data);
        setStatus("succeeded");
      })
      .catch(() => setStatus("failed"));
  }, [id]);

  return (
    <MainLayout>
      <section className="page-banner">
        <h1 className="page-banner__title">Episode Details</h1>
      </section>

      {status === "loading" && <p className="loading-text">Loading episode...</p>}
      {status === "failed" && <p className="error-text">Failed to load episode.</p>}

      {episode && (
        <div className="info-grid">
          <article className="info-card">
            <div className="info-card__badge">{episode.episode}</div>
            <div className="info-card__content">
              <h3 className="info-card__name">{episode.name}</h3>
              <div className="info-card__field">
                <p className="info-card__label">Air Date</p>
                <p className="info-card__value">{episode.air_date}</p>
              </div>
              <div className="info-card__field">
                <p className="info-card__label">Characters</p>
                <div className="detail-tags">
                  {episode.characters.slice(0, 8).map((characterUrl) => {
                    const characterId = characterUrl.split("/").pop();
                    return (
                      <Link key={characterId} to={`/characters/${characterId}`} className="detail-link">
                        Character {characterId}
                      </Link>
                    );
                  })}
                </div>
              </div>
              <Link to="/episodes" className="app-nav__btn" style={{ marginTop: 16 }}>
                Back to all episodes
              </Link>
            </div>
          </article>
        </div>
      )}
    </MainLayout>
  );
}

export default EpisodeDetail;
