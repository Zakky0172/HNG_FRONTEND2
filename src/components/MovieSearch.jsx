import { useEffect, useState } from "react";
import axios from "axios";
import LoadingPage from "./LoadingPage";
import MovieCard from "./MovieCard";
import { useParams } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";

const apiKey = "42f956d501059428aaea8646930dd130";

const MovieSearch = ({ searchQuery, onSearchInputChange, onHandleSearch }) => {
  const { query } = useParams();
  const [searchResults, setSearchResults] = useState([]);
  const [genres, setGenres] = useState([]);
  const [loading, setLoading] = useState(false);

  const handleSearch = async () => {
    setLoading(true);

    try {
      const response = await axios.get(
        `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=${query}`
      );

      if (response.data.results) {
        setSearchResults(response.data.results);
      } else {
        setSearchResults([]);
      }
    } catch (error) {
      console.error("Error fetching search results: ", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    const genreUrl = `https://api.themoviedb.org/3/genre/movie/list?api_key=${apiKey}`;

    axios
      .get(genreUrl)
      .then((response) => {
        const genreMap = {};
        response.data.genres.forEach((genre) => {
          genreMap[genre.id] = genre.name;
        });
        setGenres(genreMap);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  useEffect(() => {
    if (query) {
      handleSearch();
    } else {
      setSearchResults([]);
    }
  }, [query]);

  console.log(searchResults);

  return (
    <>
      <div className="h-[90px] bg-gray-500">
        <Navbar
          searchQuery={searchQuery}
          onSearchInputChange={onSearchInputChange}
          onHandleSearch={onHandleSearch}
        />
      </div>
      <div className="max-w-[1400px] min-w-[300px] relative bg-gray-200">
        {loading ? (
          <LoadingPage />
        ) : (
          <div className="p-4">
            <h2 className="text-black text-2xl sm:text-4xl font-bold py-8">
              {searchResults.length
                ? `${searchResults.length} Search results for: `
                : "No search result for: "}
              <span className="text-red-500">{query}</span>
            </h2>
            <div className="px-6 w-full min-w-[300px] max-w-[1400px] grid grid-cols-2 justify-items-center md:grid-cols-3 lg:grid-cols-4 gap-x-20 sm:gap-x-5 gap-y-10">
              {searchResults.map((movie) => (
                <MovieCard
                  key={movie.id}
                  id={movie.id}
                  title={movie.title}
                  releaseDate={movie.release_date.slice(0, 4)}
                  posterUrl={`https://image.tmdb.org/t/p/w300${movie.poster_path}`}
                  movie={movie}
                  genres={genres}
                  imdbRating={movie.vote_average}
                />
              ))}
            </div>
            <Footer />
          </div>
        )}
      </div>
    </>
  );
};

export default MovieSearch;
