import React from "react";
import { Menu } from "antd";
import { Link } from "react-scroll";
import "./Navbar.css";

const Navbar = () => {
  return (
    <div className="navbar">
      <Menu mode="horizontal" className="menu">
        <Menu.Item key="home">
          <Link to="home" smooth={true} duration={700} offset={-70}>
            Home
          </Link>
        </Menu.Item>
        <Menu.Item key="species">
          <Link to="species" smooth={true} duration={700} offset={-70}>
            Species
          </Link>
        </Menu.Item>
        <Menu.Item key="about">
          <Link to="about" smooth={true} duration={700} offset={-70}>
            About
          </Link>
        </Menu.Item>
      </Menu>
    </div>
  );
};

export default Navbar;
