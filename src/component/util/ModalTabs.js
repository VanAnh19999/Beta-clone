import { Empty, Tabs } from "antd";
import React, { useEffect, useState } from "react";
import "../css/MovieCinema.css";
import TimeLineList from "./TimeLineList";

const ModalTabs = (props) => {
  const [data, setData] = useState(null);

  useEffect(() => {
    setData(
      props.data.timeline.map((ele) => {
        return {
          label: (
            <p className="internal-text">
              <span className="big-word">{ele.day}</span>
              <span className="small-word">
                / {ele.month} - {ele.t}
              </span>
            </p>
          ),
          key: ele.day,
          children: <div><TimeLineList data={ele.data} type={ele.filmtype} 
          date = {`${ele.day}/${ele.month}/2022`} handleClick={props.handleClick}/></div>,
        };
      })
    );
  }, [props.data]);

  if (data == null) {
    return <Empty />;
  } else {
    return (
      <div className="beta-container">
        <Tabs className="cinema-tab" items={data} />
      </div>
    );
  }
};

export default ModalTabs;
