import { BrowserRouter, Routes, Route } from "react-router-dom";
import LandingPage from "./Container/LandingPage/LandingPage";
import HomePage from "./Container/HomePage/HomePage";
import EpisodesPage from "./Container/EpisodesPage/EpisodesPage";
import LocationsPage from "./Container/LocationsPage/LocationsPage";
import Profile from "./Container/Profile/Profile";
import Footer from "./Components/Footer/footer";
import Header from "./Components/Header/header";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/characters" element={<HomePage />} />
        <Route path="/episodes" element={<EpisodesPage />} />
        <Route path="/locations" element={<LocationsPage />} />
        <Route path="/characters/:id" element={<Profile />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
