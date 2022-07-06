import TITLES from "../titles";
import { useParams } from "react-router-dom";

export default function MovieDetails() {
  const { movieId } = useParams();

  const { title, year } = TITLES.find((title) => title.id === parseInt(movieId));

  return (
    <main>
      <h2>{title} ({year})</h2>
      <p>...</p>
    </main>
  );
}