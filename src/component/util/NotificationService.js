import { notification } from "antd";

export const openNotificationFail = (message) => {
  notification.open({
    message: "Thất Bại",
    description:message,
    type : 'error'
  });
};

export const openNotificationSuccess = (message) => {
    notification.open({
      message: "Thành Công",
      description:message,
      type : 'success'
    });
  };
