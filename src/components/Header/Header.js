import React from "react";
import { Button, Dropdown } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import icon from "../../assets/Screenshot_2023-12-19_214037-removebg-preview.png";

const Header = () => {
  return (
    <div className="d-flex justify-content-end mb-5">
      <Button
        variant="light"
        style={{ color: "black" }}
        onClick={(e) => e.preventDefault()}
      >
        <img
          src={icon}
          alt=""
          style={{ width: "1.3rem", marginRight: "12px" }}
        />
        XYZ Enterprises Pvt.Ltd
      </Button>

      <Dropdown style={{ marginLeft: "5px" }}>
        <Dropdown.Toggle variant="light" id="dropdown-basic">
      
        </Dropdown.Toggle>

        <Dropdown.Menu>
          <Dropdown.Item href="#/action-1">Action 1</Dropdown.Item>
          <Dropdown.Item href="#/action-2">Action 2</Dropdown.Item>
          <Dropdown.Item href="#/action-3">Action 3</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
    </div>
  );
};

export default Header;
