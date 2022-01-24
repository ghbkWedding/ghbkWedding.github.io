import React from "react";
import ImageGallery from "react-image-gallery";
import { Row, Col } from "reactstrap";

export default function Gallery(props) {
  const { image, jeju } = props.config;
  return (
    <div>
      <Row>
        <Col className="mt-5 gallery">
          <ImageGallery items={image.gallery} />
        </Col>
      </Row>
      <Row className="mt-5">
        <Col>
          <img className="img-jeju" src={jeju[0]} href="#" />
        </Col>
        <Col>
          <img className="img-jeju" src={jeju[1]} />
        </Col>
        <Col>
          <img className="img-jeju" src={jeju[2]} />
        </Col>
      </Row>
      <Row>
        <Col>
          <img className="img-jeju" src={jeju[4]} alt={jeju[4]} />
        </Col>
        <Col>
          <img className="img-jeju" src={jeju[4]} />
        </Col>
        <Col>
          <img className="img-jeju" src={jeju[5]} />
        </Col>
      </Row>
    </div>
  );
}
