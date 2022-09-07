import React from "react";
//import PropTypes from "prop-types";
import { connect } from "react-redux";

import MovieItem from "./movieItem";

class MoviesList extends React.Component {
  state = {
    query: ""
  };

  componentDidMount() {
    console.log("componentDidMount");
    if (!this.props.movies || this.props.movies.moviesResults.length == 0) {
      this.props.loadMovies();
    } else {
      this.setState({
        query: this.props.movies.query
      });
    }
  }

  componentDidUpdate(prevProps) {
    console.log("componentDidUpdate");
  }

  LookupForMovies = () => {
    let d = this.props.loadMovies(this.state.query);
    console.log(d);
  };

  render() {
    const { movies } = this.props;

    // console.log("render MoviesList", this.props);
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
              value={this.state.query}
              onKeyPress={(event) => {
                if (event.charCode == 13) {
                  this.LookupForMovies();
                }
              }}
              onChange={(event) => {
                this.setState({ query: event.target.value });
              }}
              placeholder="Ingrese aqui la película que desea buscar"
            />
          </div>
          <button className="btn btn-primary" onClick={this.LookupForMovies}>
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
              {movies.moviesResults.map((movie, i) => (
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
}
/*
MoviesList.propTypes = {
  movies: PropTypes.object.isRequired,
  loadMovies: PropTypes.func.isRequired
};
*/
const mapStateToProps = ({ movies }) => {
  return {
    movies
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    loadMovies: (query) => {
      dispatch({ type: `LOADMOVIES`, query });
    }
  };
};

const ConnectedMoviesList = connect(
  mapStateToProps,
  mapDispatchToProps
)(MoviesList);

export default ConnectedMoviesList;
