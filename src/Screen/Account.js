import React, { useState } from "react";
import { Row, Col } from "reactstrap";

export default function Account(props) {
  const { bridal, groom } = props.config;
  const [displayState, setDisplayState] = useState(false);

  const onClickAccountBtn = () => {
    setDisplayState(!displayState);
  };

  return (
    <Col>
      <Row>
        <Col>
          <h3>신랑 신부에게 마음 전하기</h3>
        </Col>
      </Row>
      <Row className="btn-account">
        <Col className="pt-2 pb-2 pr-3">
          <a onClick={onClickAccountBtn}>계좌번호 확인 ▽</a>
        </Col>
      </Row>

      {displayState ? (
        <div>
          <Row className="mb-1">
            <Col className="pt-2 pb-2 pr-3">
              <p className="mb-1">{bridal.role}측</p>
              <p className="mb-1">
                {bridal.motherAccount} ({bridal.mother})
              </p>
              <p className="mb-1">
                {bridal.account} ({bridal.name})
              </p>
            </Col>
          </Row>
          <Row className="mb-1">
            <Col className="pt-2 pb-2 pr-3">
              <p className="mb-1">{groom.role}측</p>
              <p className="mb-1">
                {groom.motherAccount} ({groom.mother})
              </p>
              <p className="mb-1">
                {groom.account} ({groom.name})
              </p>
            </Col>
          </Row>
        </div>
      ) : (
        ""
      )}
    </Col>
  );
}
