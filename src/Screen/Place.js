import React from "react";
import { Row, Col } from "reactstrap";

export default function Place(props) {
  const { name, latitude, longitude, image } = props.config.wedding.place;
  return (
    <Row className="mt-5">
      <Col className="mt-5">
        <Row className="mt-5">
          <Col>
            <p className="txt-bold txt-title">오시는 길</p>
          </Col>
        </Row>
        <Row>
          <Col>
            <img className="map-image" src={image} alt={`${name}`} />
          </Col>
        </Row>
        <Row>
          <Col className="pt-2 mb-3">
            <a
              href={`navermaps://?menu=location&pinType=place&lat=${latitude}&lng=${longitude}&title=${name}`}
              className="btn btn-wide btn-block"
            >
              지도 바로가기
            </a>
          </Col>
        </Row>
        <Row className="mb-5 txt-left txt-middle">
          <Col className="mb-5">
            <p className="mb-1 txt-bold">더컨벤션 신사</p>
            <p className="mb-3">Tel. 02-6081-5000</p>
            <p className="mb-1 txt-bold">지하철 이용 시</p>
            <p className="mb-3">3호선(신사역) 6번 출구에서 300M 도보 5분</p>
            <p className="mb-1 txt-bold">버스 이용 시</p>
            <p className="mb-3">
              40, 4312, 9404, 6009, 145, 148, 441, 542, 4212, 3030, 강남08,
              서초03
            </p>
            <p className="mb-1 txt-bold">자가용 이용시</p>
            <p className="mb-1">네비게이션 주소검색</p>
            <p className="mb-1">신주소) 강남구 강남대로 652 신사스퀘어</p>
            <p className="mb-1">구주소) 강남구 신사동 504-11</p>
          </Col>
        </Row>
      </Col>
    </Row>
  );
}
