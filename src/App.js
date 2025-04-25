import { useState } from "react";
import Landing from "./components/views/Landing";
import TypingTest from "./components/views/TypingTest";
import TypingResult from "./components/views/TypingResult";

function App() {
  const [viewname, setViewName] = useState("Landing");
  const [typingScore, setTypingScore] = useState(null);
  return (
    <>
      {viewname === "Landing" && <Landing setViewName={setViewName} />}
      {viewname === "TypingTest" && (
        <TypingTest setViewName={setViewName} setTypingScore={setTypingScore} />
      )}
      {viewname === "TypingResult" && (
        <TypingResult setViewName={setViewName} typingScore={typingScore} />
      )}
    </>
  );
}

export default App;
