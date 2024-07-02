import React, { useEffect, useState } from "react";
import Result from "../../components/Result/Result";
import SmileList from "../../components/SmileList/SmileList";

function SmilePage() {
  const savedCount = JSON.parse(localStorage.getItem("smileCounts")) || [
    0, 0, 0, 0, 0,
  ];
  const savedShowResult =
    JSON.parse(localStorage.getItem("showResult")) || false;

  const [count, setCount] = useState(savedCount);
  const [showResult, setShowResult] = useState(savedShowResult);

  useEffect(() => {
    localStorage.setItem("smileCounts", JSON.stringify(count));
  }, [count]);

  useEffect(() => {
    localStorage.setItem("showResult", JSON.stringify(showResult));
  }, [showResult]);

  const handleSmileClick = (index) => {
    const newCount = [...count];
    newCount[index]++;
    setCount(newCount);
  };

  const handleShowResult = () => {
    setShowResult(true);
  };

  const handleClearResults = () => {
    const newCount = [0, 0, 0, 0, 0];
    setCount(newCount);
    setShowResult(false);
  };

  return (
    <div className="smile-container">
      <SmileList count={count} onSmileClick={handleSmileClick}></SmileList>
      <Result
        count={count}
        showResult={showResult}
        onShowResult={handleShowResult}
        onClearResults={handleClearResults}
      />
    </div>
  );
}

export default SmilePage;
