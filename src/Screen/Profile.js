import React from "react";
import { Row, Col } from "reactstrap";

import { ProfileCard } from "../Component";
import Welcome from "../Component/Welcome";

export default function Profile(props) {
  const { bridal, groom } = props.config;
  return (
    <div>
      <Row className="mt-5 mb-5">
        <Col>
          <ProfileCard profile={bridal} />
        </Col>
        <Col className="mb-5">
          <ProfileCard profile={groom} />
        </Col>
      </Row>
      <Row>
        <Col className="mb-5">
          <h4>평생을 같이하고 싶은 사람을 만났습니다.</h4>
          <h4>서로 아껴주고 이해하며</h4>
          <h4>사랑 베풀며 살고 싶습니다.</h4>
          <h4>저희 약속 위에 따뜻한 격려로 축복해주셔서</h4>
          <h4>힘찬 출발의 디딤이 되어 주십시오.</h4>
        </Col>
      </Row>
    </div>
  );
}
