import type Movie from "@/types/movie";

export default function Movie({ movie }: { movie: Movie }) {
  return (
    <article className="movie">
      <h3 className="name">{movie.name}</h3>
    </article>
  );
}
