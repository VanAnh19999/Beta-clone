import React from "react";
import HotMovie from "../movie-list/HotMovie";
import CinemaIntroduction from "./CinemaContent";


export default function Cinemas(props) {
  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "auto auto",
        columnGap: "7%",
        paddingLeft: "15%",
        paddingRight: "15%",
      }}
    >
      <CinemaIntroduction />
      <HotMovie status={1} />
    </div>
  );
}
