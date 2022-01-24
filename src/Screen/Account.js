import React, { useState, useEffect } from "react";
import { Row, Col, Button } from "reactstrap";

export default function Account(props) {
  const { bridal, groom, icon } = props.config;
  const [displayState, setDisplayState] = useState(false);

  const doCopy = (copyText) => {
    // 흐름 1.
    if (!document.queryCommandSupported("copy")) {
      return alert("복사하기가 지원되지 않는 브라우저입니다.");
    }
    // 흐름 2.
    const textarea = document.createElement("textarea");
    textarea.value = copyText;
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

  const onClickCopyBtn = (val) => {
    doCopy(val);
  };

  return (
    <Col className="mt-5">
      <Row className="mt-5">
        <Col className="mt-5">
          <p className="txt-bold txt-title mb-5 mt-5">
            신랑 신부에게 마음 전하기
          </p>
        </Col>
      </Row>
      <Row className="mb-3">
        <Col className="mb-3 txt-middle">
          <p>혹 참석하지 못하시더라도</p>
          <p>축복해주시는 마음</p>
          <p>꼭 잊지않고 잘 살겠습니다.</p>
          <p>감사합니다.</p>
        </Col>
      </Row>
      <Row className="mb-5">
        <Col>
          <img className="rounded-circle flower-icon" src={icon.flower_pink} />
        </Col>
      </Row>
      <Row className="btn btn-wide mb-3">
        <Col>
          <a onClick={onClickAccountBtn}>계좌번호 확인 ▽</a>
        </Col>
      </Row>

      {displayState ? (
        <Col className="account-background-rounded">
          <Row className="mt-3 mb-3 txt-left">
            <Col>
              <p className="mb-3 txt-bold">{bridal.role}측</p>

              <p className="txt-middle">
                {bridal.motherAccount} ({bridal.mother})
                <Button
                  className="btn btn-icon btn-copy"
                  onClick={() => onClickCopyBtn(bridal.motherAccount)}
                >
                  copy
                </Button>
              </p>
              <p className="txt-middle">
                {bridal.account} ({bridal.name})
                <Button
                  className="btn btn-icon btn-copy"
                  onClick={() => onClickCopyBtn(bridal.account)}
                >
                  copy
                </Button>
              </p>
            </Col>
          </Row>
          <Row className="mb-3 txt-left">
            <Col>
              <p className="txt-bold">{groom.role}측</p>
              <p className="txt-middle">
                {groom.motherAccount} ({groom.mother})
                <Button
                  className="btn btn-icon btn-copy"
                  onClick={() => onClickCopyBtn(groom.motherAccount)}
                >
                  copy
                </Button>
              </p>

              <p className="txt-middle">
                {groom.fatherAccount} ({groom.father})
                <Button
                  className="btn btn-icon btn-copy"
                  onClick={() => onClickCopyBtn(groom.fatherAccount)}
                >
                  copy
                </Button>
              </p>
              <p className="txt-middle">
                {groom.account} ({groom.name})
                <Button
                  className="btn btn-icon btn-copy"
                  onClick={() => onClickCopyBtn(groom.account)}
                >
                  copy
                </Button>
              </p>
            </Col>
          </Row>
        </Col>
      ) : (
        ""
      )}
    </Col>
  );
}
