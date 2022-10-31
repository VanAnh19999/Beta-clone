import { Button, Checkbox, Form, Input } from 'antd';
import React from 'react';
import { authService } from '../../../http/auth_service';
import { useNavigate } from "react-router-dom";
import { openNotificationFail , openNotificationSuccess } from '../../util/NotificationService';

const LoginForm = (props) => {
  const navigate = useNavigate()
  const onFinish = (values) => {
    authService.getLogin(values.email , values.password)
    .then(res => {
      if(res.length > 0) {
        localStorage.setItem('email' , res[0].email)
        localStorage.setItem('center' , 'Beta Thanh Xuân')
        openNotificationSuccess('Đăng nhập thành công')
        navigate("/")
      }
      else {
        openNotificationFail('Đăng nhập thất bại')
      }
    })
  };
  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };
  return (
    <Form
      name="basic"
      labelCol={{
        span: 8,
      }}
      wrapperCol={{
        span: 16,
      }}
      initialValues={{
        remember: true,
      }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      autoComplete="off"
    >
      <Form.Item
        label="E-mail"
        name="email"
        rules={[
          {
            required: true,
            message: 'Please input your email!',
          },
        ]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="Password"
        name="password"
        rules={[
          {
            required: true,
            message: 'Please input your password!',
          },
        ]}
      >
        <Input.Password />
      </Form.Item>

      <Form.Item
        name="remember"
        valuePropName="checked"
        wrapperCol={{
          offset: 8,
          span: 16,
        }}
      >
        <Checkbox>Remember me</Checkbox>
      </Form.Item>

      <Form.Item
        wrapperCol={{
          offset: 8,
          span: 16,
        }}
      >
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
    </Form>
  );
};
export default LoginForm;