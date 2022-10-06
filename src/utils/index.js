const hasDuplicates = (arr) => {
  const filtred = arr.filter(Boolean);
  const unique = new Set(filtred);
  return unique.size !== filtred.length;
};

const isBoardFilled = (arr) => {
  return arr.every((row) => {
    const filtred = row.filter(Boolean);
    return filtred.length === row.length;
  });
};

const checkIsInvalid = (sudoku) => sudoku.some((arr) => hasDuplicates(arr));

const getСoordinates = (row, col) => {
  const boxI = Math.ceil((row + 1) / 3);
  const boxJ = Math.ceil((col + 1) / 3);
  const boxCoordinates = 3 * (boxI - 1) + boxJ;

  const axisX = (row % 3) + 1;
  const axisY = (col % 3) + 1;
  const axes = axisX + (axisY - 1) * 3;

  return { boxCoordinates, axes };
};

export const checkValid = (sudoku) => {
  const arr = [];
  const boxArr = [];

  for (let i = 0; i < sudoku.length; i++) {
    for (let j = 0; j < sudoku[i].length; j++) {
      const { boxCoordinates, axes } = getСoordinates(i, j);

      if (!boxArr[boxCoordinates - 1]) {
        boxArr[boxCoordinates - 1] = [];
      }
      if (!arr[j]) {
        arr[j] = [];
      }

      boxArr[boxCoordinates - 1][axes - 1] = sudoku[i][j];
      arr[j][i] = sudoku[i][j];
    }
  }

  if (checkIsInvalid(sudoku)) {
    return "a row contains duplicate numbers";
  }
  if (checkIsInvalid(arr)) {
    return "a column contains duplicate numbers";
  }
  if (checkIsInvalid(boxArr)) {
    return "one of the nine 3x3 subgrids that compose the grid contains duplicate numbers";
  }
  if (isBoardFilled(sudoku)) {
    return "complited";
  }

  return null;
};
