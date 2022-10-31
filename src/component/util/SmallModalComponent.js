import { Divider , Table } from 'antd';

const columns = [
    {
      title: 'Rạp chiếu',
      dataIndex: 'center',
      key: 'center',
    },
    {
      title: 'Ngày Chiếu',
      dataIndex: 'date',
      key: 'date',
    },
    {
      title: 'Giờ chiếu',
      dataIndex: 'time',
      key: 'time',
    },
  ];


const SmallModalComponent = (props) => {
    return (
        <div>
            <h2 style={{textAlign : 'center' , fontSize :'28px'}}>{props.data[0].movie}</h2>
            <Divider />
            <Table dataSource={props.data} columns={columns} />
        </div>
    )
}

export default SmallModalComponent