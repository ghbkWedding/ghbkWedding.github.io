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
            <p className="mb-1">
              {father}, {mother}의 {position}
            </p>
            <h4>{name}</h4>
          </Col>
        </Row>
        <Row>
          <Col>
            <p className="mb-1">{role}에게 연락하기</p>
          </Col>
          <Col>
            <a
              className="btn btn-secondary m-1"
              role="button"
              href={`tel:${phone}`}
            >
              <FontAwesome name="phone" />
            </a>
            <a
              className="btn btn-secondary m-1"
              role="button"
              href={`sms:${phone}`}
            >
              <FontAwesome name="envelope" />
            </a>
          </Col>
        </Row>
        <Row className="pt-4">
          <Col>
            <p className="mb-2 txt-title">{role} 측 혼주</p>
          </Col>
        </Row>
        <Row>
          <Col>
            <p className="mb-1">어머니 {mother}</p>
          </Col>
          <Col>
            <a
              className="btn btn-secondary m-1"
              role="button"
              href={`tel:${motherPhone}`}
            >
              <FontAwesome name="phone" />
            </a>
            <a
              className="btn btn-secondary m-1"
              role="button"
              href={`sms:${motherPhone}`}
            >
              <FontAwesome name="envelope" />
            </a>
          </Col>
        </Row>

        {fatherPhone ? (
          <Row>
            <Col>
              <p className="mb-1">아버지 {father}</p>
            </Col>
            <Col>
              <a
                className="btn btn-secondary m-1"
                role="button"
                href={`tel:${fatherPhone}`}
              >
                <FontAwesome name="phone" />
              </a>
              <a
                className="btn btn-secondary m-1"
                role="button"
                href={`sms:${fatherPhone}`}
              >
                <FontAwesome name="envelope" />
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
