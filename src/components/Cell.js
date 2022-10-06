import React from "react";
import { initialArray } from "../utils";

export const Cell = React.memo(({ col, colI, onChangeHandler, rowI }) => {
  return (
    <td key={colI + 1} className={colI % 3 === 0 ? "borderCol" : ""}>
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
  );
});
