import { BrowserRouter, Routes,Route } from "react-router-dom";
import HomePage from "./Container/HomePage/HomePage"
import Profile from "./Container/Profile/Profile"
import Footer from "./Components/Footer/footer";
import Header from "./Components/Header/header";
import { useState, useEffect } from "react";
function App() {
   const [characters, setCharacters] = useState([]);
    useEffect(() => {
        const fetchCharacters = async () => {
            try {
                const response = await fetch('https://rickandmortyapi.com/api/character');
                const data = await response.json();
                console.log(data, "data from app");
                setCharacters(data.results);
            } catch (error) {
                console.error('Error fetching characters:', error);
                alert("No internet connection!");
            }
        };
        fetchCharacters();

    }, [])

  return (
<>

  <Header/> 
<BrowserRouter>
<Routes>
  <Route path="/" element={<HomePage characters={characters}/>}  />
    <Route path="/characters/:id" element={<Profile characters={characters}/>} />

</Routes>
</BrowserRouter>
<Footer/>
</>
  )
}

export default App
