var MovieListEntry = (props) => (
  <div className='movie-list-entry'>
    <div className='movie-title'>{props.movie.title}</div>
  </div>
);

export default MovieListEntry;

//not using props because we have not set super(props) which allows us to use this