import React from "react";
import { Row, Col } from "reactstrap";

import { Map } from "../Component";

export default function Place(props) {
  const { name, latitude, longitude, image } = props.config.wedding.place;
  return (
    <Row>
      <Col>
        <Row className="pt-3">
          <Col>
            <h3>오시는 길</h3>
          </Col>
        </Row>
        <Row>
          <Col>
            <img className="map-image" src={image} alt={`${name}`} />
          </Col>
        </Row>
        <Row className="nav-button">
          <Col className="pt-2 pb-2 pr-3">
            <a
              href={`navermaps://?menu=location&pinType=place&lat=${latitude}&lng=${longitude}&title=${name}`}
              className="btn btn-naver btn-block"
            >
              지도 바로가기
            </a>
          </Col>
        </Row>
        <Row className="mb-5">
          <Col>
            <p className="mb-1">서울특별시 강남구 강남대로</p>
            <p className="mb-1">652 02 . 6081 . 5000</p>
          </Col>

          <Col>
            <p className="mb-1">
              지하철 이용 시3호선 신사역 6번 출구 (도보 5분)
            </p>
            <p className="mb-1">
              버스 이용 시240, 4312, 9404, 6009, 145, 148, 441, 542, 4212, 3030,
              강남 08, 서초 03
            </p>
          </Col>
        </Row>
      </Col>
    </Row>
  );
}
