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
            <p className="mb-1 txt-head">
              {father}, {mother}의 {position}
            </p>
            <h4 className="txt-title">{name}</h4>
          </Col>
        </Row>
        <Row>
          <Col>
            <p className="mb-1 txt">{role}에게 연락하기</p>
          </Col>
          <Col>
            <a
              className="btn-icon"
              size="sm"
              role="button"
              href={`tel:${phone}`}
            >
              <FontAwesome name="phone" />
            </a>
          </Col>
        </Row>
        <Row className="pt-4 txt-head">
          <Col>
            <p className="mb-2 txt-head">{role} 측 혼주</p>
          </Col>
        </Row>
        {motherPhone ? (
          <Row className="mb-3">
            <Col>
              <p className="mb-1 txt">어머니 {mother}</p>
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
              <p className="mb-1 txt">아버지 {father}</p>
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
      </Col>
    </Row>
  );
}
