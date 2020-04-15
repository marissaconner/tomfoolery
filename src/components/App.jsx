import MovieList from './MovieList.js';

var sampleMovieData = [
  {
    title: 'Mean Girls',
    description: 'Description for meangirls',
    id: 1
  },
  {
    title: 'Hackers',
    description: 'Description for hackers',
    id: 2
  },
  {
    title: 'The Grey',
    description: 'Description for the grey',
    id: 3
  },
  {
    title: 'Sunshine',
    description: 'Description for sunshine',
    id: 4
  },
  {
    title: 'Ex Machina',
    description: 'Description for ex machina',
    id: 5
  },
]

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      moviedata: sampleMovieData
    }
  }

  render() {
    const data = this.state.moviedata;
    return (
      <div>
        <MovieList moviedata={data}/>
      </div>
    );
  }
}

export default App;