import React, { useState, useEffect } from "react";
import { movieService } from "../../http/movie_service.jsx";
import MovieItem from "./MovieItem";

export default function NewMovieList(props) {
  const [data, setData] = useState([]);

  useEffect(() => {
    movieService
      .getMovie(props.status)
      .then((res) => {
        if (res) {
          setData(res);
        }
      })
      .catch((err) => {
        alert(err);
        throw err;
      });
  }, [props.status]);

  return (
    <div>
      <div
        className="movie-list"
        style={{
          display: "grid",
          gridTemplateColumns: "auto auto auto auto",
          marginLeft: "5rem",
          marginBottom: "10rem",
          paddingLeft: "12%",
          paddingRight: "12%",
        }}
      >
        {data.map((record) => {
          return <MovieItem data={record} handleOpenModal={props.handleOpenModal}/>;
        })}
      </div>
    </div>
  );
}
