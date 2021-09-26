const winCells = ['012', '345', '678', '036', '147', '258', '048', '246'];

export const calcResult = (valArr: string[], playerTurn: string) => {
  const currentPlayerFilled = valArr
    .map((player, i) => (player === playerTurn ? i : undefined))
    .filter(v => !isNaN(v));
  const isWon =
    currentPlayerFilled.length >= 3
      ? winCells.some(winVals => {
          for (let i = 0; i < currentPlayerFilled.length; i++) {
            const num = currentPlayerFilled[i];
            if (!winVals.includes(num.toString())) {
              return false;
            }
          }
          return true;
        })
      : false;
  return isWon;
};
