import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";

import MovieItem from "./movieItem";

export default function MoviesList() {
  const [query, setQuery] = useState("");
  const movies = useSelector((state) => state.movies);
  const dispatch = useDispatch();

  useEffect(() => {
    if (!movies || movies.moviesResults.length === 0) {
      dispatch({ type: "LOADMOVIES" });
    } else {
      setQuery(movies.query);
    }
  }, [movies, dispatch]);

  const lookupForMovies = () => {
    dispatch({ type: "LOADMOVIES", query });
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
                lookupForMovies();
              }
            }}
            onChange={(event) => {
              setQuery(event.target.value);
            }}
            placeholder="Ingrese aqui la película que desea buscar"
          />
        </div>
        <button className="btn btn-primary" onClick={lookupForMovies}>
          Load Movies
        </button>
      </div>

      {movies && movies.moviesResults && movies.moviesResults.length > 0 ? (
        <>
          <>
            {movies.query ? (
              <h1>Resultados para la busqueda {movies.query}</h1>
            ) : (
              <h1>Hoy en Cartelera</h1>
            )}
          </>

          <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3">
            {movies.moviesResults.map((movie) => (
              <MovieItem key={movie.id} movie={movie} />
            ))}
          </div>

          {/*
            <ul>
              {movies.moviesResults.map((movie, i) => (
                <li key={movie.id}>
                  <img
                    src={"https://image.tmdb.org/t/p/w154/" + movie.poster_path}
                    alt={movie.title}
                  />
                  <a to={"/play/player/" + movie.id}>{movie.title}</a>
                </li>
              ))}
            </ul>
          */}
          <span>Última actualizacion: {movies.lastLoad}</span>
        </>
      ) : (
        <>
          <h1>SIN RESULTADOS</h1>
          {movies && movies.error ? (
            <h1>{movies.errorMessage.message}</h1>
          ) : null}
        </>
      )}
    </>
  );
}
