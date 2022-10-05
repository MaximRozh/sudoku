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

  const onChangeHandler = (e, row, col) => {
    const value = Number(e.target.value) || null;
    const deepCopy = JSON.parse(JSON.stringify(sudokuArray));
    deepCopy[row][col] = value;

    setSudokuArray(deepCopy);
  };

  const solveSudoku = () => {
    const message = checkValid(sudokuArray);
    message && alert(message);
  };
  return (
    <div className="App">
      <table>
        <tbody>
          {Array.from(new Array(9)).map((_, row) => (
            <tr key={row} className={row % 3 === 0 ? "borderRow" : ""}>
              {Array.from(new Array(9)).map((_, col) => (
                <td key={col + 1} className={col % 3 === 0 ? "borderCol" : ""}>
                  <input
                    type="text"
                    pattern="[1-9]"
                    maxLength="1"
                    value={sudokuArray[row][col] || ""}
                    onChange={(e) => onChangeHandler(e, row, col)}
                    className="input"
                    disabled={initialArray[row][col]}
                  />
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
      <div className="buttonsContainer">
        <button className="Check" onClick={solveSudoku}>
          Check answers
        </button>
      </div>
    </div>
  );
}

export default App;
