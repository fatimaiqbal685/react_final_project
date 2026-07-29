import { Link, useLocation } from "react-router-dom";

function Header() {
  const location = useLocation();
  const isActive = (path) => location.pathname === path;

  return (
    <header className="app-header">
      <nav className="app-nav">
        <span className="app-nav__brand">Rick & Morty</span>

        <div className="app-nav__actions">
          <button type="button" className="app-nav__search-btn">
            Search
          </button>
          <button type="button" className="app-nav__icon-btn" aria-label="Search">
            🔍
          </button>
        </div>

        <div className="app-nav__links">
          <Link to="/characters" className={`app-nav__btn ${isActive("/characters") ? "app-nav__btn--active" : ""}`}>
            View All Characters
          </Link>
          <Link
            to="/episodes"
            className={`app-nav__btn ${isActive("/episodes") ? "app-nav__btn--active" : ""}`}
          >
            Get All Episodes
          </Link>
          <Link
            to="/locations"
            className={`app-nav__btn ${isActive("/locations") ? "app-nav__btn--active" : ""}`}
          >
            Get All Locations
          </Link>
        </div>
      </nav>
    </header>
  );
}

export default Header;
