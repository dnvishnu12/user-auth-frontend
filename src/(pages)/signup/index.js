import React from "react";
import {
  Form,
  Input,
  Button,
  Card,
  Typography,
  InputNumber,
  message,
} from "antd";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "./signup.css";

const { Title } = Typography;

const Signup = () => {
  const navigate = useNavigate();

  const handleSignup = async (values) => {
    try {
      const response = await axios.post(
        "https://user-auth-backend-bkgs.onrender.com/signup",
        values
      );
      console.log(response);
      message.success("Signup successful!");

      navigate("/me", {
        state: { username: values.username, password: values.password },
      });
    } catch (error) {
      message.error("Failed to signup. Please try again.");
      console.error("Signup error:", error);
    }
  };

  return (
    <div className="signup-container">
      <Card className="signup-card" bordered={false}>
        <div className="header">
          <Title level={2} className="title">
            Sign Up
          </Title>
        </div>
        <Form layout="vertical" onFinish={handleSignup}>
          <Form.Item
            name="full_name"
            label="Full Name"
            rules={[{ required: true, message: "Please enter your full name" }]}
          >
            <Input className="input" placeholder="Enter your full name" />
          </Form.Item>

          <Form.Item
            name="username"
            label="Username"
            rules={[{ required: true, message: "Please enter your username" }]}
          >
            <Input className="input" placeholder="Enter your username" />
          </Form.Item>

          <Form.Item
            name="email"
            label="Email"
            rules={[
              {
                required: true,
                type: "email",
                message: "Please enter a valid email",
              },
            ]}
          >
            <Input className="input" placeholder="Enter your email" />
          </Form.Item>

          <Form.Item
            name="mobile_number"
            label="Mobile Number"
            rules={[
              { required: true, message: "Please enter your mobile number" },
            ]}
          >
            <InputNumber
              className="input"
              style={{ width: "100%" }}
              placeholder="Enter your mobile number"
            />
          </Form.Item>

          <Form.Item
            name="password"
            label="Password"
            rules={[{ required: true, message: "Please enter your password" }]}
          >
            <Input.Password
              className="input"
              placeholder="Enter your password"
            />
          </Form.Item>

          <Form.Item
            name="city"
            label="City"
            rules={[{ required: true, message: "Please enter your city" }]}
          >
            <Input className="input" placeholder="Enter your city" />
          </Form.Item>

          <Form.Item
            name="country"
            label="Country"
            rules={[{ required: true, message: "Please enter your country" }]}
          >
            <Input className="input" placeholder="Enter your country" />
          </Form.Item>

          <Form.Item>
            <Button
              type="primary"
              htmlType="submit"
              className="signup-button"
              block
            >
              Sign Up
            </Button>
          </Form.Item>
        </Form>
      </Card>
    </div>
  );
};

export default Signup;
