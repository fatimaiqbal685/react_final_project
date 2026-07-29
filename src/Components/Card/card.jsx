import { Link } from "react-router-dom";

function Cards({ character }) {
  return (
    <article className="character-card character-card--simple">
      <img
        className="character-card__image"
        src={character.image}
        alt={character.name}
      />
      <div className="character-card__content character-card__content--simple">
        <h2 className="character-card__name">{character.name}</h2>
        <Link to={`/characters/${character.id}`} className="character-card__button">
          View details
        </Link>
      </div>
    </article>
  );
}

export default Cards;
