import React from "react";
import { Row, Col } from "reactstrap";
import FontAwesome from "react-fontawesome";

export default function ProfileCard(props) {
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
      <Col>
        <Row className="pt-3 mb-5">
          <Col>
            <img
              className="rounded-circle profile-image"
              src={image}
              alt={`${name}`}
            />
          </Col>
        </Row>
        <Row className="pt-4">
          <Col>
            <p className="mb-1 txt-center">
              {father}, {mother}의 {position}
            </p>
            <p className="txt-head">{name}</p>
          </Col>
        </Row>
        <Row>
          <Col>
            <a className="btn-icon" role="button" href={`tel:${phone}`}>
              <FontAwesome name="phone" />
            </a>
            <a className="btn-icon" role="button" href={`sms:${phone}`}>
              <FontAwesome name="envelope" />
            </a>
          </Col>
        </Row>
      </Col>
    </Row>
  );
}
