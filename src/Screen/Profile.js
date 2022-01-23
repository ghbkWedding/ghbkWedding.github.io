import React from "react";
import { Row, Col } from "reactstrap";

import { ProfileCard } from "../Component";

export default function Profile(props) {
  const { bridal, groom, icon } = props.config;
  return (
    <div>
      <Row className="mt-5 mb-5 profile">
        <Col>
          <ProfileCard profile={bridal} />
        </Col>
        <Col className="mb-5">
          <ProfileCard profile={groom} />
        </Col>
      </Row>
      <Row>
        <img className="rounded-circle flower-icon" src={icon.flower_yellow} />
      </Row>
      <Row className="">
        <Col className="txt-center txt">
          <p>평생을 같이하고 싶은 사람을 만났습니다.</p>
          <p>서로 아껴주고 이해하며</p>
          <p>사랑 베풀며 살고 싶습니다.</p>
          <p>코로나로 어려운 시기에 모시게 되어</p>
          <p>조심스러운 마음입니다.</p>
          <p>참석치 못하시더라도 마음으로</p>
          <p>새 가정에 축복해 주신다면 더없는 감사를</p>
          <p>드리겠습니다.</p>
        </Col>
      </Row>
      <Row>
        <img className="rounded-circle flower-icon" src={icon.flower_green} />
      </Row>
    </div>
  );
}
