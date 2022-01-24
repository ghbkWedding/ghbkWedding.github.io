import React, { useState, useRef } from "react";
import { Row, Col, Button } from "reactstrap";
import FontAwesome from "react-fontawesome";

export default function Account(props) {
  const { bridal, groom, icon } = props.config;
  const [displayState, setDisplayState] = useState(false);

  const copyText = useRef();

  const copy = () => {
    const el = copyText.current;
    console.log(el);
    el.select();
    document.execCommand("copy");
  };

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
        <Col className="mb-3 txt-middle">
          <p className="mb-1">혹 참석하지 못하시더라도</p>
          <p className="mb-1">축복해주시는 마음</p>
          <p className="mb-1">꼭 잊지않고 잘 살겠습니다.</p>
          <p className="mb-1">감사합니다.</p>
        </Col>
      </Row>
      <Row>
        <Col className="mb-5">
          <img className="rounded-circle flower-icon" src={icon.flower_pink} />
        </Col>
      </Row>
      <Row className="btn-account mb-1">
        <Col className="pt-2 pb-2 pr-3">
          <a onClick={onClickAccountBtn}>계좌번호 확인 ▽</a>
        </Col>
      </Row>
      {/* <a className="btn-icon" role="button" href={doCopy("d")}>
                  <FontAwesome name="phone" />
                </a> */}
      {displayState ? (
        <div className="account">
          <Row className="mb-1 txt-left">
            <Col className="pb-2 pr-3">
              <p className="mb-3 txt-head">{bridal.role}측</p>

              <p className="mb-1 txt-middle">
                {bridal.motherAccount} ({bridal.mother})
              </p>
              <p className="mb-1 txt-middle">
                {bridal.account} ({bridal.name})
              </p>
            </Col>
          </Row>
          <Row className="mb-1 txt-left">
            <Col className="pt-2 pb-2 pr-3">
              <p className="mb-3 txt-head">{groom.role}측</p>
              <p className="mb-1 txt-middle">
                {groom.motherAccount} ({groom.mother})
                {/* <Button className="btn-copy" onClick={copy}>
                  copy
                </Button> */}
              </p>
              <p className="mb-1 txt-middle">
                {groom.fatherAccount} ({groom.father})
              </p>
              <p className="mb-1 txt-middle">
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
