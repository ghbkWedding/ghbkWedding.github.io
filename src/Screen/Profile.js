import React from "react";
import { Row, Col } from "reactstrap";

import { ProfileCard } from "../Component";

export default function Profile(props) {
  const { bridal, groom } = props.config;
  return (
    <Row className="mt-5 mb-5">
      <Col>
        <ProfileCard profile={bridal} />
      </Col>
      <Col className="mb-5">
        <ProfileCard profile={groom} />
      </Col>
    </Row>
  );
}
