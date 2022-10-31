import React from "react";
import { Tabs } from "antd";
import "./css/TabPane.css";
import NewMovieList from "./movie-list/MovieList";

const { TabPane } = Tabs;
const movieSlide = (props) => {
  return (
    <Tabs defaultActiveKey="1" centered className="tab-pane">
      <TabPane tab="PHIM SẮP CHIẾU" key="1">
        <NewMovieList status={1} handleOpenModal={props.handleOpenModal}/>
      </TabPane>
      <TabPane tab="PHIM ĐANG CHIẾU" key="2">
        <NewMovieList status={2} handleOpenModal={props.handleOpenModal}/>
      </TabPane>
      <TabPane tab="SUẤT CHIẾU ĐẶC BIỆT" key="3">
        <NewMovieList status={3} handleOpenModal={props.handleOpenModal}/>
      </TabPane>
    </Tabs>
  );
};

export default movieSlide;
