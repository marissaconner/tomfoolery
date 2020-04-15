import MovieListEntry from './MovieListEntry.js'

var MovieList = (props) => (
  <div>
    {props.moviedata.map((movie, key) => <MovieListEntry movie={movie} key={movie.id}/> )}
  </div>
);

export default MovieList;