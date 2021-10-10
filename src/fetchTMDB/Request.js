const API_KEY = "46b1c229eb7d889b0f303f2748a72e69";

const request = {
    fetchTrending: `/trending/all/week?api_key=${API_KEY}&language=en-US`,
    fetchNetflixOriginal: `/discover/tv?api_key=${API_KEY}&with_networks=213`,
    fetchTopRated: `/movie/top_rated?api_key=${API_KEY}`,
    fetchAction: `/discover/movie?api_key=${API_KEY}&with_genres=28`,
    fetchComedy: `/discover/movie?api_key=${API_KEY}&with_genres=35`,
    fetchHorror: `/discover/movie?api_key=${API_KEY}&with_genres=27`,
    fetchRomance: `/discover/movie?api_key=${API_KEY}&with_genres=10749`,
    fetchDocumentaries: `/discover/movie?api_key=${API_KEY}&with_genres=10749`,
}

export default request;


