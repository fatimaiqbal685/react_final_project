import { Link } from "react-router-dom";

function Cards({ character }) {
  const statusClass = {
    Alive: "character-card__status-dot--alive",
    Dead: "character-card__status-dot--dead",
    unknown: "character-card__status-dot--unknown",
  };

  return (
    <Link to={`/characters/${character.id}`}>
      <article className="character-card">
        <img
          className="character-card__image"
          src={character.image}
          alt={character.name}
        />
        <div className="character-card__content">
          <h2 className="character-card__name">{character.name}</h2>
          <div className="character-card__status">
            <span
              className={`character-card__status-dot ${statusClass[character.status] || statusClass.unknown}`}
            />
            <span>
              {character.status} - {character.species}
            </span>
          </div>
          <div className="character-card__field">
            <p className="character-card__label">Last known location:</p>
            <p className="character-card__value">{character.location.name}</p>
          </div>
          <div className="character-card__field">
            <p className="character-card__label">First seen in:</p>
            <p className="character-card__value">{character.origin.name}</p>
          </div>
        </div>
      </article>
    </Link>
  );
}

export default Cards;
