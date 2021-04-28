class DeadCell {
  toString() {
    return '.'
  }
}

export class Board {
  static from(raw: string[][]): Board {
    return new Board(raw.map((row) => row.map((rawCell) => new DeadCell())))
  }

  constructor(readonly cells: DeadCell[][]) {}

  iterate(iterations: number): Board {
    return new Board(this.cells)
  }

  asArray(): string[][] {
    return this.cells.map((rows) => rows.map((cell) => cell.toString()))
  }
}
