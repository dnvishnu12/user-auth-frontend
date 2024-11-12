import React from "react";
import { Layout, Menu, Button, Row, Col, Typography, Card } from "antd";
import { Link } from "react-router-dom";
import "./landing-page.css";

const { Header, Content } = Layout;
const { Title, Paragraph } = Typography;

const LandingPage = () => {
  return (
    <Layout className="landing-page">
      <Header className="header">
        <div className="logo">Str8bat</div>
        <Menu theme="light" mode="horizontal" className="menu">
          <Menu.Item key="1">
            <Link to="/">Home</Link>
          </Menu.Item>
          <Menu.Item key="2">
            <Link to="/about">About Us</Link>
          </Menu.Item>
          <Menu.Item key="3">
            <Link to="/features">Features</Link>
          </Menu.Item>
          <Menu.Item key="4">
            <Link to="/pricing">Pricing</Link>
          </Menu.Item>
          <Menu.Item key="5">
            <Link to="/contact">Contact Us</Link>
          </Menu.Item>
          <Menu.Item key="login" className="menu-login">
            <Link to="/login">
              <Button type="link">Log In</Button>
            </Link>
          </Menu.Item>
          <Menu.Item key="signup">
            <Link to="/signup">
              <Button type="primary" className="signup-btn">
                Sign Up
              </Button>
            </Link>
          </Menu.Item>
        </Menu>
      </Header>

      <img
        src="https://media.licdn.com/dms/image/v2/C4D1BAQFojK3qp9shkA/company-background_10000/company-background_10000/0/1593237435781/str8bat_sport_tech_solutions_pvt_ltd_cover?e=1731956400&v=beta&t=8PfwYdL2D_gfg-kMPSjnbNHZ-YyH5LrUz13l_yOGJ7Q"
        alt="hero"
      />

      <Content className="hero-section">
        <Row align="middle" justify="center" className="hero-content">
          <Col xs={24} md={12}>
            <Title level={1} className="hero-title">
              Experience Cricket Like Never Before
            </Title>
            <Paragraph className="hero-description">
              With Str8bat's state-of-the-art technology, enhance your game,
              track your progress, and get insights to perform at your best.
            </Paragraph>
            <Link to="/signup">
              <Button type="primary" size="large" className="hero-button">
                Get Started
              </Button>
            </Link>
          </Col>
        </Row>
      </Content>

      <Content className="features-section">
        <Title level={2} className="section-title">
          Key Features
        </Title>
        <Row gutter={[16, 16]} justify="center">
          <Col xs={24} md={8}>
            <Card hoverable className="feature-card">
              <Title level={4}>Real-time Analytics</Title>
              <Paragraph>
                Track your every move with live data and detailed stats.
              </Paragraph>
            </Card>
          </Col>
          <Col xs={24} md={8}>
            <Card hoverable className="feature-card">
              <Title level={4}>Advanced Metrics</Title>
              <Paragraph>
                Access in-depth metrics for every shot to improve your game.
              </Paragraph>
            </Card>
          </Col>
          <Col xs={24} md={8}>
            <Card hoverable className="feature-card">
              <Title level={4}>Comprehensive Insights</Title>
              <Paragraph>
                Get insights on your performance and develop your skills.
              </Paragraph>
            </Card>
          </Col>
        </Row>
      </Content>

      <Content className="cta-section">
        <Row justify="center" align="middle">
          <Col xs={24} md={12} className="cta-content">
            <Title level={2} style={{ color: "white" }}>
              Ready to Improve Your Game?
            </Title>
            <Paragraph>
              Sign up today and take your cricket performance to the next level.
            </Paragraph>
            <Link to="/signup">
              <Button type="primary" size="large">
                Join Now
              </Button>
            </Link>
          </Col>
        </Row>
      </Content>
    </Layout>
  );
};

export default LandingPage;
