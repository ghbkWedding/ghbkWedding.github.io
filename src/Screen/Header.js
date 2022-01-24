import React from "react";
import moment from "moment";
import { Row, Col } from "reactstrap";
import "moment/locale/ko";

export default function Header(props) {
  const { bridal, groom, image, wedding, title } = props.config;
  moment.locale("ko");
  return (
    <Row>
      <Col>
        <Row>
          <Col className="app-fluid">
            {/* <div className="app-header d-flex justify-content-center">
              <h2 className="mb-0">{title}</h2>
            </div> */}
            <img
              className="img-fluid img-header-title"
              src={image.header_title}
              alt="header_title"
            />
            <img
              className="img-fluid img-header"
              src={image.header}
              alt="header"
            />
          </Col>
        </Row>
        <Row>
          <Col className="pt-5 ">
            <h3 className="txt-bold txt-title mb-5">
              {bridal.name}&nbsp;&nbsp;♥&nbsp;&nbsp;{groom.name}
            </h3>
            <p className="pt-3">
              {moment(wedding.at, "YYYY-MM-DD HH:mm").format("LLLL")}
            </p>
            <p className="pt-0">{wedding.place.name}</p>
          </Col>
        </Row>
      </Col>
    </Row>
  );
}
