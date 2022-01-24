import React from "react";
import ImageGallery from "react-image-gallery";
import PhotoGallery from "react-photo-gallery";
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
      {/* <Row className="jeju-gallery">
        <PhotoGallery photos={jeju} />
      </Row> */}
    </div>
  );
}
