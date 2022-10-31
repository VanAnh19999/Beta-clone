import React, { useState, useEffect } from "react";
import { movieService } from "../../http/movie_service.jsx";
import HotMovieItem from "./HotMovieItem.js";
import '../css/HotMovie.css'
export default function HotMovie(props) {
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
    <div className="hot__movie">
      <h1 className="movie__heading">PHIM ĐANG HOT</h1>
      <div
        className="movie-list"
        style={{
          display: "grid",
          gridTemplateColumns: "auto auto",
          'columnGap': '7%'
        }}
      >
        {data.map((record) => {
          return <HotMovieItem data={record} />;
        })}
      </div>
    </div>
  );
}
