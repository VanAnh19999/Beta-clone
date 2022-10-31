import "../css/MovieCinema.css";
const TimeLineList = (props) => {
  function displayResult(event) {
    props.handleClick(event.target.value , props.date)
  }
  return (
    <div>
      <p style={{ fontSize: "18px", fontWeight: "600"}}>{props.type}</p>
      <div className="flex-box">
        {props.data[0].timeline.map((ele) => {
          return (
            <div className="flex-box-row" span={6}>
              <button value={ele.time} className="flex-box-btn" onClick={displayResult}>{ele.time}</button>
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
  );
};

export default TimeLineList;
