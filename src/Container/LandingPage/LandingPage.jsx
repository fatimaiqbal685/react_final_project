import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import MainLayout from "../MainLayout";
import Cards from "../../Components/Card/card";
import { fetchCharacters } from "../../app/features/characterSlice";

function LandingPage() {
  const dispatch = useDispatch();
  const { characters, status } = useSelector((state) => state.character);

  useEffect(() => {
    dispatch(fetchCharacters({ page: 1 }));
  }, [dispatch]);

  const previewCharacters = characters?.slice(0, 2) ?? [];

  return (
    <>
      <section className="app-hero">
      <h1 className="app-hero__title">The Rick and Morty Website</h1>
        <Link to="/characters" className="app-hero__link">
        View All Characters
         
        </Link>
      </section>

      <MainLayout>
        {status === "loading..." && (
          <p className="loading-text">Loading characters...</p>
        )}
        <div className="character-grid character-grid--landing">
          {previewCharacters.map((character) => (
            <Cards key={character.id} character={character} />
          ))}
        </div>
      
      </MainLayout>
    </>
  );
}

export default LandingPage;
