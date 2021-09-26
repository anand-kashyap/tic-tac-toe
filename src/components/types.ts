export type ICell = 'O' | 'X' | '';

export type PlayerTurn = Omit<ICell, "''">;
