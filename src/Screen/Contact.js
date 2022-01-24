import React from "react";
import { Row, Col } from "reactstrap";
import ContactCard from "../Component/ContactCard";

export default function Contact(props) {
  const { bridal, groom } = props.config;
  return (
    <div>
      <Row className="mt-5 mb-5 background-rounded">
        <Col className="mb-5 ">
          <ContactCard profile={bridal} />
        </Col>
        <Col className="mb-5 ">
          <ContactCard profile={groom} />
        </Col>
      </Row>
    </div>
  );
}
