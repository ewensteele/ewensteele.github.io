import React from "react";
import { Nav } from "react-bootstrap";
import "./Header.css";
import { LinkContainer } from "react-router-bootstrap";

const Header = () => {
  return (
    <>
      <Nav className="justify-content-center" activeKey="/home">
        <Nav.Item>
          <LinkContainer to="/">
            <Nav.Link>Home</Nav.Link>
          </LinkContainer>
        </Nav.Item>
        <Nav.Item>
          <LinkContainer to="/about">
            <Nav.Link>About</Nav.Link>
          </LinkContainer>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href="https://www.linkedin.com/in/ewensteele">
            LinkedIn
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <LinkContainer to="/projects">
            <Nav.Link>Projects</Nav.Link>
          </LinkContainer>
        </Nav.Item>
      </Nav>
    </>
  );
};

export default Header;
