import React from "react";
import { Row, Col } from "reactstrap";

export default function Account(props) {
  const {} = props.config;
  return (
    <Row className="mb-5">
      <h3>신랑 신부에게 마음 전하기</h3>
      <Row className="nav-button">
        <Col className="pt-2 pb-2 pr-3">
          <a className="btn btn-naver btn-block">지도 바로가기</a>
        </Col>
        <Col className="pt-2 pb-2 pr-3">
          <a className="btn btn-naver btn-block">지도 바로가기</a>
        </Col>
      </Row>
    </Row>
  );
}
