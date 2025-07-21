import React, { useEffect, useState } from "react";
import MovieItem from "./movieItem";

const APIKEY = process.env.REACT_APP_API_KEY;

export default function MovieList() {
  const [query, setQuery] = useState("");
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [lastLoad, setLastLoad] = useState(null);

  const fetchMovies = async (search) => {
    setLoading(true);
    setError(null);
    let url = `https://api.themoviedb.org/3/${search ? "search/movie" : "movie/now_playing"}?api_key=${APIKEY}&language=es-MX`;
    if (search) {
      url += `&query=${encodeURIComponent(search)}`;
    }
    try {
      const res = await fetch(url);
      const data = await res.json();
      setMovies(data.results || []);
      setLastLoad(new Date().toLocaleString());
    } catch (e) {
      setError(e);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchMovies("");
  }, []);

  const handleSearch = () => {
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
            onKeyDown={(event) => {
              if (event.key === "Enter") {
                handleSearch();
              }
            }}
            onChange={(event) => setQuery(event.target.value)}
            placeholder="Ingrese aqui la película que desea buscar"
          />
        </div>
        <button className="btn btn-primary" onClick={handleSearch}>
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
