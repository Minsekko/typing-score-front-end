import { useState } from "react";
import Landing from "./components/views/Landing";
import TypingTest from "./components/views/TypingTest";
import TypingResult from "./components/views/TypingResult";

function App() {
  const [viewname, setViewName] = useState("Landing");

  return (
    <>
      {viewname === "Landing" && <Landing setViewName={setViewName} />}
      {viewname === "TypingTest" && <TypingTest setViewName={setViewName} />}
      {viewname === "TypingResult" && <TypingResult />}
    </>
  );
}

export default App;
