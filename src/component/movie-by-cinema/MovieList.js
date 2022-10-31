import { List } from "antd";
import { useState } from "react";
import MovieListItem from "./MovieListItem";
export default function MovieList(props) {
  const [data, setData] = useState(props.data);

  return (
    <div>
      <List
        dataSource={data}
        renderItem={(item) => (<List.Item>
            <MovieListItem data={item} date ={props.date} handleClick={props.handleClick}/>
          </List.Item>)
        }
      ></List>
    </div>
  );
}
