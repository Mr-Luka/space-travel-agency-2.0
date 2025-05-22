import AroundTheWorldHomePage from '../../../public/home-page.mp4';
import { Link } from 'react-router-dom';
import { PLANETS } from '../Planets/planets.js';
import Destinations from './Destinations/Destinations';
import './HomePage.css';

export default function HomePage({ showDestinations, userName = "Explorer" }) {
  return (
    <div className="wrapper-home">
      {!showDestinations && (
        <div className="video-home">
        <video id="home-video" autoPlay loop muted playsInline>
          <source src={AroundTheWorldHomePage} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
      )}
      <header className="header">
        <div className="welcome-universe-tour">
          <h1>Universe TourX</h1>
        </div>
        <nav className="nav-bar">
          <ul className="nav-ul">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/destinations">Destinations</Link></li>
            <li><Link to="/crew">Crew</Link></li>
            <li><Link to="/technology">Technology</Link></li>
          </ul>
        </nav>
      </header>

      {!showDestinations && (
        <div className="welcome-name">
          <h2>{userName}<br /><span>Welcome</span><br />to <span id="your">YOUR</span> journey</h2>
        </div>
      )}

      {showDestinations && (
        <section className="destinations">
          {PLANETS.map((planet, index) => (
            <Destinations
              key={index}
              planetVideo={planet.planetVideo}
              planetName={planet.planet}
              planetWelcome={planet.planetWelcome}
              species={planet.species}
            />
          ))}
        </section>
      )}
    </div>
  );
}
