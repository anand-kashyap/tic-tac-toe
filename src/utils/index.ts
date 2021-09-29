const winCells = ['012', '345', '678', '036', '147', '258', '048', '246'];

const styles = {
  '012': `right: 48%;
  bottom: 33%;
  transform: rotate(90deg);`,
  '345': `right: 48%;
  transform: rotate(90deg);`,
  '678': `right: 48%;
  top: 33%;
  transform: rotate(90deg);`,
  '036': `left: 25px;`,
  '147': `left: 50%;`,
  '258': `left: 82%;`,
  '048': `right: 48%;
  transform: rotate(135deg);`,
  '246': `right: 48%;
  transform: rotate(45deg);`,
};
export const calcResult = (valArr: string[], playerTurn: string) => {
  for (const winCell of winCells) {
    const isWon = winCell.split('').every(num => valArr[num] === playerTurn);
    if (isWon) return styles[winCell];
  }
  return '';
};
