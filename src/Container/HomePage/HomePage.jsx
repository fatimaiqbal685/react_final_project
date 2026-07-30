import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import MainLayout from "../../Container/MainLayout";
import Cards from "../../Components/Card/card";
import PaginationComponent from "../../Container/Pagination/Pagination";
import { useDispatch, useSelector } from "react-redux";
import { fetchCharacters } from "../../app/features/characterSlice";

function HomePage() {
  const dispatch = useDispatch();
  const [currentPage, setCurrentPage] = useState(1);
  const [query, setQuery] = useState("");
  const { characters, pagination, status } = useSelector(
    (state) => state.character
  );

  useEffect(() => {
    dispatch(fetchCharacters({ page: 1 }));
  }, [dispatch]);

  const fetchCharacter = (page) => {
    setCurrentPage(page);
    dispatch(fetchCharacters({ page, query }));
  };

  const handleSearch = (e) => {
    const value = e.target.value;
    setQuery(value);
    setCurrentPage(1);
    dispatch(fetchCharacters({ page: 1, query: value }));
  };

  return (
    <>
      <section className="page-banner page-banner--home">
        <div className="page-banner__actions">
          <Link to="/" className="app-nav__btn">
            Back 
          </Link>
        </div>
        <h1 className="page-banner__title">All Characters</h1>
      </section>

      <MainLayout>
        {status === "loading..." && (
          <p className="loading-text">Loading characters...</p>
        )}
        <div className="character-grid">
          {characters?.map((character) => (
            <Cards key={character.id} character={character} />
          ))}
        </div>
        {pagination?.count > 20 && (
          <div className="pagination-wrapper">
            <PaginationComponent
              onChange={fetchCharacter}
              total={pagination?.count}
              currentPage={currentPage}
            />
          </div>
        )}
      </MainLayout>
    </>
  );
}

export default HomePage;
