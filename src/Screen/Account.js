import React, { useState, useRef } from "react";
import { Row, Col } from "reactstrap";
import FontAwesome from "react-fontawesome";

export default function Account(props) {
  const { bridal, groom } = props.config;
  const [displayState, setDisplayState] = useState(false);

  const doCopy = (text) => {
    // 흐름 1.
    if (!document.queryCommandSupported("copy")) {
      return alert("복사하기가 지원되지 않는 브라우저입니다.");
    }
    // 흐름 2.
    const textarea = document.createElement("textarea");
    textarea.value = text;
    textarea.style.top = 0;
    textarea.style.left = 0;
    textarea.style.position = "fixed";
    // 흐름 3.
    document.body.appendChild(textarea);
    // focus() -> 사파리 브라우저 서포팅
    textarea.focus();
    // select() -> 사용자가 입력한 내용을 영역을 설정할 때 필요
    textarea.select();
    // 흐름 4.
    document.execCommand("copy");
    // 흐름 5.
    document.body.removeChild(textarea);
    alert("클립보드에 복사되었습니다.");
  };

  const onClickAccountBtn = () => {
    setDisplayState(!displayState);
  };

  return (
    <Col className="mt-5">
      <Row className="mt-5">
        <Col>
          <p className="txt-title mb-3 pb-3">신랑 신부에게 마음 전하기</p>
        </Col>
      </Row>
      <Row>
        <Col className="mb-3">
          <p className="mb-1">코로나로 인해 송구스럽게도</p>
          <p className="mb-1">계좌번호를 기재한 점 널리 이해부탁드립니다.</p>
          <p className="mb-1">축의금이 아닌 마음만으로도</p>
          <p className="mb-1">충분히 감사드립니다.</p>
        </Col>
      </Row>
      <Row className="btn-account mb-5">
        <Col className="pt-2 pb-2 pr-3">
          <a onClick={onClickAccountBtn}>계좌번호 확인 ▽</a>
        </Col>
      </Row>
      {/* <a className="btn-icon" role="button" href={doCopy("d")}>
                  <FontAwesome name="phone" />
                </a> */}
      {displayState ? (
        <div>
          <Row className="mb-1 txt-left">
            <Col className="pb-2 pr-3">
              <p className="mb-1 txt-head">{bridal.role}측</p>

              <p className="mb-1">
                {bridal.motherAccount} ({bridal.mother})
              </p>
              <p className="mb-1">
                {bridal.account} ({bridal.name})
              </p>
            </Col>
          </Row>
          <Row className="mb-1 txt-left">
            <Col className="pt-2 pb-2 pr-3">
              <p className="mb-1 txt-head">{groom.role}측</p>
              <p className="mb-1">
                {groom.motherAccount} ({groom.mother})
              </p>
              <p className="mb-1">
                {groom.fatherAccount} ({groom.father})
              </p>
              <p className="mb-1">
                {groom.account} ({groom.name})
              </p>
            </Col>
          </Row>
        </div>
      ) : (
        ""
      )}
    </Col>
  );
}
