import React from 'react';
import { Card, Col, Row, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';
import "../../styles/Main.css"

function MainDown() {
  return (
    <Row>
      

      <Col md={12} lg={6}>
        <Card className="mb-4">
          <Card.Body>
            <div className='d-flex flex-column flex-md-row justify-content-between'>
              <div className="mb-3 mb-md-0" style={{ width: "100%" }}>
                <Button variant="primary text-dark " style={{ borderRadius: "30px", backgroundColor: '#C6FF8E'}}>Free Forever</Button>
                <div className="mt-3">
                  <h2 >Free Started</h2>
                  <p>Some quick example text to make up the bulk of the content.</p>
                </div>
                <Link to="/subscribe" className="btn text-dark  btn-block p-2 shadow" style={{ backgroundColor: '#C6FF8E', width: '60%' }}>
                  Get Started<i class="fa-solid  fa-arrow-right"></i>
                </Link>
              </div>

              <div className="mt-md-" style={{ width: "100%" }}>
                <h6>What you'll get:</h6>
                <ul className="list-unstyled my-2  text-left ">
                  <li className="mb-3" style={{ fontSize: '0.8rem' }}>
                    <i className="fa-regular fa-user"></i> Upto 50 Users
                  </li>
                  <li className="mb-3" style={{ fontSize: '0.8rem' }}>
                    <i className="fa-regular fa-cloud-arrow-up"></i> Upto 60gb Storage
                  </li>
                  <li className="mb-3" style={{ fontSize: '0.8rem' }}>
                    <i className="fa-regular fa-envelope"></i> Email+Chat Support
                  </li>
                  <li className="mb-3" style={{ fontSize: '0.8rem' }}>
                    <i className="fa-regular fa-envelope"></i> Basic of Documents, Task Flow, Voting, Accounting, Banking, Notes, Investors, Director and Team Management included
                  </li>
                </ul>
              </div>
            </div>
          </Card.Body>
        </Card>
      </Col>
      <Col md={12} lg={6}>
        <Card className="mb-4">
          <Card.Body>
            <div className='d-flex flex-column flex-md-row justify-content-between'>
              <div className="mb-3 mb-md-0" style={{ width: "100%" }}>
                <Button variant="primary text-dark " style={{ borderRadius: "30px" ,backgroundColor: '#8AB9FF'}}>Free Forever</Button>
                <div className="mt-3">
                  <h2>Enterprises plan</h2>
                  <p>Some quick example text to make up the bulk of the content.</p>
                </div>
                <Link to="/subscribe" className="btn text-dark  btn-block p-2 shadow" style={{ backgroundColor: '#8AB9FF', width: '60%' }}>
                  Get Started<i class="fa-solid  fa-arrow-right"></i>
                </Link>
              </div>

              <div className="mt-md-" style={{ width: "100%" }}>
                <h6>What you'll get:</h6>
                <ul className="list-unstyled my-2 text-small text-left font-weight-normal">
                  <li className="mb-3" style={{ fontSize: '0.8rem' }}>
                    <i className="fa-regular fa-user"></i> Upto 50 Users
                  </li>
                  <li className="mb-3" style={{ fontSize: '0.8rem' }}>
                    <i className="fa-regular fa-cloud-arrow-up"></i> Upto 60gb Storage
                  </li>
                  <li className="mb-3" style={{ fontSize: '0.8rem' }}>
                    <i className="fa-regular fa-envelope"></i> Email+Chat Support
                  </li>
                  <li className="mb-3" style={{ fontSize: '0.8rem' }}>
                    <i className="fa-regular fa-envelope"></i> Basic of Documents, Task Flow, Voting, Accounting, Banking, Notes, Investors, Director and Team Management included
                  </li>
                </ul>
              </div>
            </div>
          </Card.Body>
        </Card>
      </Col>
    </Row>
  );
}

export default MainDown;
