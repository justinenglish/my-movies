import TITLES from "../titles"
import { Link } from "react-router-dom";

export default function MovieIndex() {
  return (
    <ul>
      {TITLES.map((movie) =>
        <li>
          <Link  
            to={`/movies/${movie.id}`} 
            key={movie.id}
          >
            {movie.title}
          </Link>
          <br />
          {movie.year}
        </li>
      )}
    </ul>
  )
}