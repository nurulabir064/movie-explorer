function MovieCard({ movie, onSelect }) {
  const  image =
    movie.image?.medium ||
    "https://via.placeholder.com/210x295?text=No+Image";

  const summary = movie.summary
    ? movie.summary.replace(/<[^>]*>/g, "")
    : "No description available.";

  return (
    <article className="movie-card">
      <div className="movie-image">
        <img src={image} alt={movie.name} />
      </div>

      <div  className="movie-info">
        <h3>{movie.name}</h3>

        <div className="movie-meta">
          {movie.premiered && <span>{movie.premiered.slice(0, 4)}</span>}
          {movie.rating?.average && <span>★ {movie.rating.average}</span>}
        </div>

        <p>{summary.slice(0, 100)}...</p>
        <button onClick={() => onSelect(movie)}>View Details</button>
      </div>
    </article>
  );
}

export default MovieCard;