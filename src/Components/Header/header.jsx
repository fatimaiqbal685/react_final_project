import { Link, useLocation } from "react-router-dom";

function Header() {
  const location = useLocation();
  const isActive = (path) => location.pathname === path;

  return (
    <header className="app-header">
      <nav className="app-nav">
        <Link to="/characters" className="app-nav__logo">
          <img
            src="https://rickandmortyapi.com/icon.jpeg"
            alt="Rick and Morty"
          />
          <span className="app-nav__brand">Rick & Morty</span>
        </Link>
        <div className="app-nav__links">
          <Link
            to="/episodes"
            className={`app-nav__btn ${isActive("/episodes") ? "app-nav__btn--active" : ""}`}
          >
            All Episodes
          </Link>
          <Link
            to="/locations"
            className={`app-nav__btn ${isActive("/locations") ? "app-nav__btn--active" : ""}`}
          >
            All Locations
          </Link>
        </div>
      </nav>
    </header>
  );
}

export default Header;
