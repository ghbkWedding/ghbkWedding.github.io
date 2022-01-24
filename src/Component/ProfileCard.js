import React from "react";
import { Row, Col } from "reactstrap";
import FontAwesome from "react-fontawesome";

export default function ProfileCard(props) {
  const { name, name_short, image, phone, father, mother, position } =
    props.profile;
  return (
    <Row>
      <Col>
        <Row className="pt-3">
          <Col>
            <img
              className="rounded-circle profile-image"
              src={image}
              alt={`${name}`}
            />
          </Col>
        </Row>
        <Row className="mt-5 mb-3">
          <Col>
            <p className="mb-1 txt-small txt-bold">
              {mother}, {father}의 {position}
            </p>
            <p className="txt-bold">{name_short}</p>
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
