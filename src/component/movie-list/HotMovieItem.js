import React from "react";
import { Image } from "antd";
import '../../component/MovieListStyle.css'

export default function HotMovieItem(props) {
    return (
        <div className="project-container">
          <div className="project-card">
            <div className='movie-image'>
                <div className="hide-box"></div>
                <Image src={props.data.img} alt={props.index}/>
            </div>
            <h3 style={{textAlign : 'center'}}>{props.data.movie}</h3>
          </div>
        </div>
      );
}