import React from "react";
import { Cell } from "./Cell";

export const Row = React.memo(({ row, rowI, onChangeHandler }) => {
  return (
    <tr className={rowI % 3 === 0 ? "borderRow" : ""}>
      {row.map((col, colI) => (
        <Cell
          key={colI}
          col={col}
          colI={colI}
          onChangeHandler={onChangeHandler}
          rowI={rowI}
        />
      ))}
    </tr>
  );
});
