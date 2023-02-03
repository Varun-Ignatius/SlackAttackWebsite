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
import { Container } from "reactstrap";

export default function PageHeader() {
  return (
    <div className="page-header header-filter">
      <div className="squares square1" />
      <div className="squares square2" />
      <div className="squares square3" />
      <div className="squares square4" />
      <div className="squares square5" />
      <div className="squares square6" />
      <div className="squares square7" />
      <Container>
        <div className="content-center brand">
        <img
                alt="..."
                className="img-fluid rounded shadow"
                src={require("assets/img/slack-attack-high-resolution-logo-white-on-transparent-background.png")}
                style={{ width: "400px" }}
              />
          <div>
              <h1> </h1>
          </div>
          <h3 className="d-none d-sm-block" style={{ color: '#525f7f' }}>
            This is the website for our Team. Please scroll down to view squad member's details.
          </h3>
        </div>
      </Container>
    </div>
  );
}
