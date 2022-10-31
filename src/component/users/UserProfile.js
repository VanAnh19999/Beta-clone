import { Descriptions, Empty, Divider, Avatar } from "antd";
import React, { useEffect, useState } from "react";
import { authService } from "../../http/auth_service";
import UserTable from "./UserTable";
import "../css/UserInfo.css";

const UserProfile = () => {
  const [authData, setAuthData] = useState(null);
  const email = localStorage.getItem("email");
  useEffect(() => {
    authService
      .getLoginInfo(email)
      .then((res) => {
        setAuthData(res[0]);
      })
      .catch((err) => {
        throw err;
      });
  }, [email]);

  if (authData) {
    return (
      <div className="user-info">
        <Avatar size={64} style={{marginBottom : '20px'}} src = 'https://scontent.fhan1-1.fna.fbcdn.net/v/t39.30808-1/308508973_1994413207422395_3750479312358276091_n.jpg?stp=dst-jpg_p480x480&_nc_cat=106&ccb=1-7&_nc_sid=7206a8&_nc_ohc=eGyF709PS_gAX-6GnIp&_nc_ht=scontent.fhan1-1.fna&oh=00_AT87aV3lfdEQHpIqB0Tn33Lj06zVTOeATkK8ii3vkhhxBQ&oe=635D5D97'/>
        <div className="info-flex">
          <Descriptions>
            <Descriptions.Item label="E-Mail">
              {authData.email}
            </Descriptions.Item>
            <Descriptions.Item label="Telephone">
              {authData.phone}
            </Descriptions.Item>
            <Descriptions.Item label="Nick Name">
              {authData.nickname}
            </Descriptions.Item>
            <Descriptions.Item label="Gender">
              {authData.gender}
            </Descriptions.Item>
          </Descriptions>
        </div>

        <Divider />
        <UserTable />
      </div>
    );
  } else return <Empty />;
};

export default UserProfile;
