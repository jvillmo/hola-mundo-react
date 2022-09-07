import React from "react";

export default props => {
  const { movie } = props;
  return (
    <div className="card">
      <div className="row no-gutters">
        <div className="col-4">
          <img
            className="img-fluid"
            src={"https://image.tmdb.org/t/p/w154/" + movie.poster_path}
            alt={movie.title}
            height="250"
          />
          <a
            className="btn btn-primary w-100"
            href={"#/play/player/" + movie.id}
          >
            Comprar
          </a>
        </div>
        <div className="col-8">
          <div className="card-body">
            <h5 className="card-title">{movie.title}</h5>
            <p className="card-text">{movie.overview}</p>
            <p className="card-text">
              <small className="text-muted">Last updated 3 mins ago</small>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
