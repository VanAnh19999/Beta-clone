import { useState } from "react";
import "../css/MovieCinema.css";
import LocalOfferIcon from "@mui/icons-material/LocalOffer";
import QueryBuilderIcon from "@mui/icons-material/QueryBuilder";

export default function MovieListItem(props) {
  const [data, setData] = useState(props.data);

  function displayResult(event) {
    props.handleClick(event.target.value , props.date , props.data.name)
  }

  return (
    <div className="list-item">
      <div className="big-flex-box">
        <div>
          <img
            src={data.img}
            alt="film"
            style={{ width: "280px", borderRadius: "20px" }}
          />
        </div>
        <div style={{ marginLeft: "30px" }}>
          <a href="google.com" className="flex-box-link">
            {data.name}
          </a>
          <p style={{ fontSize: "18px" }}>
            <span>
              <LocalOfferIcon style={{ fontSize: "16px", color: "#03599d" }} />
            </span>
            <span>{data.type}</span>
            <QueryBuilderIcon style={{ fontSize: "16px", color: "#03599d" }} />
            <span></span> <span>{data.time}</span>
          </p>
          <p style={{ fontSize: "18px", fontWeight: "600" }}>{data.filmtype}</p>
          <div className="flex-box">
            {data.timeline.map((ele) => {
              return (
                <div className="flex-box-row" span={6}>
                  <button value ={ele.time}  onClick={displayResult} className="flex-box-btn">{ele.time}</button>
                  <p
                    style={{
                      fontSize: "10px",
                      textAlign: "center",
                      fontWeight: "600",
                    }}
                  >
                    {ele.seat}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
