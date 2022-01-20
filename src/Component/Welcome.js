import React from "react";
import { Row, Col } from "reactstrap";
import FontAwesome from "react-fontawesome";

export default function Welcome(props) {
  const {
    name,
    role,
    image,
    phone,
    father,
    mother,
    fatherPhone,
    motherPhone,
    position,
  } = props.profile;

  return (
    <Row>
      <Col>text</Col>
    </Row>
  );
}
