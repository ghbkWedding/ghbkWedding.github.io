import React from "react";
import { Row, Col } from "reactstrap";
import FontAwesome from "react-fontawesome";

export default function Contact(props) {
  const {
    name,
    role,
    image_icon,
    phone,
    father,
    mother,
    fatherPhone,
    motherPhone,
    position,
  } = props.profile;
  return (
    <div>
      <Row className="pt-3">
        <Col>
          <img className="rounded-circle contact-icon" src={image_icon} />
        </Col>
      </Row>
      <Row className="pt-4 txt-head">
        <Col>
          <p className="mb-3 txt-head">{role} 측 혼주 연락하기</p>
        </Col>
      </Row>
      {motherPhone ? (
        <Row className="mb-3">
          <Col>
            <p className="mb-1 txt-middle">어머니 {mother}</p>
          </Col>
          <Col>
            <a className="btn-icon" role="button" href={`tel:${motherPhone}`}>
              <FontAwesome name="phone" />
            </a>
          </Col>
        </Row>
      ) : (
        ""
      )}
      {fatherPhone ? (
        <Row className="mb-1">
          <Col>
            <p className="mb-1 txt-middle">아버지 {father}</p>
          </Col>
          <Col>
            <a className="btn-icon" role="button" href={`tel:${fatherPhone}`}>
              <FontAwesome name="phone" />
            </a>
          </Col>
        </Row>
      ) : (
        ""
      )}
    </div>
  );
}
