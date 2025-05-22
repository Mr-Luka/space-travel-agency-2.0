import './Destinations.css';
import { Link } from 'react-router-dom';

export default function Destinations({ planetName, planetWelcome, species, planetVideo }) {
  const getDestinationLink = (name) => {
    switch (name.toLowerCase()) {
      case 'exodus':
        return '/exodus';
      case 'mars':
        return '/mars';
      case 'plantia':
        return '/plantia';
      default:
        return '/destinations';
    }
  };

  return (
    <div className="destination-card">
    <div className="video-destinations">
        <video id="destinations-video" autoPlay loop muted playsInline>
          <source src={planetVideo} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
      <div className="text">
        <p className="sub-heading">Destination:</p>
        <h1 className="title-destination">{planetName}</h1>
        <p className="planet-preview-p">
          {planetWelcome}
          <br />
          Main Species: {species}
        </p>
        <Link to={getDestinationLink(planetName)} className="article-link">
          More Info
        </Link>
      </div>
    </div>
  );
}
