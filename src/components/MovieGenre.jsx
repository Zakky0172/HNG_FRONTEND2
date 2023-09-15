const MovieGenre = ({ movies, genres }) => {
  return (
    <div className="text-gray-400 text-xs font-bold">
      {movies.genre_ids.map((genreId) => genres[genreId]).join(", ")}
    </div>
  );
};

export default MovieGenre;
