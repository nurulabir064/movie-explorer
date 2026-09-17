function SearchBar({ searchTerm, onSearch }) {
  return (

    <div className="search-box">
      <input
        type="text"
        value={searchTerm}
        onChange={(event) => onSearch(event.target.value)}
        placeholder="Search for a movie or TV show..."
      />

    </div>
  );
} 

export default SearchBar;