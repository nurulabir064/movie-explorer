import Hero from "../components/Hero";

function  Home() {
  return (
    <main>
      <Hero />

      <section className="home-section">
        <div className="container">
          <div className="section-heading">
            <p>ABOUT MOVIE EXPLORER</p>
            <h2>Find Something Worth Watching</h2>
          </div>

          <div className="feature-grid">
            <div className="feature-card">
              <h3>Search</h3>
              <p>
                Search through a large collection of movies and TV shows.
              </p>
            </div>

            <div className="feature-card">
              <h3>Explore</h3>
              <p>
                Browse movie cards and discover new shows to watch.
              </p>
            </div>
            <div className="feature-card">
              <h3>Details</h3>
              <p>
                Open any movie to see its rating, genres, summary and more.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Home;