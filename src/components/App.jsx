import MovieList from './MovieList.js';
import sampleMovieData from '../sampleMovieData.js'
import Search from './Search.js';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      moviedata: sampleMovieData
    }
  }

  function filterTitles( input ) { //what we type
    //predicate: involves movielist.title, string.includes
    // update the state to be the new, filtered array.
  }
  // we want to filter as we type
  // every letter we type is changing the state of samplemoviedata
  // using javascript's string.includes on a movie's title if "contains" is true, we show as we type


  render() {
    const data = this.state.moviedata;
    return (
      <div>
        <Search />
        <MovieList moviedata={data}/>
      </div>
    );
  }
}

export default App;