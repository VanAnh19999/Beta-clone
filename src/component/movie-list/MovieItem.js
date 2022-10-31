import React from "react";
import { Button } from "@mui/material";
import { Image } from "antd";
import '../../component/MovieListStyle.css'

export default function MovieItem(props) {
  const handleClick = () => {
    props.handleOpenModal(props.data)
  }
    return (
        <div className="project-container">
          <div className="project-card">
            <div className='movie-image'>
                <div className="hide-box"></div>
                <Image src={props.data.img} alt={props.index}/>
            </div>
            <h3>{props.data.movie}</h3>
            <p>Thể loại: {props.data.type}</p>
            <p>Thời lượng: {props.data.time}</p>
            <Button onClick={handleClick}>Mua Vé</Button>
          </div>
        </div>
      );
}