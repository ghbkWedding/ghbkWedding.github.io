import React from "react";
import { Row, Col } from "reactstrap";
import FontAwesome from "react-fontawesome";

export default function Account(props) {
  const {} = props.config;
  return (
    <Col className="mb-5">
      <Row className="pt-3">
        <Col>
          <h3>신랑 신부에게 마음 전하기</h3>
        </Col>
      </Row>
      <Row className="nav-button mb-1">
        <Col>
          <a className="btn btn-block btn-account">
            신부측 계좌번호
            <FontAwesome name="user" />
          </a>
        </Col>
      </Row>
      <Row className="nav-button mb-1">
        <Col>
          <a className="btn btn-block btn-account">
            신랑측 계좌번호
            <FontAwesome name="user" />
          </a>
        </Col>
      </Row>
    </Col>
  );
}
