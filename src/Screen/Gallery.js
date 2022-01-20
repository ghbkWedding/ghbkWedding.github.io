import React from "react";
import ImageGallery from "react-image-gallery";
import { Row, Col } from "reactstrap";

export default function Gallery(props) {
  const { image } = props.config;
  return (
    <Row>
      <Col className="mt-5 gallery">
        <ImageGallery items={image.gallery} />
      </Col>
    </Row>
  );
}
