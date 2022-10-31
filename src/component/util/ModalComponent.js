import { Divider } from 'antd';
import React from 'react';
import ModalTabs from './ModalTabs';

const ModalComponent = (props) => {
    return (
        <div>
            <h2 style={{textAlign : 'center' , fontSize :'28px'}}>{'Rạp beta Thái Nguyên'}</h2>
            <Divider />
            <div>
                <ModalTabs data = {props.data} handleClick={props.handleClick}/>
            </div>
        </div>
    )
}

export default ModalComponent;