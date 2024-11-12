import React, { useState } from "react";
import { Form, Input, Button, Card, Typography, notification } from "antd";
import { useNavigate } from "react-router-dom";
import "./login.css";

const { Title } = Typography;

const Login = () => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const apiUrl = "https://user-auth-backend-bkgs.onrender.com/login";

  const onFinish = async (values) => {
    setLoading(true);

    try {
      const response = await fetch(apiUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username: values.username,
          password: values.password,
        }),
      });

      const data = await response.json();
      console.log(data);
      if (response.ok) {
        navigate("/me", {
          state: { username: values.username, password: values.password },
        });
      } else {
        notification.error({
          message: "Login Failed",
          description: "Invalid username or password. Please try again.",
        });
      }
    } catch (error) {
      notification.error({
        message: "Error",
        description: "An error occurred. Please try again later.",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container">
      <Card className="card" bordered={false}>
        <div className="header">
          <Title level={2} className="title">
            Log In
          </Title>
        </div>
        <Form layout="vertical" onFinish={onFinish}>
          <Form.Item
            name="username"
            label="Username"
            rules={[{ required: true, message: "Please enter your username" }]}
          >
            <Input placeholder="Enter your username" className="input" />
          </Form.Item>
          <Form.Item
            name="password"
            label="Password"
            rules={[{ required: true, message: "Please enter your password" }]}
          >
            <Input.Password
              placeholder="Enter your password"
              className="input"
            />
          </Form.Item>
          <Form.Item>
            <Button
              type="primary"
              htmlType="submit"
              block
              className="button"
              loading={loading}
            >
              Log In
            </Button>
          </Form.Item>
        </Form>
      </Card>
    </div>
  );
};

export default Login;
