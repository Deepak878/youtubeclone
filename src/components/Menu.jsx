import React from "react";
import styled from "styled-components";
import MeTube from "../img/logo.png";
import { Link } from "react-router-dom";
import HomeIcon from "@mui/icons-material/Home";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
const Container = styled.div`
  flex: 1;
  background-color: ${({ theme }) => theme.bg};
  height: 100vh;
  color: ${({ theme }) => theme.text};
  font-size: 14px;
  position: sticky;
  top: 0;
`;
const Wrapper = styled.div`
  padding: 5px 20px;
`;

const Logo = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
  font-weight: bold;
  margin-bottom: 5px;
  padding: 5px 0px;
`;
const Img = styled.img`
  height: 25px;
`;
const Item = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  cursor: pointer;
  padding: 8px 0px;

  &:hover {
    background-color: ${({ theme }) => theme.soft};
  }
`;
const Hr = styled.hr`
  margin: 15px 0px;
  border: 0.5px solid ${({ theme }) => theme.soft};
`;

const Login = styled.div``;
const Button = styled.button`
  padding: 5px 15px;
  background-color: transparent;
  border: 1px solid #3ea6ff;
  color: #3ea6ff;
  border-radius: 3px;
  font-weight: 500;
  margin-top: 10px;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 5px;
`;
const Title = styled.h2`
  font-size: 14px;
  font-weight: 500;
  color: #aaaaaa;
  margin-bottom: 10px;
`;
const Menu = ({ darkMode, setDarkMode }) => {
  return (
    <Container>
      <Wrapper>
        <Link to="/" style={{ textDecoration: "none", color: "inherit" }}>
          <Logo>
            <Img src={MeTube} />
            MeTube
          </Logo>
        </Link>
        <Link to="/" style={{ textDecoration: "none", color: "inherit" }}>
          <Item>
            <HomeIcon />
            Home
          </Item>
        </Link>
        <Link to="trends" style={{ textDecoration: "none", color: "inherit" }}>
          <Item>
            <HomeIcon />
            Explore
          </Item>
        </Link>
        <Link
          to="subscriptions"
          style={{ textDecoration: "none", color: "inherit" }}
        >
          <Item>
            <HomeIcon />
            Subscriptions
          </Item>
        </Link>
        <Hr />
        <Item>
          <HomeIcon />
          Library
        </Item>
        <Item>
          <HomeIcon />
          History
        </Item>
        <Hr />
        <Login>
          Sign in to like videos,comment and subscribe
          <Link to="signin" style={{ textDecoration: "none" }}>
            <Button>
              <AccountCircleOutlinedIcon />
            </Button>
          </Link>
        </Login>
        <Hr />
        <Title>Best of METUBE</Title>
        <Item>
          <HomeIcon />
          Music
        </Item>
        <Item>
          <HomeIcon />
          Sports
        </Item>
        <Item>
          <HomeIcon />
          Gaming
        </Item>
        <Item>
          <HomeIcon />
          Movies
        </Item>
        <Item>
          <HomeIcon />
          News
        </Item>
        <Item>
          <HomeIcon />
          Live
        </Item>
        <Hr />
        <Item>
          <HomeIcon />
          Settings
        </Item>
        <Item>
          <HomeIcon />
          Report
        </Item>
        <Item>
          <HomeIcon />
          Help
        </Item>
        <Item onClick={() => setDarkMode(!darkMode)}>
          <HomeIcon />
          {!darkMode ? "Dark Mode" : "Light Mode"}
        </Item>
        <Item>
          <HomeIcon />
          History
        </Item>
      </Wrapper>
    </Container>
  );
};

export default Menu;
