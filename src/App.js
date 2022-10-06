import { useState, useCallback } from "react";
import { checkValid, initialArray } from "./utils";
import { Row } from "./components/Row";
import "./App.css";

function App() {
  const [sudokuArray, setSudokuArray] = useState(initialArray);
  const [checkResult, setCheckResult] = useState("");

  const onChangeHandler = useCallback((e, row, col) => {
    const value = Number(e.target.value) || null;

    setSudokuArray((prev) => {
      const deepCopy = JSON.parse(JSON.stringify(prev));
      deepCopy[row][col] = value;
      return deepCopy;
    });

    setCheckResult("");
  }, []);

  const solveSudoku = () => {
    const result = checkValid(sudokuArray);
    setCheckResult(result);
  };

  const clearBoard = () => {
    setSudokuArray(initialArray);
  };

  return (
    <div className="App">
      <table>
        <tbody>
          {sudokuArray.map((row, rowI) => (
            <Row
              key={rowI}
              row={row}
              rowI={rowI}
              onChangeHandler={onChangeHandler}
            />
          ))}
        </tbody>
      </table>
      {checkResult ? (
        <div
          className={`messages ${
            checkResult === "Completed" ? "completed" : "error"
          }`}
        >
          {checkResult}
        </div>
      ) : null}
      <div className="buttons-container">
        <button className="check-button" onClick={solveSudoku}>
          Check answers
        </button>
        <button className="clear-button" onClick={clearBoard}>
          Clear
        </button>
      </div>
    </div>
  );
}

export default App;
