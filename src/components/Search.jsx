class Search extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      value: ''
    };
  }

  // we want to filter as we type
  // every letter we type is changing the state of samplemoviedata
  // using javascript's string.includes on a movie's title if "contains" is true, we show as we type

  render() {
    return (
      <div>
        Search Bar Goes Here
      </div>
    )
  }
}

export default Search;