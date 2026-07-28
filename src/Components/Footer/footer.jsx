import { Link } from "react-router-dom";
import { selectVisitedProfile } from "../../app/features/characterSlice";
import { useSelector } from "react-redux";

const Footer = () => {
  const recentProfile = useSelector(selectVisitedProfile) || [];

  if (recentProfile.length === 0) return null;

  return (
    <footer className="footer-section">
      <h4>Recently visited profiles:</h4>
      <div className="footer-profiles">
        {recentProfile.slice(0, 10).map((profile) => (
          <Link key={profile.id} to={`/characters/${profile.id}`}>
            <img src={profile.image} alt={profile.name} />
          </Link>
        ))}
      </div>
    </footer>
  );
};

export default Footer;
