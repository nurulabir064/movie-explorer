import { Link } from "react-router-dom";

function Hero() {
  return (
    <section className="hero">
      <div className="container hero-content">
        <div className="hero-text">
          <p className="hero-subtitle">DISCOVER YOUR NEXT FAVORITE SHOW</p>

          <h1>
            Explore Movies
            <span> You’ll Love</span>
          </h1>

          <p className="hero-description">
            Discover popular shows, search for your favorites, and explore
            detailed information about movies and TV shows.
          </p>

          <Link to="/movies" className="hero-button">
            Explore Movies
          </Link>
        </div>
      </div>
    </section>
  );
}

export default Hero;