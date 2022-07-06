import './App.css';
import { Outlet, Link } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>I Heart Movies</h1>
        <Link to={`/movies`}>See my favorite movies</Link>
        <br />
        <Outlet />
      </header>
    </div>
  );
}

export default App;
