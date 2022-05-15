import './App.css';

const movies = [
  {
    title: "Child's Play",
    year: "November 9, 1988",
    id: 1
  },
  {
    title: "Tremors",
    year: "January 19, 1990",
    id: 2
  },
  {
    title: "The Santa Clause",
    year: "November 11, 1994",
    id: 3
  },
  {
    title: "Problem Child",
    year: "July 27, 1990",
    id: 4
  },
  {
    title: "John Wick",
    year: "October 14, 2014",
    id: 5
  }
]

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>My Movies</h1>
        <ul>
          {movies.map((movie) =>
            <li 
              key={movie.id}
            >
              {movie.title}
              <br />
              {movie.year}
            </li>
          )}
        </ul>
      </header>
    </div>
  );
}

export default App;
