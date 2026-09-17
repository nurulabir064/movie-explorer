function MovieModal({ movie, onClose }) {
  if (!movie) {
    return null;
  }

  const image =
    movie.image?.original ||
    movie.image?.medium ||
    "https://via.placeholder.com/300x420?text=No+Image";

  const summary = movie.summary
    ? movie.summary.replace(/<[^>]*>/g, "")
    : "No description available.";

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal" onClick={(event) => event.stopPropagation()}>
        <button className="modal-close" onClick={onClose}>
          ×
        </button>

        <div className="modal-image">
          <img src={image} alt={movie.name} />
        </div>


        <div className="modal-content">
          <h2>{movie.name}</h2>

          <div className="modal-meta">
            {movie.premiered && (
              <span>Premiered: {movie.premiered}</span>
            )}

            {movie.rating?.average && (
              <span>Rating: ★ {movie.rating.average}</span>
            )}

            {movie.runtime && <span>{movie.runtime} min</span>}
          </div>

          {movie.genres?.length > 0 && (
            <div className="genres">
              {movie.genres.map((genre) => (
                <span key={genre}>{genre}</span>
              ))}
            </div>
          )}

          <p>{summary}</p>

          {movie.network?.name && (
            <p>
              <strong>Network:</strong> {movie.network.name}
            </p>
          )}

          {movie.status && (
            <p>
              <strong>Status:</strong> {movie.status}
            </p>
          )}

          {movie.officialSite && (
            <a
              href={movie.officialSite}

              target="_blank"
              rel="noreferrer"
              className="official-link"
            >
              Official Site
            </a>
          )}
        </div>
      </div>
    </div>
  );
}

export default MovieModal;