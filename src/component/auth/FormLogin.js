import { Tabs } from "antd";
import LoginForm from "./form/LoginForm";
import RegisterForm from "./form/RegisterForm";
import { Empty } from "antd";
import "../css/Form.css";
import UserProfile from "../users/UserProfile";
const { TabPane } = Tabs;

const FormLogin = (props) => {
  const email = localStorage.getItem("email");
  if (email) {
    return (
      <div className="user-form">
        <UserProfile />
      </div>
    );
  }
  return (
    <div className="user-form">
      <Tabs defaultActiveKey="1" centered>
        <TabPane tab="Đăng Nhập" key="1">
          <LoginForm />
        </TabPane>
        <TabPane tab="Đăng Kí" key="2">
          <RegisterForm />
        </TabPane>
      </Tabs>
    </div>
  );
};

export default FormLogin;
