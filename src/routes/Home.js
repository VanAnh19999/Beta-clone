import React, { useState } from "react";
import Navbar from "../component/Navbar";
import MovieSlide from "../component/Movieslide";
import Footer from "../component/Footer.js";
import NewSlider from "../component/slider/NewSlider";
import { Modal } from "antd";
import ModalComponent from "../component/util/ModalComponent";
import SmallModalComponent from "../component/util/SmallModalComponent";
import { useNavigate } from "react-router-dom";
import { ticketService } from "../http/ticket_service";
import {
  openNotificationFail,
  openNotificationSuccess,
} from "../component/util/NotificationService";

const Home = () => {
  const [open, setOpen] = useState(false);
  const [toggle, setToggle] = useState(false);
  const [data, setData] = useState("");
  const [ticketData, setTicketData] = useState(null);
  const email = localStorage.getItem("email");
  const navigate = useNavigate();
  const handleOpenModal = (data) => {
    setOpen(true);
    setData(data);
  };

  async function createTicket() {
    ticketService.createTicket(ticketData).then((res) => {
      if (res) {
        openNotificationSuccess('Bạn đã đặt vé thành công');
        setToggle(false);
        setOpen(false);
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

  const handleClick = (time, date) => {
    setToggle(true);
    const ticket = {
      movie: data.movie,
      center: localStorage.getItem('center'),
      date: date,
      time: time,
      email: localStorage.getItem("email"),
    };
    setTicketData(ticket);
  };

  return (
    <div>
      <Navbar />
      <NewSlider />
      <MovieSlide handleOpenModal={handleOpenModal} />
      <Footer />
      <Modal
        title={`Lịch chiếu - ${data.movie}`}
        centered
        open={open}
        onOk={() => setOpen(false)}
        onCancel={() => setOpen(false)}
        width={1000}
      >
        <ModalComponent data={data} handleClick={handleClick} />
      </Modal>

      <Modal
        title={`Bạn đang đặt vé xem phim`}
        centered
        open={toggle}
        onCancel={() => setToggle(false)}
        onOk={handleToggleModal}
        width={700}
      >
        <SmallModalComponent movie={data.movie} data={[ticketData]} />
      </Modal>
    </div>
  );
};

export default Home;
