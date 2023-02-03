/*!

=========================================================
* BLK Design System React - v1.2.1
=========================================================

* Product Page: https://www.creative-tim.com/product/blk-design-system-react
* Copyright 2022 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/blk-design-system-react/blob/main/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React from "react";
// reactstrap components
import { Container, Row, Col, Card,
  CardBody, } from "reactstrap";

export default function Typography() {
  return (
    <div className="section section-typo">
      <img alt="..." className="path" src={require("assets/img/path1.png")} />
      <img
        alt="..."
        className="path path1"
        src={require("assets/img/path3.png")}
      />
      <Container>
        <h3 className="title">Squad Members</h3>
        
        <div className="space-50" />
        <div id="images">
         
          <Row>
          <Col sm="3" xs="6">
          <Card>
          <CardBody>
              <p className="d-block text-uppercase font-weight-bold mb-4" style={{ color: '#525f7f' }}>
                Varun Ignatius Arulmani Selvam
              </p>
              <img
                alt="..."
                className="img-fluid rounded shadow-lg"
                src={require("assets/img/jiraiya-introducing.gif")}
                style={{ width: "150px" }}
              />
              <h1>

              </h1>
              <small className="d-block text-uppercase font-weight-bold mb-4">
                GitHub Name: va362
              </small>
              <small className="d-block text-uppercase font-weight-bold mb-4">
                Discord Name: Jiraya-Sensei18#3465
              </small>
          </CardBody>
          </Card>
            </Col>
          
            <Col sm="3" xs="6">
            <Card>
            <CardBody>
            <p className="d-block text-uppercase font-weight-bold mb-4" style={{ color: '#525f7f' }}>
                Shreya Ghosh
              </p>
              <img
                alt="..."
                className="img-fluid rounded shadow-lg"
                src={require("assets/img/minion.gif")}
                style={{ width: "150px" }}
              />
               <h1>

              </h1>
              <small className="d-block text-uppercase font-weight-bold mb-4">
                GitHub Name: shreya161
              </small>
              <small className="d-block text-uppercase font-weight-bold mb-4">
                Discord Name: Shreya16#6953
              </small>
              </CardBody>
              </Card>
            </Col>
            <Col sm="3" xs="6">
            <Card>
            <CardBody>
            <p className="d-block text-uppercase font-weight-bold mb-4" style={{ color: '#525f7f' }}>
                Jasmin Dhorajia
              </p>
              <img
                alt="..."
                className="img-fluid rounded shadow-lg"
                src={require("assets/img/giphy.gif")}
                style={{ width: "150px" }} 
              />
               <h1>

              </h1>
              <small className="d-block text-uppercase font-weight-bold mb-4">
                GitHub Name: jdhorajia
              </small>
              <small className="d-block text-uppercase font-weight-bold mb-4">
                Discord Name: jazz#3061
              </small>
              </CardBody>
              </Card>
            </Col>
            <Col sm="3" xs="6">
            <Card>
            <CardBody>
            <p className="d-block text-uppercase font-weight-bold mb-4" style={{ color: '#525f7f' }}>
                Rinkal Shah
              </p>
              <img
                alt="..."
                className="img-fluid rounded shadow-lg"
                src={require("assets/img/cute-anime.png")}
                style={{ width: "150px" }}
              />
               <h1>

                </h1>
                <small className="d-block text-uppercase font-weight-bold mb-4">
                  GitHub Name: rs2444
                </small>
                <small className="d-block text-uppercase font-weight-bold mb-4">
                  Discord Name: rs2444#9329
                </small>
                </CardBody>
                </Card>
            </Col>
          </Row>
        </div>
      </Container>
    </div>
  );
}
