import { useState } from "react";
import { checkValid } from "./utils";
import "./App.css";

const initialArray = [
  [null, null, null, 2, 6, null, 7, null, 1],
  [6, 8, null, null, 7, null, null, 9, null],
  [1, 9, null, null, null, 4, 5, null, null],
  [8, 2, null, 1, null, null, null, 4, null],
  [null, null, 4, 6, null, 2, 9, null, null],
  [null, 5, null, null, null, 3, null, 2, 8],
  [null, null, 9, 3, null, null, null, 7, 4],
  [null, 4, null, null, 5, null, null, 3, 6],
  [7, null, 3, null, 1, 8, null, null, null],
];

function App() {
  const [sudokuArray, setSudokuArray] = useState(initialArray);
  const [checkResult, setCheckResult] = useState("");

  const onChangeHandler = (e, row, col) => {
    const value = Number(e.target.value) || null;
    const deepCopy = JSON.parse(JSON.stringify(sudokuArray));
    deepCopy[row][col] = value;

    setSudokuArray(deepCopy);
    setCheckResult("");
  };

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
            <tr key={rowI} className={rowI % 3 === 0 ? "borderRow" : ""}>
              {row.map((col, colI) => (
                <td
                  key={colI + 1}
                  className={colI % 3 === 0 ? "borderCol" : ""}
                >
                  <input
                    type="text"
                    pattern="[1-9]"
                    maxLength="1"
                    value={col || ""}
                    onChange={(e) => onChangeHandler(e, rowI, colI)}
                    className="input"
                    disabled={initialArray[rowI][colI]}
                  />
                </td>
              ))}
            </tr>
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
