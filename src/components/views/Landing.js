import React from "react";
import "./Landing.css";

function Landing({ setViewName }) {
  function clickHandle(evt) {
    setViewName("TypingTest");
  }

  return (
    <>
      <div class="landing-container">
        <h1 class="landing-title">타이핑 속도 연습</h1>
        <p class="landing-description">
          키보드 실력을 키우고 싶으신가요? <br />
          지금 바로 타이핑 연습을 시작해보세요!
          <br />
          (앞으로 반응속도 테스트 기능도 추가될 예정이에요 🚀)
        </p>
        <button class="landing-button" onClick={clickHandle}>
          연습 시작하기
        </button>
      </div>
    </>
  );
}
export default Landing;
