import React, { useState, useEffect } from "react";
import {
  Form,
  Input,
  Button,
  Card,
  Typography,
  Space,
  Popconfirm,
  message,
  Avatar,
  Divider,
} from "antd";
import axios from "axios";
import { useLocation, useNavigate } from "react-router-dom";

const { Title, Text } = Typography;

const Profile = () => {
  const [form] = Form.useForm();
  const [userData, setUserData] = useState(null);
  const location = useLocation();
  const navigate = useNavigate();
  const { username: oldUsername, password: oldPassword } = location.state || {};

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await axios.get(
          `https://user-auth-backend-bkgs.onrender.com/user/${oldUsername}`
        );
        const data = response.data;
        setUserData(data);
        form.setFieldsValue(data);
      } catch (error) {
        message.error("Failed to fetch user data");
        console.error(error);
      }
    };

    if (oldUsername) {
      fetchUserData();
    }
  }, [oldUsername, form]);

  const handleUpdate = async (values) => {
    try {
      const updateData = {
        oldUsername,
        oldPassword,
        newUsername: values.username,
        newPassword: values.password,
        full_name: values.full_name,
        city: values.city,
        country: values.country,
        email: values.email,
        mobile_number: values.mobile_number,
      };

      await axios.put(
        "https://user-auth-backend-bkgs.onrender.com/update",
        updateData
      );
      message.success("Profile updated successfully!");
    } catch (error) {
      message.error("Failed to update profile");
      console.error(error);
    }
  };

  const handleDelete = async () => {
    try {
      await axios.delete("https://user-auth-backend-bkgs.onrender.com/delete", {
        data: { username: userData.username, password: userData.password },
      });
      message.success("Account deleted successfully");
      navigate("/");
    } catch (error) {
      message.error("Failed to delete account");
      console.error(error);
    }
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        padding: "40px",
        backgroundColor: "#f0f2f5",
      }}
    >
      <Card
        style={{
          width: "100%",
          maxWidth: "800px",
          borderRadius: "12px",
          padding: "30px",
          boxShadow: "0 5px 15px rgba(0, 0, 0, 0.1)",
        }}
        bordered={false}
      >
        <div style={{ display: "flex", alignItems: "center", gap: "20px" }}>
          <Avatar
            size={90}
            src="https://robohash.org/john_doe.png?set=set4"
            style={{
              border: "4px solid #1890ff",
              borderRadius: "50%",
            }}
          />
          <div>
            <Title level={3} style={{ color: "#333", marginBottom: "4px" }}>
              {userData?.full_name || "User"}
            </Title>
            <Text type="secondary">Member since 2021</Text>
          </div>
        </div>

        <Divider />

        <Form
          form={form}
          layout="vertical"
          onFinish={handleUpdate}
          style={{ marginTop: "20px" }}
        >
          <Form.Item
            name="username"
            label="Username"
            rules={[{ required: true, message: "Please enter your username" }]}
          >
            <Input placeholder="Enter your username" className="input" />
          </Form.Item>

          <Form.Item
            name="full_name"
            label="Full Name"
            rules={[{ required: true, message: "Please enter your full name" }]}
          >
            <Input placeholder="Enter your full name" className="input" />
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
            <Input placeholder="Enter your email" className="input" />
          </Form.Item>

          <Form.Item
            name="mobile_number"
            label="Mobile Number"
            rules={[
              { required: true, message: "Please enter your mobile number" },
            ]}
          >
            <Input placeholder="Enter your mobile number" className="input" />
          </Form.Item>

          <Form.Item name="city" label="City">
            <Input placeholder="Enter your city" className="input" />
          </Form.Item>

          <Form.Item name="country" label="Country">
            <Input placeholder="Enter your country" className="input" />
          </Form.Item>

          <Form.Item name="password" label="New Password">
            <Input.Password
              placeholder="Enter new password"
              className="input"
            />
          </Form.Item>

          <Space
            style={{
              display: "flex",
              justifyContent: "space-between",
              marginTop: "20px",
            }}
          >
            <Button
              type="primary"
              htmlType="submit"
              style={{
                fontSize: "15px",
              }}
            >
              Update Profile
            </Button>
            <Popconfirm
              title="Are you sure you want to delete your account?"
              onConfirm={handleDelete}
              okText="Yes"
              cancelText="No"
            >
              <Button
                danger
                style={{
                  fontSize: "15px",
                }}
              >
                Delete Account
              </Button>
            </Popconfirm>
          </Space>
        </Form>
      </Card>
    </div>
  );
};

export default Profile;
