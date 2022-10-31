import { Button } from "@mui/material";
import React from "react";
import "../component/MovieListStyle.css";
import "../component/data.js";

const MovieList = (props) => {
  return (
    <div className="project-container">
      <div className="project-card">
        <img src={props.img} />
        <h3>{props.movie}</h3>
        <p>{props.type}</p>
        <p>{props.time}</p>
        <Button>Mua Vé</Button>
      </div>
    </div>
  );
};

export default MovieList;
