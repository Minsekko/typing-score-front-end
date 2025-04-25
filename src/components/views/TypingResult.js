import React, { useEffect, useState } from "react";
import "./TypingResult.css";

function TypingResult({ typingScore, setViewName }) {
  const [scores, setScores] = useState({ top: [], middle: [], bottom: [] });

  useEffect(
    function () {
      fetch(
        "http://192.168.10.40:8080/api/typingScore/ranking?scoreId=" +
          typingScore.id,
        {
          method: "get",
        }
      )
        .then((response) => {
          return response.json();
        })
        .then((jons) => {
          console.log(jons);
          setScores(jons);
        });
    },
    [] //비워두게 되면 화면이 출력될때 한번 실행된다
  );

  return (
    <>
      <div className="result-container">
        <h2 className="result-title">결과 요약</h2>

        <div className="user-rank-box">
          <h3>👏 당신의 순위는?</h3>
          <p>
            <strong>{typingScore.elapsed}초</strong> | 정확도:{" "}
            <strong>{typingScore.accuracy.toFixed(2)}%</strong>
          </p>
        </div>

        <div className="rank-table-section">
          <h3 className="ranking-title">🏆 전체 순위</h3>
          <table className="rank-table">
            <thead>
              <tr>
                <th>순위</th>
                <th>닉네임</th>
                <th>정확도</th>
                <th>시간</th>
              </tr>
            </thead>
            <tbody>
              {scores.top.map((one) => {
                return (
                  <tr
                    key={one.score.id}
                    className={one.mine ? "my-rank-row" : ""}
                  >
                    <td>
                      {one.rank}
                      {one.mine && <span>(나)</span>}
                    </td>
                    <td>-</td>
                    <td>{one.score.accuracy.toFixed(2)}%</td>
                    <td>{one.score.elapsed.toFixed(2)}초</td>
                  </tr>
                );
              })}
              <tr
                style={{
                  textAlign: "center",
                  margin: "16px 0",
                  color: "#aaa",
                  fontStyle: "italic",
                }}
              >
                <td colSpan={4}>...중간 순위 생략...</td>
              </tr>

              {scores.middle &&
                scores.middle.map((one) => {
                  return (
                    <tr
                      key={one.score.id}
                      className={one.mine ? "my-rank-row" : ""}
                    >
                      <td>
                        {one.rank}
                        {one.mine && <span>(나)</span>}
                      </td>
                      <td>-</td>
                      <td>{one.score.accuracy.toFixed(2)}%</td>
                      <td>{one.score.elapsed.toFixed(2)}초</td>
                    </tr>
                  );
                })}

              <tr
                style={{
                  textAlign: "center",
                  margin: "16px 0",
                  color: "#aaa",
                  fontStyle: "italic",
                }}
              >
                <td colSpan={4}> ...중간 순위 생략... </td>
              </tr>

              {scores.bottom &&
                scores.bottom.map((one) => {
                  return (
                    <tr
                      key={one.score.id}
                      className={one.mine ? "my-rank-row" : ""}
                    >
                      <td>
                        {one.rank}
                        {one.mine && <span>(나)</span>}
                      </td>
                      <td>-</td>
                      <td>{one.score.accuracy.toFixed(2)}%</td>
                      <td>{one.score.elapsed.toFixed(2)}초</td>
                    </tr>
                  );
                })}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}

export default TypingResult;
