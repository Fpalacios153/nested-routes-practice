import { useParams } from "react-router-dom";
function MovieDetails({ movies }) {
  const { movieId } = useParams();

  let movieChoice = movies.find((movie) => Number(movieId) === movie.id);
  console.log("This is moive", movieChoice);
  return (
    <div className="comp purple">
      <h1>{movieChoice.title}</h1>
      <p>{movieChoice.description}</p>
    </div>
  );
}

export default MovieDetails;
