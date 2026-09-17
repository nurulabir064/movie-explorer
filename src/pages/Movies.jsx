import { useEffect, useState } from "react";
import SearchBar from "../components/SearchBar";
import MovieGrid from "../components/MovieGrid";
import MovieModal from "../components/MovieModal";
import { getMovies, searchMovies } from "../services/movieApi";

function Movies() {
  const  [movies, setMovies] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [selectedMovie, setSelectedMovie] = useState(null);

  useEffect(() => {
    const loadMovies = async () => {
      try {
        setLoading(true);
        setError("");

        const data = await getMovies();
        setMovies(data);
      } catch (error) {
        setError("Something went wrong  while loading movies.");
      } finally {
        setLoading(false);
      }
    };

    loadMovies();
  }, []);

  const handleSearch = async (value) => {
    setSearchTerm(value);
    if (!value.trim()) {
      try {
        setLoading(true);
        setError("");

        const data = await getMovies();
        setMovies(data);
      } catch (error) {
        setError("Something went wrong while loading movies.");
      } finally {
        setLoading(false);
      }

      return;
    }
    try {
      setLoading(true);
      setError("");

      const data = await searchMovies(value);
      setMovies(data);
    } catch (error) {
      setError("Something went wrong while searching.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="movies-page">
      <div className="container">
        <div className="movies-header">
          <div>
            <p className="page-subtitle">MOVIE LIBRARY</p>
            <h1>Explore Movies & Shows</h1>
            <p>
              Search for your favorite movies and TV shows.
            </p>
          </div>

          <SearchBar
            searchTerm={searchTerm}
            onSearch={handleSearch}
          />
        </div>

        {loading && (
          <div className="status-message">
            <p>Loading movies...</p>
          </div>
        )}

        {!loading && error && (
          <div className="status-message error-message">
            <p>{error}</p>
          </div>
        )}

        {!loading && !error && movies.length === 0 && (
          <div className="status-message">
            <p>No movies found.</p>
          </div>
        )}

        {!loading && !error && movies.length > 0 && (
          <MovieGrid
            movies={movies}
            onSelect={setSelectedMovie}
          />
        )}
      </div>

      <MovieModal
        movie={selectedMovie}
        onClose={() => setSelectedMovie(null)}
      />
    </main>
  );
}

export default Movies;