import { Tabs, Modal } from "antd";
import React, { useEffect, useState } from "react";
import { movieService } from "../../http/movie_service.jsx";
import "../css/MovieCinema.css";
import MovieList from "./MovieList.js";
import SmallModalComponent from "../util/SmallModalComponent.js";
import { ticketService } from "../../http/ticket_service.jsx";
import {
  openNotificationFail,
  openNotificationSuccess,
} from "../../component/util/NotificationService"
import { useNavigate } from "react-router-dom";

export default function Index(props) {
  const [data, setData] = useState(null);
  const [toggle, setToggle] = useState(false);
  const [ticketData, setTicketData] = useState(null);
  const email = localStorage.getItem("email");
  const navigate = useNavigate();

  useEffect(() => {
    getData();
  }, []);

  const handleClick = (time, date, name) => {
    setToggle(true);
    const ticket = {
      movie: name,
      center: localStorage.getItem("center"),
      date: date,
      time: time,
      email: localStorage.getItem("email"),
    };
    setTicketData(ticket);
  };

  async function createTicket() {
    ticketService.createTicket(ticketData).then((res) => {
      if (res) {
        openNotificationSuccess('Bạn đã đặt vé thành công');
        setToggle(false);
      }
    })
    .catch(err => {
      openNotificationFail(err)
    });
  }

  const handleToggleModal = (data) => {
    if (!email) {
      navigate("/thanh-vien");
    } else {
      createTicket();
    }
  };

  async function getData() {
    movieService
      .getMovieByCinema()
      .then((res) => {
        if (res) {
          setData(
            res.map((ele) => {
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
                children: (
                  <div>
                    <MovieList
                      data={ele.data}
                      handleClick={handleClick}
                      date={`${ele.day}/${ele.month}/2022`}
                    />
                  </div>
                ),
              };
            })
          );
        }
      })
      .catch((err) => {
        alert(err);
        throw err;
      });
  }
  console.log(data);

  if (data === null || data === undefined) {
    return null;
  } else {
    return (
      <div className="beta-container">
        <Tabs className="cinema-tab" items={data} />
        <Modal
          title={`Bạn đang đặt vé xem phim`}
          centered
          open={toggle}
          onCancel={() => setToggle(false)}
          onOk={handleToggleModal}
          width={700}
        >
          <SmallModalComponent movie={'ticketData.movie'} data={[ticketData]} />
        </Modal>
      </div>
    );
  }
}
