import React, { useEffect, useState } from "react";
import MovieItem from "./movieItem";

const APIKEY = "b4fe0c22fecb27296c885c1704957547";

export default function MoviesList() {
  const [query, setQuery] = useState("");
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [lastLoad, setLastLoad] = useState(null);

  const fetchMovies = (search) => {
    setLoading(true);
    setError(null);
    let url = `https://api.themoviedb.org/3/${search ? "search/movie" : "movie/now_playing"}?api_key=${APIKEY}&language=es-MX`;
    if (search) {
      url += `&query=${encodeURIComponent(search)}`;
    }
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setMovies(data.results || []);
        setLastLoad(new Date().toLocaleString());
      })
      .catch((e) => setError(e))
      .finally(() => setLoading(false));
  };

  useEffect(() => {
    fetchMovies("");
  }, []);

  const LookupForMovies = () => {
    fetchMovies(query);
  };

  return (
    <>
      <div className="input-group mb-3">
        <div className="input-group-prepend">
          <span className="input-group-text" id="basic-addon3">
            Nombre
          </span>
          <input
            className="form-control"
            type="text"
            value={query}
            onKeyPress={(event) => {
              if (event.charCode === 13) {
                LookupForMovies();
              }
            }}
            onChange={(event) => setQuery(event.target.value)}
            placeholder="Ingrese aqui la película que desea buscar"
          />
        </div>
        <button className="btn btn-primary" onClick={LookupForMovies}>
          Load Movies
        </button>
      </div>

      {loading && <h1>Cargando...</h1>}
      {!loading && movies.length > 0 ? (
        <>
          <h1>
            {query ? `Resultados para la busqueda ${query}` : "Hoy en Cartelera"}
          </h1>

          <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3">
            {movies.map((movie) => (
              <MovieItem key={movie.id} movie={movie} />
            ))}
          </div>

          <span>Última actualizacion: {lastLoad}</span>
        </>
      ) : null}
      {error && <h1>{error.message}</h1>}
    </>
  );
}
