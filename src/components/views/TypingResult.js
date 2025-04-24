import React from "react";
import "./TypingResult.css";

function TypingResult() {
  return (
    <>
      <div class="result-container">
        <h2 class="result-title">결과 요약</h2>

        <div class="user-rank-box">
          <h3>👏 당신의 순위는?</h3>
          <p>
            <strong>12등</strong> / 총 120명
          </p>
          <p>
            WPM: <strong>78</strong> | 정확도: <strong>96%</strong>
          </p>
        </div>

        <div class="rank-table-section">
          <h3>🏆 전체 순위</h3>
          <table class="rank-table">
            <thead>
              <tr>
                <th>순위</th>
                <th>닉네임</th>
                <th>WPM</th>
                <th>정확도</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td>speedmaster</td>
                <td>105</td>
                <td>99%</td>
              </tr>
              <tr>
                <td>2</td>
                <td>typer98</td>
                <td>98</td>
                <td>97%</td>
              </tr>
              <tr class="highlight">
                <td>12</td>
                <td>me</td>
                <td>78</td>
                <td>96%</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}

export default TypingResult;
