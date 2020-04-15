var MovieListEntry = ({movie}) => (
  <div className='movie-list-entry'>
    <div className='movie-title'>
      {this.props.movie.title}
    </div>
  </div>
);

export default MovieListEntry;