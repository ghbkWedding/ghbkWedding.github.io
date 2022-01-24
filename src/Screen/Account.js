import React, { useState, useCallback, useRef } from "react";
import { Row, Col } from "reactstrap";

export default function Account(props) {
  const { bridal, groom, icon } = props.config;
  const [displayState, setDisplayState] = useState(false);

  const copyText = useRef();
  const scrollRef = useRef();

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

  const scrollToBottom = useCallback(() => {
    console.log("d");
    if (displayState) {
      // 스크롤 내리기
      scrollRef.current.scrollIntoView({
        behavior: "smooth",
        block: "end",
        inline: "nearest",
      });
      console.log("d");
    }
  }, [displayState]);

  return (
    <Col className="mt-5">
      <Row className="mt-5">
        <Col className="mt-5">
          <p className="txt-bold txt-title mb-3 pb-3 mt-5">
            신랑 신부에게 마음 전하기
          </p>
        </Col>
      </Row>
      <Row className="mb-3">
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
      <Row className="btn btn-wide mb-3">
        <Col>
          <a onClick={onClickAccountBtn}>계좌번호 확인 ▽</a>
        </Col>
      </Row>

      {displayState ? (
        <Col className="background-rounded">
          <Row className="mb-1 txt-left">
            <Col className="">
              <p className="mb-3 txt-bold">{bridal.role}측</p>

              <p className="mb-1 txt-middle">
                {bridal.motherAccount} ({bridal.mother})
              </p>
              <p className="mb-1 txt-middle">
                {bridal.account} ({bridal.name})
              </p>
            </Col>
          </Row>
          <Row className="mb-1 txt-left">
            <Col className="pt-2 pb-2">
              <p className="mb-3 txt-bold">{groom.role}측</p>
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
        </Col>
      ) : (
        ""
      )}
      <Row ref={scrollRef}></Row>
    </Col>
  );
}
