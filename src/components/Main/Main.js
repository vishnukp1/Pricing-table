import React from "react";
import "../../styles/Main.css";
import { Link } from "react-router-dom";
import Sidebar from "../sidebar/Sidebar";
import MainDown from "./MainDown";

const Main = () => {
  return (
    <div className="d-flex " style={{ background: "#FEFEFE" }}>
      <Sidebar />
      <div className="maincontainer">
        <div style={{ padding: "3rem" }}>
          <div
            className="main-head"
            style={{
              display: "flex",
              justifyContent: "space-between",
              flexDirection: "row",
            }}
          >
            <div className="mt-3">
              <h3 className="text-bold">
                Choose a plan that's just right for you !
              </h3>
            </div>
            <div className="btnDiv mt-3">
              <button className="regBtn btn-sm mb-2" type="submit">
                Monthly
              </button>
              <button className="regBtn btn-sm" type="submit">
                Annually
              </button>
            </div>
          </div>

          <section>
            <div className="container py-5">
              <div className="row text-left align-items-end">
                <div className="col-lg-4 mb-5 mb-lg-0">
                  <div className="bg-white p-5 rounded-lg shadow">
                    <h1 className="h2  font-weight-bold mb-4">Basic</h1>
                    <div className="del-container">
                      $ 88.99/mon
                      <div className="del-line"></div>
                    </div>
                    <h2 className="h1 font-weight-bold">
                      $9.99
                      <span className="h4 text-small font-weight-normal ml-2">
                        / mon
                      </span>
                    </h2>
                    <Link
                      to="/subscribe"
                      style={{
                        background: "#FFE7A9",
                        width: "10rem",
                        textAlign: "left",
                      }}
                      className="btn text-dark btn-block p-2 shadow"
                    >
                      Get Started
                      <i className="fa-solid fa-arrow-right"></i>
                    </Link>
                    <div>
                      <hr className="line" />
                    </div>
                    <div className="custom-separator my-4 mx-auto bg-primary"></div>
                    <h6>What you'll get:</h6>
                    <ul className="list-unstyled my-3 text-small font-weight-normal">
                      <li className="mb-3">
                        <i className="fa-regular fa-user"></i> Upto 50 Users
                      </li>
                      <li className="mb-3">
                        <i className="fa-regular fa-cloud-arrow-up"></i> Upto
                        60gb Storage
                      </li>
                      <li className="mb-3">
                        <i className="fa-regular fa-envelope"></i> Email+Chat
                        Support
                      </li>
                    </ul>
                    <Link
                      to="/"
                      className="h5"
                      style={{ textDecoration: "underline" }}
                    >
                      Explorer Features
                    </Link>
                  </div>
                </div>

                <div className="col-lg-4 mb-5 mb-lg-0">
                  <div className="bg-white p-5 rounded-lg shadow">
                    <h1 className="h2  font-weight-bold mb-4">Standard</h1>
                    <div className="del-container">
                      $ 88.99/mon
                      <div className="del-line"></div>
                    </div>
                    <h2 className="h1 font-weight-bold">
                      $99.99
                      <span className="h4 text-small font-weight-normal ml-2">
                        / mon
                      </span>
                    </h2>

                    <Link
                      to="/subscribe"
                      style={{
                        background: "#FF9494",
                        width: "10rem",
                        textAlign: "left",
                      }}
                      className="btn text-dark btn-block p-2 shadow"
                    >
                      Get Started
                      <i className="fa-solid fa-arrow-right"></i>
                    </Link>

                    <div>
                      <hr className="line" />
                    </div>
                    <div className="custom-separator my-4 mx-auto bg-primary"></div>
                    <h6>What you'll get:</h6>
                    <ul className="list-unstyled my-3 text-small font-weight-normal">
                      <li className="mb-3">
                        <i className="fa-regular fa-user"></i> Upto 50 Users
                      </li>
                      <li className="mb-3">
                        <i className="fa-regular fa-cloud-arrow-up"></i> Upto
                        60gb Storage
                      </li>
                      <li className="mb-3">
                        <i className="fa-regular fa-envelope"></i> Email+Chat
                        Support
                      </li>
                    </ul>
                    <Link
                      to="/"
                      className="h5"
                      style={{ textDecoration: "underline" }}
                    >
                      Explorer Features
                    </Link>
                  </div>
                </div>

                <div className="col-lg-4 text-left">
                  <div className="bg-white p-5 rounded-lg shadow text-left">
                    <h1 className="h2  font-weight-bold mb-4">Premium</h1>
                    <div className="del-container">
                      $ 88.99/mon
                      <div className="del-line"></div>
                    </div>
                    <h2 className="h1 ">
                      $199.99<span className="h4 text-small ml-2">/ mon</span>
                    </h2>

                    <Link
                      to="/subscribe"
                      style={{
                        background: "#E7A2FF",
                        width: "10rem",
                        textAlign: "left",
                      }}
                      className="btn text-dark text btn-block p-2 shadow text-left"
                    >
                      Get Started
                      <i className="fa-solid fa-arrow-right"></i>
                    </Link>

                    <div>
                      <hr className="line" />
                    </div>
                    <div className="custom-separator my-4 mx-auto bg-primary"></div>
                    <h6>What you'll get:</h6>
                    <ul className="list-unstyled my-3 text-small font-weight-normal">
                      <li className="mb-3">
                        <i className="fa-regular fa-user"></i> Upto 50 Users
                      </li>
                      <li className="mb-3">
                        <i className="fa-regular fa-cloud-arrow-up"></i> Upto
                        60gb Storage
                      </li>
                      <li className="mb-3">
                        <i className="fa-regular fa-envelope"></i> Email+Chat
                        Support
                      </li>
                    </ul>
                    <Link
                      to="/"
                      className="h5"
                      style={{ textDecoration: "underline" }}
                    >
                      Explorer Features
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <MainDown />
        </div>
      </div>
    </div>
  );
};

export default Main;
