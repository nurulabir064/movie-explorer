const API_URL = "https://api.tvmaze.com";

export const getMovies = async () => {
  const response = await fetch(`${API_URL}/shows`);

  if (!response.ok) {
    throw  new Error("Failed to  fetch movies");
  }

  return response.json();
};

export const searchMovies = async (query) => {
  const response = await fetch(
    `${API_URL}/search/shows?q=${encodeURIComponent(query)}`
  );

  if (!response.ok) {
    throw new Error("Failed to search  movies");
  }
  const data = await response.json();

  return data.map((item) => item.show);
};