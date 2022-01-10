import React, { useState } from "react";
import { Row, Col } from "reactstrap";

export default function Account() {
  // const {} = props.config;
  const [displayState, setDisplayState] = useState(false);

  const onClickAccountBtn = () => {
    setDisplayState(!displayState);
  };

  return (
    <Col className="mb-5">
      <Row className="pt-3">
        <Col>
          <h3>신랑 신부에게 마음 전하기</h3>
        </Col>
      </Row>
      <Row className="nav-button mb-1">
        <Col className="pt-2 pb-2 pr-3">
          <a className="btn btn-account" onClick={onClickAccountBtn}>
            계좌번호 확인하기 ▽
          </a>
        </Col>
      </Row>
      {displayState ? (
        <Row className="mb-1">
          <Col className="pt-2 pb-2 pr-3">
            <p className="mb-1">신부측</p>
            <p className="mb-1">카카오뱅크 3333036818477 (박규휘)</p>
          </Col>
        </Row>
      ) : (
        ""
      )}
    </Col>
  );
}
