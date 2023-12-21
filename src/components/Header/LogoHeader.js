import React from 'react';
import logo from "../../assets/Screenshot_2023-12-19_193141-removebg-preview.png";
import './LogoHeader.css'; // Create a CSS file for styling

const LogoHeader = () => {
  return (
    <div className="right-trapezoid-container">
      <img src={logo} alt='' className="logo-img" />
    </div>
  );
};

export default LogoHeader;
