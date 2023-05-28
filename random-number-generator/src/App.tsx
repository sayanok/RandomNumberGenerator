import React, { useState } from "react";

const App: React.FC = () => {
  const [maximumValue, setMaximumValue] = useState<number>(0);
  const [minimumValue, setMinimumValue] = useState<number>(0);
  const [randomNumber, setRandomNumber] = useState<number>();
  const [errorMessage, setErrorMessage] = useState("");

  function onChangeHandler(type: string, value: number) {
    if (type === "maximumValue") {
      setMaximumValue(value);
    } else {
      setMinimumValue(value);
    }
  }

  function onClickHandler() {
    if (minimumValue >= maximumValue) {
      setErrorMessage("最小値は最大値より小さい値にしてください");
    } else {
      setErrorMessage("");
      generateRandomNumbers();
    }
  }

  function generateRandomNumbers() {
    setRandomNumber(Math.floor(Math.random() * (maximumValue - minimumValue + 1) + minimumValue));
  }
  return (
    <>
      <p>
        乱数の最大値
        <input type="number" onChange={(e) => onChangeHandler("maximumValue", Number(e.target.value))} />
      </p>
      <p>
        乱数の最小値
        <input type="number" onChange={(e) => onChangeHandler("minimumValue", Number(e.target.value))} />
      </p>
      <button onClick={() => onClickHandler()}>乱数を生成する</button>
      <p>{errorMessage}</p>
      <p>{randomNumber}</p>
    </>
  );
};

export default App;
