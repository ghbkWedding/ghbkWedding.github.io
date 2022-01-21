import React from "react";
import { Row, Col } from "reactstrap";
// import FontAwesome from "react-fontawesome";

export default function Footer() {
  return (
    <Row>
      <Col className="app-fluid app-footer d-flex justify-content-center align-items-center">
        <p className="mb-0">
          <small className="text-muted">
            {/* Code licensed under MIT License Code by */}
            <span className="pl-2">
              {/* <a href="https://github.com/ghbkWedding/ghbkWedding.github.io">
                <FontAwesome name="github" />
              </a> */}
            </span>
          </small>
        </p>
      </Col>
    </Row>
  );
}
